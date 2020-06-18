import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Location } from '@angular/common';
import { Step } from 'src/app/models/step';
import { FormGroup, FormBuilder } from '@angular/forms';

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
    console.log("getCurrentRecipe", this.recipe);
    console.log("getCurrentStep", this.recipe.steps[0], this.currStep);
    return this.recipe.steps[this.currStep];
  }

  goToNextStep(): void {
    this.currStep = this.currStep < this.recipe.steps.length - 1 ? this.currStep + 1 : this.currStep;
  }

  goToPrevStep(): void {
    this.currStep = this.currStep > 0 ? this.currStep - 1 : this.currStep;
  }

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    const foundRecipe = this.recipeService.getRecipeById(id);
    console.log('make-recipe_foundRecipe:', foundRecipe);
    console.log('make-recipe_id:', id)
    this.recipe = foundRecipe != null ? foundRecipe : this.recipe;
    console.log('make-recipe_recipe', this.recipe)
  }

}
