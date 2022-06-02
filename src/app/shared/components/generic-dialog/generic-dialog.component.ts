import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-generic-dialog',
  templateUrl: './generic-dialog.component.html',
  styleUrls: ['./generic-dialog.component.css'],
})
export class GenericDialogComponent implements OnInit {
  item: any;
  campos!: string[];
  form!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<GenericDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public info: any,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.campos = this.info[0];
    this.item = this.info[1];
    console.log(this.item['id']);
    this.campos.forEach((x) => this.form.addControl(x, this.fb.control('')));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
