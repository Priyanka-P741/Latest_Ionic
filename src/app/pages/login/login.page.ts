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


  validation_messages = {
    'email' : [
     { type : 'required' , message: 'Name is required.' }
    ],
    'password' : [
      { type : 'required' , message: 'Password is required.' }
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
      email:['', [Validators.required]],
      password:['', [Validators.required]]
    });
  }  

  ngOnInit() {}

}
