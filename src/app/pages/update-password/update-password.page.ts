import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.page.html',
  styleUrls: ['./update-password.page.scss'],
})
export class UpdatePasswordPage implements OnInit {

passwordType: string ="password";
passwordShown: boolean = false;

  constructor(public alertController: AlertController, private router: Router) { }

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
  }

}
