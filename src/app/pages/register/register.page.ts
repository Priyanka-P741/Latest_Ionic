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
      { type : 'pattern' , message: 'Please enter a valid email.' }
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
      { type : 'pattern' , message: ' Postal Code must have 6 digit' }

     ],
     'mobile' : [
      { type : 'required' , message: 'Mobile Number is required.' },
      { type : 'pattern' , message: 'Mobile Number must have 10 digit' }

     ]

  }

  onSubmit() {
    console.log(this.myForm.value);
  }

  btnClicked(){
    // // alert('btn clicked')
    // this.router.navigate(['main-page']);
  }

  constructor(private formsBuilder : FormBuilder ) {
    this.myForm = formsBuilder.group({
      name:['', [Validators.required]],
      email:['', [Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+[a-zA-Z0-9-.]$')
      ])]],
      dob:['', [Validators.required]],
      pic:['', [Validators.required]],
      addr:['', [Validators.required]],
      city:['', [Validators.required]],
      state:['', [Validators.required]],
      pincode:['', [Validators.compose([
        Validators.required,
        Validators.pattern('^[0-9]{6}$')
      ]  )]],
      mobile:['',[Validators.compose ([
        Validators.required,
        Validators.pattern('^[0-9]{10}$')])
      ]]
    });
   }

  ngOnInit() {
  }

}
