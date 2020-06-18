import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StepFormDialogComponent } from '../step-form-dialog/step-form-dialog.component';
import { Step } from 'src/app/models/step';
import { RecipeService } from 'src/app/services/recipe.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent implements OnInit {
  steps: Step[];
  form: FormGroup;
  submitted: boolean;

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog, private recipeService: RecipeService) {
    this.steps = [];
    this.submitted = false;
  }

  get title() {
    return this.form.get('title');
  }

  openDialog(): void {
    const stepForm = this.dialog.open(StepFormDialogComponent, {
      width: '250px'
    });

    stepForm.afterClosed().subscribe(result => {
      console.log("result after submit", result);
      if (result != null) {
        const newStep = new Step(result.title, result.description, result.media);
        this.steps = this.steps.concat([newStep]);
      }

    })
  }

  submitRecipe(): void {
    this.submitted = true;
    this.form.markAllAsTouched();
    if (this.title.invalid || this.steps.length === 0)
      return;
    let newRecipe = { title: this.title.value, steps: this.steps, id: 0 };
    this.resetValues();
    this.recipeService.addRecipe(newRecipe);
  }

  resetValues(): void {
    this.title.setValue('');
    this.title.markAsUntouched();
    this.steps = [];
    this.submitted = false;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
    })
  }

}
