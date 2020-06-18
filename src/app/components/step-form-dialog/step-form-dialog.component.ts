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
    //valid link reg expression
    const URL_REGEXP = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/;
    this.form = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(1)]],
      description: '',
      media: ['', [Validators.pattern(URL_REGEXP)]]
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

  get media() {
    return this.form.get('media');
  }

  getErrorMessage() {
    console.log(this.form.get('title').invalid)
    return this.form.get('title').invalid ? 'Please enter a title' : '';
  }
}
