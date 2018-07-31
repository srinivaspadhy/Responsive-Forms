import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '../../../node_modules/@angular/forms';
import { Details } from '../Details';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  obj = new Details();
  fg: FormGroup;
  submitted=false;

  constructor(private fb: FormBuilder) {
    
  }

  ngOnInit() {
    this.fg = this.fb.group({
      firstname: new FormControl(this.obj.fname, [Validators.required,Validators.pattern("A-Z"),Validators.pattern("a-z")]),
      lastname: new FormControl(this.obj.lname, [Validators.required,Validators.pattern("A-Z"),Validators.pattern("a-z")]),
      gender: new FormControl(this.obj.gender, [Validators.required,Validators.pattern("A-Z"),Validators.pattern("a-z")]),
      contactnum: new FormControl(this.obj.cnt,[Validators.required,Validators.pattern("0-9"),Validators.maxLength(10)]),
      empId:new FormControl(this.obj.eid,[Validators.required,Validators.pattern("0-9"),Validators.maxLength(4)]),
      password:new FormControl(this.obj.pass,[Validators.required,Validators.minLength(8),Validators.maxLength(16)]),
      confirmpassword:new FormControl(this.obj.cnfpass,[Validators.required,Validators.minLength(8),Validators.maxLength(16)])

    })

  }
  get f() { return this.fg.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.fg.invalid) {
        return;
    }

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.fg.value))
}
}
