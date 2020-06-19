import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Location } from '@angular/common';
import { Step } from 'src/app/models/step';

@Component({
  selector: 'app-make-recipe',
  templateUrl: './make-recipe.component.html',
  styleUrls: ['./make-recipe.component.css']
})
export class MakeRecipeComponent implements OnInit {
  recipe: Recipe;
  currStep: number;

  constructor(private route: ActivatedRoute, private location: Location, private recipeService: RecipeService) {
    this.currStep = 0;
  }

  getCurrentStep(): Step {
    return this.recipe.steps[this.currStep];
  }

  isFirstStep(): boolean {
    return this.currStep === 0;
  }

  isLastStep(): boolean {
    return this.currStep === this.recipe.steps.length-1;
  }

  goToNextStep(): void {
    this.currStep = this.isLastStep() ? this.currStep : this.currStep+1;
  }

  goToPrevStep(): void {
    this.currStep = this.isFirstStep() ? this.currStep : this.currStep-1;
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    const foundRecipe = this.recipeService.getRecipeById(id);
    this.recipe = foundRecipe != null ? foundRecipe : this.recipe;
  }

}
