import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-dialog',
  templateUrl: './generic-dialog.component.html',
  styleUrls: ['./generic-dialog.component.css'],
})
export class GenericDialogComponent implements OnInit {
  item: any = {};
  campos: string[] = [];

  constructor(
    public dialogRef: MatDialogRef<GenericDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public info: any
  ) {}

  ngOnInit(): void {
    this.campos = this.info[1];
    this.item = this.info[0];
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
