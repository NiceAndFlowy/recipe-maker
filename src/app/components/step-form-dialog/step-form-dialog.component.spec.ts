import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFormDialogComponent } from './step-form-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder } from '@angular/forms';

class MatDialogRefMock {
  close(value = '') {

  }
}
describe('StepFormDialogComponent', () => {
  let component: StepFormDialogComponent;
  let fixture: ComponentFixture<StepFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StepFormDialogComponent],
      providers: [{ provide: MatDialogRef, useClass: MatDialogRefMock }, { provide: MAT_DIALOG_DATA, useValue: {} }, FormBuilder]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
