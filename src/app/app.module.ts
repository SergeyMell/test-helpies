import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {DuplicateRequestFilter} from '@agilie/angular-helpies/interceptors';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: DuplicateRequestFilter, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
