import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Storage } from '@ionic/storage';
// import {FcmService} from './services/fcm.service'
// import { Firebase } from '@ionic-native/firebase/ngx';

// import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;
  items: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    public statusBar: StatusBar,
    public storage : Storage,
    // private fcm: FcmService,
    // public firebaseNative: Firebase,
    // public toastCtrl: ToastController, 

  ) {
  
  
    this.platform.ready().then(() => {
      this.statusBar.backgroundColorByHexString('#2693ee');
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    
    //   fcm.getToken().then(token=>{
    //     console.log(token);
    //   });

    //   // Listen to incoming messages
    //   fcm.listenToNotifications().pipe(
    //     tap(msg => {
    //       this.items =msg;
    //       // show a toast
    //       this.PushMsg();
    //     })
      
    //   )
    //     .subscribe();
      });
  



  this.sideMenu();
  
}

sideMenu()
{
  this.navigate =
  [
    {
      title : "My Profile",
      url   : "/profile",
      icon  : "happy-outline"
    },
    {
      title : "Logout",
      url   : "/home",
      icon  : "home",
      // function: this.resetLocalStorage()
    },
  ]
}

// resetLocalStorage(){
//   this.storage.clear();

//}
// async PushMsg(){
//   const toast = await this.toastCtrl.create({
//     message: this.items,
//     duration: 3000
//   });
//   return toast.present();
// }
}