import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl,FormArray } from '@angular/forms';
import { PasswordValidator } from './password.validator';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.page.html',
  styleUrls: ['./update-password.page.scss'],
})
export class UpdatePasswordPage implements OnInit {



  validation_messages = {
    'email' : [
     { type : 'required' , message: 'Name is required.' },
    ],
    'password' : [
      { type : 'required' , message: 'password is required.' },
     ],
     
  }
myForm: FormGroup;
passwordType: string ="password";
passwordShown: boolean = false;

onSubmit() {
  console.log(this.myForm.value);
}
  constructor(public alertController: AlertController, private router: Router, private formsBuilder : FormBuilder) { }
    
  

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

  ngOnInit() {
    this.myForm = this.formsBuilder.group({
      email:['', [Validators.required]],
      password:['', [Validators.required]],
      newPassword:[''],
      confirmPassword:['', ]

    },{ validators: this.Password.bind(this) });
  }
    
    Password(formGroup:FormGroup) {
      const { value:newPassword } = formGroup.get('newPassword');
      const { value:confirmPassword } = formGroup.get('confirmPassword');
      return newPassword === confirmPassword ? null : {passwordNotMatch:true};

    }
  

}
