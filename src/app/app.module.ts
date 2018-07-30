import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CredentialsComponent } from './credentials/credentials.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
const loginroute: Routes = [
  {
    path: "",
    component: LoginComponent
  }, {
    path: "final",
    component: CredentialsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CredentialsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(loginroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
