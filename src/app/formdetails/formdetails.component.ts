import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-formdetails',
  templateUrl: './formdetails.component.html',
  styleUrls: ['./formdetails.component.css']
})
export class FormdetailsComponent implements OnInit {

  constructor(private router:Router) { }
  fetchobj:object;

  ngOnInit() {
    this.fetchobj=JSON.parse(localStorage.getItem("key"));
    var table=document.getElementById('formdata');
  }
EditDetails(){
  this.router.navigate(["/editdetails"]);
}
}
