import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeComponent } from './recipe.component';
import { Recipe } from 'src/app/models/recipe';
import { Step } from 'src/app/models/step';

describe('RecipeComponent', () => {
  let component: RecipeComponent;
  let fixture: ComponentFixture<RecipeComponent>;
  let recipe: Recipe;
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [RecipeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    let step: Step = new Step('Step', '', '');
    recipe = { id: 0, title: 'Test', steps: [step] };
    fixture = TestBed.createComponent(RecipeComponent);
    component = fixture.componentInstance;
    component.recipe = recipe;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
