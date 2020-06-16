import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-step-form-dialog',
  templateUrl: './step-form-dialog.component.html',
  styleUrls: ['./step-form-dialog.component.css']
})
export class StepFormDialogComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  constructor(
    public dialogRef: MatDialogRef<StepFormDialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }



  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(1)]],
      description: '',
      media: ''
    })
    console.log(this.form, this.form.valid)
  }

  onSubmit(): void {
    this.submitted = true;
    this.form.markAllAsTouched();
    if (this.form.invalid)
      return;
    this.dialogRef.close(this.form.value);
  }

  get title() {
    return this.form.get('title');
  }

  getErrorMessage() {
    console.log(this.form.get('title').invalid)
    return this.form.get('title').invalid ? 'Please enter a title' : '';
  }
}
