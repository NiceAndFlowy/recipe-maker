import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeRecipeComponent } from './make-recipe.component';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Location } from '@angular/common';
import { Recipe } from 'src/app/models/recipe';
import { Step } from 'src/app/models/step';
import { Observable, of } from 'rxjs';

// class MockActivatedRoute extends ActivatedRoute {
//   constructor() {
//     super();
//     this.params = of({ id: "0" });
//   }
// }
describe('MakeRecipeComponent', () => {
  let component: MakeRecipeComponent;
  let fixture: ComponentFixture<MakeRecipeComponent>;
  let service: RecipeService;
  let activatedRoute: ActivatedRoute;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MakeRecipeComponent],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            paramMap: {
              get(): string {
                return '0';
              },
            },
          },
        },
      }, Location, RecipeService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      },
    };
    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear').and.callFake(mockLocalStorage.clear);
    service = TestBed.get(RecipeService);
    let step: Step = new Step('Step', '', '');
    let recipe: Recipe = { id: 0, title: 'Test', steps: [step] };


    service.addRecipe(recipe);
    activatedRoute = TestBed.get(ActivatedRoute);
    location = TestBed.get(Location);
    fixture = TestBed.createComponent(MakeRecipeComponent);
    component = fixture.componentInstance;
    console.log("TEST", service, service.getRecipeById(0))
    component = new MakeRecipeComponent(activatedRoute, location, service);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
