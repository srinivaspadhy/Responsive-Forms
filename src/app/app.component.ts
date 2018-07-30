import { Component } from '@angular/core';
import { Route } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = "pass";
  emailId = "email";
  onlogin()
  {
    localStorage.setItem('key', this.emailId);
  }
}

