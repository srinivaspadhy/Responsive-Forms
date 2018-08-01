import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import { FormdetailsComponent } from './formdetails/formdetails.component';
const routes:Routes=[{
  path:' ',
  component :LoginComponent
},
{
  path:'formdetails',
  component:FormdetailsComponent
},

  {
    path:'editdetails',
    component:FormdetailsComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    
    LoginComponent,
    
    FormdetailsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
