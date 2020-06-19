import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeFormComponent } from './recipe-form.component';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { RecipeService } from 'src/app/services/recipe.service';
import { Location } from '@angular/common';
import { StepFormDialogComponent } from '../step-form-dialog/step-form-dialog.component';
import { of } from 'rxjs';

class MatDialogMock {
  open() {
    return {
      afterClosed: () => of({ name: 'some object' })
    };
  }
}
describe('RecipeFormComponent', () => {
  let component: RecipeFormComponent;
  let fixture: ComponentFixture<RecipeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeFormComponent],
      providers: [FormBuilder, MatDialogModule, RecipeService, Location, StepFormDialogComponent, { provider: MatDialog, useClass: MatDialogMock }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
