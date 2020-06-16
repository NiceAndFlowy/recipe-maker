import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFormDialogComponent } from './step-form-dialog.component';

describe('StepFormDialogComponent', () => {
  let component: StepFormDialogComponent;
  let fixture: ComponentFixture<StepFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepFormDialogComponent ]
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
