import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepComponent } from './step.component';
import { Step } from 'src/app/models/step';

describe('StepComponent', () => {
  let component: StepComponent;
  let fixture: ComponentFixture<StepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StepComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    let step: Step = new Step('Step', '', '');
    fixture = TestBed.createComponent(StepComponent);
    component = fixture.componentInstance;
    component.step = step;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
