import { Injectable } from '@angular/core';
import { Recipe } from '../models/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[];
  private id: number;
  private STORAGE_RECIPES = 'recipes';
  private STORAGE_ID = 'id';


  constructor() {
    // retrieve the last saved id/recipe if available
    let storedRecipes = JSON.parse(localStorage.getItem(this.STORAGE_RECIPES));
    let storedId = JSON.parse(localStorage.getItem(this.STORAGE_ID));

    this.id = storedId != null ? storedId : 0;
    this.recipes = storedRecipes != null ? storedRecipes : [];
  }

  get Id() {
    return this.id;
  }

  addRecipe(r: Recipe): void {
    r.id = this.id++;
    this.recipes.push(r);
    // save new changes
    this.saveStateToStorage();
    console.log('RecipeService_addRecipe()', this.recipes);
  }

  get Recipes(): Recipe[] {
    console.log()
    return this.recipes;
  }

  getRecipeById(id: number): Recipe {
    const foundRecipe = this.recipes.find(recipe => recipe.id == id);
    return foundRecipe;
  }

  private saveStateToStorage(): void {
    this.saveRecipesToStorage();
    this.saveIdToStorage();
  }

  private saveRecipesToStorage(): void {
    localStorage.setItem(this.STORAGE_RECIPES, JSON.stringify(this.recipes));
  }

  private saveIdToStorage(): void {
    localStorage.setItem(this.STORAGE_ID, JSON.stringify(this.id));
  }

}
