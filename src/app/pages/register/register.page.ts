import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  myForm: FormGroup;

  validation_messages = {
    'name' : [
     { type : 'required' , message: 'Name is required.' },
    ],
    'email' : [
      { type : 'required' , message: 'Email is required.' },
     ],
     'dob' : [
      { type : 'required' , message: 'Date of Birth is required.' },
     ],
     'pic' : [
      { type : 'required' , message: 'Profile Picture is required.' },
     ],
     'addr' : [
      { type : 'required' , message: 'Address is required.' },
     ],
     'city' : [
      { type : 'required' , message: 'City is required.' },
     ],
     'state' : [
      { type : 'required' , message: 'State is required.' },
     ],
     'pincode' : [
      { type : 'required' , message: 'Postal Code is required.' },
     ],
     'mobile' : [
      { type : 'required' , message: 'Mobile Number is required.' },
     ]

  }

  constructor(private formsBuilder : FormBuilder ) {
    this.myForm = formsBuilder.group({
      name:['', [Validators.required]],
      email:['', [Validators.required], [Validators.email]],
      dob:['', [Validators.required]],
      pic:['', [Validators.required]],
      addr:['', [Validators.required]],
      city:['', [Validators.required]],
      state:['', [Validators.required]],
      pincode:['', [Validators.required]],
      mobile:['', [Validators.required]]
    });
   }

  ngOnInit() {
  }

}
