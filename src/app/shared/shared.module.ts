import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from '../material/material.module';
import { GenericDialogComponent } from './components/generic-dialog/generic-dialog.component';
import { GenericTableComponent } from './components/generic-table/generic-table.component';

const COMPONENTS = [GenericTableComponent, GenericDialogComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [BrowserModule, MaterialModule, ReactiveFormsModule],
  exports: [COMPONENTS],
})
export class SharedModule {}
