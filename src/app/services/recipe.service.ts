import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[];
  private id: number;

  constructor() {
    this.recipes = [];
    this.id = 0;
  }

  addRecipe(r: Recipe): void {
    r.id = this.id++;
    this.recipes.push(r);
    console.log('RecipeService_addRecipe()', this.recipes);
  }

  get Recipes(): Recipe[] {
    console.log()
    return this.recipes;
  }

}
