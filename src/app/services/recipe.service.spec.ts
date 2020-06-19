import { TestBed } from '@angular/core/testing';

import { RecipeService } from './recipe.service';
import { Step } from '../models/step';
import { Recipe } from '../models/recipe';

describe('RecipeService', () => {
  let service: RecipeService;
  const STORAGE_RECIPES = 'recipes';
  const STORAGE_ID = 'id';

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeService);
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
    localStorage.clear();

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Initial state', () => {
    describe('id', () => {
      it('should be 0', () => {
        expect(service.Id).toEqual(0);;
      });
    });

    describe('recipes', () => {
      it('should have a length of 0', () => {
        expect(service.Recipes.length).toEqual(0);
      })
    });

    describe('localStorage', () => {
      it(`should not have an item for key: ${STORAGE_RECIPES}`, () => {
        expect(localStorage.getItem(STORAGE_RECIPES)).toEqual(null);
      });
      it(`should not have an item for key: ${STORAGE_ID}`, () => {
        expect(localStorage.getItem(STORAGE_ID)).toEqual(null);
      });
    });
  });


  describe('Saved state', () => {
    beforeEach(() => {
      const step: Step = new Step('Cook the eggs', '', '');
      const recipe: Recipe = { id: 0, title: 'Omlette', steps: [step] };
      service.addRecipe(recipe);
    })
    describe('id', () => {
      it('should be 1', () => {
        expect(service.Id).toEqual(1);;
      });
    });

    describe('recipes', () => {
      it('should have a length of 1', () => {
        expect(service.Recipes.length).toEqual(1);
      })
    });

    describe('localStorage', () => {
      it(`should have an item for key: ${STORAGE_RECIPES}`, () => {
        expect(localStorage.getItem(STORAGE_RECIPES)).toEqual(JSON.stringify(service.Recipes));
      });
      it('should have an id of 1', () => {
        expect(localStorage.getItem(STORAGE_ID)).toEqual('1');
      });
    });
  });
});
