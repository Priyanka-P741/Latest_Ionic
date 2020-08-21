import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from './password.validator';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.page.html',
  styleUrls: ['./forgotpassword.page.scss'],
})
export class ForgotpasswordPage implements OnInit {

  validation_messages = {
    'email' : [
     { type : 'required' , message: 'Name is required.' },
    ],
    'password' : [
      { type : 'required' , message: 'Password is required.' },
     ],
     'newPassword' : [
      { type : 'required' , message: 'Password is required.' },
     ],
     'confirmPassword' : [
      { type : 'required' , message: 'Password is required.' },
     ],     
  }

myForm: FormGroup;
passwordType: string ="password";
passwordShown: boolean = false;

  constructor(public alertController: AlertController, private router: Router, private formsBuilder : FormBuilder) { }

  onSubmit() {
    console.log(this.myForm.value);
  }

  
public togglePassword(){
  if(this.passwordShown){
    this.passwordShown = false;
    this.passwordType ='password';
  } else {
    this.passwordShown = true;
    this.passwordType ='text';
  }
}

async btnClick() {
  const alert = await this.alertController.create({
    header: 'Update Password',
    message: 'Successfully changed password.',
    buttons: [{
      text: 'Ok',
          handler: () => {
            this.router.navigate(['/login']);
          }
    }]
  });
  await alert.present();
}
// required pattern="^\d{10}$"


  ngOnInit() {
    this.myForm = this.formsBuilder.group({
      email:['', [Validators.required]],
      password:['', [Validators.required]],
      newPassword:['',[Validators.required]],
      confirmPassword:['',[Validators.required]]

    },{ validators: this.Password.bind(this) });
  }
  Password(formGroup:FormGroup) {
    const { value:newPassword } = formGroup.get('newPassword');
    const { value:confirmPassword } = formGroup.get('confirmPassword');
    return newPassword === confirmPassword ? null : {passwordNotMatch:true};

  }
  }


