import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
//import {empListComponent} from './employeeList.component';
//import {empDetailComponent} from './employeeDetails.component';
import {HttpModule}from '@angular/http';

import {FormsModule} from '@angular/forms';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


// noinspection TypeScriptCheckImport
//import { Ng2AutoCompleteModule } from 'ng2-auto-complete';




@NgModule({
  imports:      [ BrowserModule,HttpModule,FormsModule],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);