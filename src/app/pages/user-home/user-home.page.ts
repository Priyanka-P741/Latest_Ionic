import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from '@ionic-native/device/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';

declare var google;


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.page.html',
  styleUrls: ['./user-home.page.scss'],
})
export class UserHomePage implements OnInit {

  deviceId= 'test123';

  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  address: string;

  x: Number = 30;  // 30 Seconds

  flag=0;

  latitude:number;
  longitude:number;

  public today;

  d: Date = new Date();
  h = this.d.getHours();
  m = this.d.getMinutes();
  t = "" + this.h + this.m;
  time= Number(this.t);


  constructor(private router: Router, private device: Device, private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder) {
   }
   
  afunction() {
    (this.time > 1000 && this.time < 1800) || (this.time > 100 && this.time < 180)  ? this.flag=1 : console.log ('time ok');
    console.log(this.time);
    if(this.flag==1){
      this.router.navigate(['/defaulter-reason']);
    }
    else{
      alert("You are Checked-In");
      console.log(this.time);} 
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

  loadMap() {
    this.geolocation.getCurrentPosition().then((resp) => {

      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;

      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      this.map.addListener('dragend', () => {

        this.latitude = this.map.center.lat();
        this.longitude = this.map.center.lng();

        this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
      });

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  getAddressFromCoords(latitude, longitude) {
    console.log("getAddressFromCoords " + latitude + " " + longitude);
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };

    this.nativeGeocoder.reverseGeocode(latitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        this.address = "";
        let responseAddress = [];
        for (let [key, value] of Object.entries(result[0])) {
          if (value.length > 0)
            responseAddress.push(value);

        }
        responseAddress.reverse();
        for (let value of responseAddress) {
          this.address += value + ", ";
        }
        this.address = this.address.slice(0, -2);
      })
      .catch((error: any) => {
        this.address = "Address Not Available!";
      });

  }
locate(){
console.log('Latitude:' + this.latitude + 'and Longitude:' + this.longitude)
}


  ngOnInit() {

    this.loadMap();

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

    // console.log('Device UUID is: ' + this.device.uuid);

  setInterval(()=>{
    this.locate();
  }, 30000)

  setInterval(()=>{
    this.today = Date.now() }, 1000)
  }
}
