import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {MyDashboardComponent} from './my-dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    MyDashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

  ],
  providers: [],
})
export class MyDashboardModule { }
