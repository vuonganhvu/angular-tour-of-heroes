import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {Module1Component} from './module1.component';


@NgModule({
  declarations: [
    Module1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [Module1Component]
})
export class Module1Module { }
