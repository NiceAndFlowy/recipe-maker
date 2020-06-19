import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipeComponent } from './components/recipe/recipe.component';
import { StepComponent } from './components/step/step.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { AppRoutingModule } from './app-routing.module';
import { StepFormDialogComponent } from './components/step-form-dialog/step-form-dialog.component';
import { MainComponent } from './components/main/main.component';
import { RecipeService } from './services/recipe.service';
import { MakeRecipeComponent } from './components/make-recipe/make-recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    StepComponent,
    RecipeFormComponent,
    StepFormDialogComponent,
    MainComponent,
    MakeRecipeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
