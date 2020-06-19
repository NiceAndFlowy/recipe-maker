import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { StepFormDialogComponent } from './components/step-form-dialog/step-form-dialog.component';
import { MainComponent } from './components/main/main.component';
import { MakeRecipeComponent } from './components/make-recipe/make-recipe.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'recipe', component: RecipeFormComponent },
  { path: 'recipe/:id', component: MakeRecipeComponent },
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
