import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }     from '@angular/http';

import {routing}        from './routing';

import { AppComponent }  from './ts/components/boot';
import  { HomeComponent} from './ts/components/home';
import  {ContactComponent} from './ts/components/contact';
import  {FormComponent} from './ts/components/form';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
	HttpModule,
	routing
  ],
  declarations: [
    AppComponent,HomeComponent,ContactComponent,FormComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
