import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoadingInterceptor } from './interceptors/loading.interceptor';
import { LoadingComponent } from './loading/loading.component';

const CORE_COMPONENTS = [HeaderComponent, FooterComponent, LoadingComponent];

@NgModule({
  declarations: [CORE_COMPONENTS],
  imports: [BrowserModule, HttpClientModule, MaterialModule, SharedModule],
  exports: [CORE_COMPONENTS],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
