import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  myForm: FormGroup;

  d: Date = new Date();
  h = this.d.getHours();
  m = this.d.getMinutes();
  t = "" + this.h + this.m;
  time= Number(this.t);
  
  flag=0;
    

  validation_messages = {
    'email' : [
     { type : 'required' , message: 'Name is required.' },
     { type : 'pattern' , message: 'Please enter a valid email.' }
    ],
    'password' : [
      { type : 'required' , message: 'Password is required.' },
     ],
  }
  
  onSubmit() {
    console.log(this.myForm.value);
  }

  btnClicked(){
    // // alert('btn clicked')
    // this.router.navigate(['main-page']);
  }  

  constructor(private router: Router,private formsBuilder : FormBuilder) {
    this.myForm = formsBuilder.group({
      email:['', [Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+[a-zA-Z0-9-.]$')
      ])]],
      'password':['', [Validators.required]]
    });
   }

  afunction() {
    (this.time > 1000 && this.time < 1800) || (this.time > 100 && this.time < 180)  ? this.flag=1 : console.log ('time ok');
    if(this.flag==1){
      this.router.navigate(['/defaulter-reason']);
    }
  }
    

  ngOnInit() {

    console.log(this.d);
    console.log(typeof this.d);

    console.log(this.h);
    console.log(typeof this.h);

    console.log(this.m);
    console.log(typeof this.m);

    console.log(this.t);
    console.log(typeof this.t);

    console.log(this.time);
    console.log(typeof this.time);
  }

}
