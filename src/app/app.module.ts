import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import { Details } from './details';


@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent
  ],
  imports: [
    BrowserModule,
    Details,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
