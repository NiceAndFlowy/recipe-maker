import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipeComponent } from './components/recipe/recipe.component';
import { StepComponent } from './components/step/step.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { StepFormComponent } from './components/step-form/step-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    StepComponent,
    RecipeFormComponent,
    StepFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
