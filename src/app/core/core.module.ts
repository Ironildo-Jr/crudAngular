import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

const COMPONENTS = [HeaderComponent, FooterComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [BrowserModule, MaterialModule, SharedModule],
  exports: [COMPONENTS],
})
export class CoreModule {}
