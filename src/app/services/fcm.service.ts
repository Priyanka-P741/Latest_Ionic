import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase/ngx';
import { Platform } from '@ionic/angular';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FcmService {

  constructor(private platform: Platform, private firebaseNative: Firebase ,
    public http: HttpClient) {    console.log('Hello FcmService service');
  }

  async getToken() {
    let token;

    if (this.platform.is('android')) {
      token = await this.firebaseNative.getToken()
      
    }

    this.http.post("https://ionicnotificationserver34.herokuapp.com/api/store ", token)
      .subscribe(data => {
        console.log(JSON.stringify(data));
      }, error => {
            console.log("err");
            console.log(JSON.stringify(error));
    });
  }

  // Listen to incoming FCM messages
  listenToNotifications() {
    return this.firebaseNative.onNotificationOpen()
  }
}
