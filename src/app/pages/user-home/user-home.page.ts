import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;
import { Device } from '@ionic-native/device/ngx';
import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';

// import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';




@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.page.html',
  styleUrls: ['./user-home.page.scss'],
})
export class UserHomePage implements OnInit {

  x: Number = 30;  // 30 Seconds

  flag=0;

  latitude:number;
  longitude:number;
  coords:any;
  public lat:any;
  public lng:any;
  showingCurrent: boolean = true;
  
  public today;

  d: Date = new Date();
  h = this.d.getHours();
  m = this.d.getMinutes();
  t = "" + this.h + this.m;
  time= Number(this.t);

  UniqueDeviceID:string;

  constructor(private router: Router, private ngZone:NgZone, private device: Device, private uniqueDeviceID: UniqueDeviceID) {
    this.getUniqueDeviceID();
   }
   
  async locate() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.showingCurrent = true;
    this.coords = coordinates.coords;
    console.log(this.coords);
    this.latitude = coordinates.coords.latitude;
    this.longitude = coordinates.coords.longitude;
  }

  async locatemap() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.ngZone.run(() => {
      this.lat = coordinates.coords.latitude;
      this.lng = coordinates.coords.longitude;
      console.log(this.coords);
      this.latitude = coordinates.coords.latitude;
      this.longitude = coordinates.coords.longitude;
    })
  }

  getUniqueDeviceID() {
    this.uniqueDeviceID.get()
      .then((uuid: any) => {
        console.log(uuid);
        this.UniqueDeviceID = uuid;
      }).catch((error: any) => {
        console.log(error);
        this.UniqueDeviceID = "Error! ${error}";
      });
  }

  afunction() {
    (this.time > 1000 && this.time < 1800) || (this.time > 100 && this.time < 180)  ? this.flag=1 : console.log ('time ok');
    console.log(this.time);
    if(this.flag==1){
      this.router.navigate(['/defaulter-reason']);
    }
  }
  
  bfunction(){
    (this.time < 1800 && this.time > 1000) || (this.time < 180 && this.time > 100) ? this.flag=1 : console.log ('time ok');
    console.log(this.time);
    if(this.flag==1){
      this.router.navigate(['/defaulter-checkout']);
    }
    else{
      alert("You are Checked-Out");
      console.log(this.time);} 
  }

// pushNotif(){
//   // Create a channel (Android O and above). You'll need to provide the id, description and importance properties.
// this.push.createChannel({
//   id: "testchannel1",
//   description: "My first test channel",
//   // The importance property goes from 1 = Lowest, 2 = Low, 3 = Normal, 4 = High and 5 = Highest.
//   importance: 3,
//   //badge is used to if badge appears on the app icon see https://developer.android.com/reference/android/app/NotificationChannel.html#setShowBadge(boolean).
//   //false = no badge on app icon.
//   //true = badge on app icon
//   badge: false
//  }).then(() => console.log('Channel created'));
 
//  // Delete a channel (Android O and above)
//  this.push.deleteChannel('testchannel1').then(() => console.log('Channel deleted'));
 
//  // Return a list of currently configured channels
//  this.push.listChannels().then((channels) => console.log('List of channels', channels))
 
//  // to initialize push notifications
 
//  const options: PushOptions = {
//     android: {},
//     ios: {
//         alert: 'true',
//         badge: true,
//         sound: 'false'
//     },
//     windows: {},
//     browser: {
//         pushServiceURL: 'http://push.api.phonegap.com/v1/push'
//     }
//  }
 
//  const pushObject: PushObject = this.push.init(options);
 
 
//  pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));
 
//  pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));
 
//  pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
 
// }


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

    this.locatemap();

    console.log('Device UUID is: ' + this.device.uuid);

    this.getUniqueDeviceID();  
    // .then((uuid: any) => console.log('again device id here:' + uuid))
  // .catch((error: any) => console.log(error));
  //  this.pushNotif();
  setInterval(()=>{
    this.locate();
  }, 30000)

  setInterval(()=>{
    this.today = Date.now() }, 1000)
  }
}
