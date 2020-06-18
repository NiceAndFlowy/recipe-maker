import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  get Recipes(): Recipe[] {
    console.log("Main_Recipes():", this.recipeService.Recipes);
    return this.recipeService.Recipes;
  }

  ngOnInit(): void {
  }

}
