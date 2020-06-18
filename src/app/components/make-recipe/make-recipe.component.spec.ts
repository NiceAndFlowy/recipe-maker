import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeRecipeComponent } from './make-recipe.component';

describe('MakeRecipeComponent', () => {
  let component: MakeRecipeComponent;
  let fixture: ComponentFixture<MakeRecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeRecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
