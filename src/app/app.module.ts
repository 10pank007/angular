import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainLayoutsComponent } from './layouts/main-layouts/main-layouts.component';
import { HeaderComponent } from './layouts/main-layouts/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MainInterceptor} from "./main.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutsComponent,
    HeaderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: MainInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
