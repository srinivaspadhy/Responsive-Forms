import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '../../../node_modules/@angular/forms';
import { Details } from '../details';
import { Router } from '@angular/router';
import { TransferService } from '../transfer.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  obj = new Details();
  fg: FormGroup;
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private srv: TransferService) {

  }
  getdata;
  ngOnInit() {
    this.fg = this.fb.group({
      firstname: new FormControl(this.obj.fname, [Validators.required, Validators.pattern("[A-Za-z]*")]),
      lastname: new FormControl(this.obj.lname, [Validators.required, Validators.pattern("[A-Za-z]*")]),
      gender: new FormControl(this.obj.gender, [Validators.required, Validators.pattern("(Male)|(Female)|(male)|(female)")]),
      contactnum: new FormControl(this.obj.cnt, [Validators.required, Validators.pattern("[0-9]*"), Validators.maxLength(10)]),
      empId: new FormControl(this.obj.eid, [Validators.required, Validators.pattern("[0-9]*"), Validators.maxLength(4)]),
      password: new FormControl(this.obj.pass, [Validators.required, Validators.minLength(8), Validators.maxLength(16), Validators.pattern('((?=.*[0-9])(?=.*[a-z])(?=.*[!@#$%^&*()_+=-{:;"|.,<>]).{0,16})')]),
      confirmpassword: new FormControl(this.obj.cnfpass, [Validators.required, Validators.minLength(8), Validators.maxLength(16), Validators.pattern('((?=.*[0-9])(?=.*[a-z])(?=.*[!@#$%^&*()_+=-{:;"|.,<>]).{0,16})')])

    })
    if (window.location.pathname == '/editdetails') {
      this.getdata = this.srv.tnf;

      this.fg.patchValue({
        firstname: this.getdata.firstname,
        lastname: this.getdata.lastname,
        gender: this.getdata.gender,
        contactnum: this.getdata.contactnum,
        empId: this.getdata.empId,
        password: this.getdata.password,
        confirmpassword: this.getdata.confirmpassword


      })
    }

  }
  cnfpass: boolean = true;
  togglepass() {
    this.cnfpass = this.fg.value.password === this.fg.value.confirmpassword;
  }
  get f() { return this.fg.controls; }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.fg.invalid) {
      return;
    }
    this.srv.tnf=this.fg.value;
    this.router.navigate(['/formdetails']);
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.fg.value));
    // localStorage.setItem('key',JSON.stringify(this.fg.value));
    // this.router.navigate(['/formdetails']);

  }
}
