import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/models/recipe';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  numGridCols: number = 3;

  constructor(private recipeService: RecipeService, private breakpointObserver: BreakpointObserver) {
    const isAtLeastMedium: string = '(min-width: 1024px)';

    /** Update number of grid columns based on media size */
    breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall, Breakpoints.Medium, isAtLeastMedium]).subscribe(result => {
      if (result.breakpoints[Breakpoints.XSmall]) {
        this.numGridCols = 1;
      }
      else if (result.breakpoints[Breakpoints.Small]) {
        this.numGridCols = 2;
      }
      else {
        this.numGridCols = 3;
      }
    })
  }

  get Recipes(): Recipe[] {
    return this.recipeService.Recipes;
  }

  ngOnInit(): void {
  }

}
