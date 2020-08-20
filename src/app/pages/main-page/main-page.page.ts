import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { Geolocation } from '@ionic-native/Geolocation/ngx';
import { getLocaleDirection } from '@angular/common';

declare var google;

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {
public today;
// startTime ='10:00';
map: any;
marker: any;
latitude: any="";
longitude: any="";
timestamp: any="";

  constructor(private router: Router,public alertController: AlertController,public platform: Platform,public geolocation: Geolocation) {
   
 


    // this.platform.ready().then(() =>{
    //   var mapOptions = {
    //     center:{lat:23.2366,lng:79.3822},
    //     zoom:7
    //   }
    //   this.map = new google.maps.Map(document.getElementById("map"),mapOptions);
      
    // })
    // this.getLocation();
    
  }
    
  // getLocation()
  // {
  //   var ref = this;
  //   let watch = this.geolocation.watchPosition();
  //   watch.subscribe((position) =>{
  //     var gps = new google.maps.LatLng
  //     (position.coords.latitude,position.coords.longitude);
  //     if (ref.marker == null)
  //     {
  //       ref.marker = new google.maps.marker({
  //         position:gps,
  //         map:ref.map,
  //         title:'my position'
  //       })
  //     }
  //     else{
  //       ref.marker.setPosotion(gps);
  //     }
  //     ref.map.panTo(gps);
  //     ref.latitude = position.coords.latitude.toString();
  //     ref.longitude = position.coords.longitude.toString();
  //     ref.timestamp = ( new Date(position.timestamp)).toString();
  //   });
  
  // }
   
  

  ngOnInit() {
    this.today = Date.now();

  }
  navigateToProfile(){
    this.router.navigate(['/profile']);
  }
//  if ( (this.startTime)<(this.today) ) {
  
//  }
  async checkInLate() {
    const alert = await this.alertController.create({
      header: 'Late Entry',
      message: 'Enter a Valid Reason',
      inputs: [
       {
         name: 'Reason',
         type: 'text',
         placeholder: 'valid reason'
       }
      ],
      buttons: [{ 
        text: 'Submit',
            // handler: () => {
            //   this.router.navigate(['/login']);
            // }
      }]
    });
  
    await alert.present();
  }


async checkOutEarly() {
  const alert = await this.alertController.create({
    header: 'Early Check Out',
    message: 'Enter a Valid Reason',
    inputs: [
     {
       name: 'Reason',
       type: 'text',
       placeholder: 'valid reason'
     }
    ],
    buttons: [{
      text: 'Submit',
           handler: () => {
             this.router.navigate(['/home']);
           }
    }]
  });

  await alert.present();
}

}


