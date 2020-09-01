import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from '@ionic-native/device/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { HttpClient,HttpHeaders,HttpRequest} from '@angular/common/http';
// import {
//   GoogleMaps,
//   GoogleMap,
//   GoogleMapsEvent,
//   Marker,
//   GoogleMapsAnimation,
//   MyLocation
// } from '@ionic-native/google-maps';

declare var google;

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.page.html',
  styleUrls: ['./user-home.page.scss'],
})
export class UserHomePage implements OnInit {

  device_id:string;
  deviceId:string = this.device_id;
  
  disabledButton;

  disappear: boolean = true;

  @ViewChild('map', { static: false }) mapElement: ElementRef;
  map: any;
  address: string;

  x: Number = 30;  // 30 Seconds

  flag=0;

  latitude:any;
  longitude:any;

  private _checkinUrl ="/check-in"
  private _checkoutUrl ="/check-out"
  //get items from localstorage items
  items:any = {};
  key:string ="items";
  

  token:any;
  empId:any;
//set checkinItems in localstorage checkinItems
  checkinItems:any = [];
  nextKey:string ='checkinItems';
  public today;

  d: Date = new Date();
  h = this.d.getHours();
  m = this.d.getMinutes();
  t = "" + this.h + this.m;
  time= Number(this.t);


  constructor(private router: Router,public httpClient:HttpClient,public storage:Storage, private device: Device, private geolocation: Geolocation,
    
    private nativeGeocoder: NativeGeocoder, private alertCtrl: AlertController) {
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

      this.addMarker();

      this.map.addListener('dragend', () => {

        this.latitude = this.map.center.lat();
        this.longitude = this.map.center.lng();

        this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
        
      });

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }
 
addMarker(){

  let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: this.map.getCenter()
  });

  let content = "Your current Location!";   

  this.addInfoWindow(marker, content);

}

addInfoWindow(marker, content){

    let infoWindow = new google.maps.InfoWindow({
      content: content,
      title: 'Current Location!',
       snippet: 'You are here!'
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
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

    setInterval(()=>{
    this.locate();
    }, 30000)

    setInterval(()=>{
    this.today = Date.now() }, 1000)

    this.getData();
    
  }

  // read the data from local storage
  getData(){
    this.storage.get(this.key).then((val)=>{
      if(val!=null && val!=undefined){
        this.items =JSON.parse(val);
        this.token =this.items.token;
        console.log(this.items.token);
        console.log(this.items.data.empId);
        this.empId =this.items.data.empId;
        this.device_id =this.items.data.device_id;
      }
    })
  }

//condition for check in

  afunction() {
    (this.time > 1000) || (this.time > 100)  ? this.flag=1 : console.log ('time ok');
    console.log(this.time);
    //this.disappear= !this.disappear;
    if(this.flag==1){
      this.router.navigate(['/defaulter-reason']);
      this.disappear= !this.disappear;
    }
    else{
      this.sendPostRequest();
      } 
  }


  sendPostRequest() {
    const headers = new HttpHeaders()
    //.append('Content-Type', 'application/json')
    .append('Authorization',	this.token)
    .append('Access-Control-Allow-Headers', '*')
    .append('Access-Control-Allow-Methods', "GET, POST, DELETE, PUT")
    .append('Access-Control-Allow-Origin', '*');
    
    let inputs = {
      "inTime":"",
      "lat":this.latitude,
      "lon":this.longitude,
      "empId":this.empId
    }
    this.httpClient.post(this._checkinUrl,inputs,{headers} )
      .subscribe(data => {
        console.log(data);
        this.checkinItems = data;
          this.storage.set(this.nextKey,JSON.stringify(this.checkinItems));
          if(!this.checkinItems.error){
            alert("You are Checked-In");
            //this.disappear= !this.disappear;
          }else{
            this.alertError();
          }    
        }, error => {
        console.log(error);
      });
}
  
//alert for check out

async showConfirm() { 
  const confirm = await this.alertCtrl.create({ 
  header: 'Confirmation', 
  message: 'Are you sure you want to checkout?', 
  buttons: [{ 
  text: 'Yes',
  role: 'Ok', 
  handler: () => {  
    this.bfunction();
  } 
}, { 
  text: 'No', 
  role: 'Cancel',
  handler: () => { 
    this.router.navigate(['/user-home']);
  } }] 
}); 
  await confirm.present(); 
} 

//condition for check out

  bfunction(){
    (this.time < 1800 && this.time > 1000) || (this.time < 180 && this.time > 100) ? this.flag=1 : console.log ('time ok');
    console.log(this.time);
    //this.checkOutDisabled();
    if(this.flag==1){
      this.router.navigate(['/defaulter-checkout']);
    }
    else{
          this.sendPutRequest();
    } 
  } 
   
    
  sendPutRequest(){
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json')
      .append('Authorization',	this.token)
      .append('Access-Control-Allow-Headers', 'Content-Type')
      .append('Access-Control-Allow-Methods', "GET, POST, DELETE, PUT")
      .append('Access-Control-Allow-Origin', '*');
      console.log(this.empId,this.token)

      let inputs = {
        "outTime":this.d,
        "empId":this.empId
      }
      this.httpClient.put(this._checkoutUrl,inputs,{headers} )
        .subscribe(data => {
          console.log(data);
          this.checkinItems = data;
            this.storage.set(this.nextKey,JSON.stringify(this.checkinItems));
            if(!this.checkinItems.error){
           alert("You are Checked-Out");
            }else{
              this.alertError();
            }
          }, error => {
          console.log(error);
        });
  }
  

  async alertError(){
    const alert = await this.alertCtrl.create({
      header: 'Unsuccessfull',
      message: this.checkinItems.message,
      buttons: [{
        text: 'Ok',
            handler: () => {
              this.router.navigate(['user-home']);
            }
      }]
    });
    await alert.present();
  }

  checkOutDisabled(){
    this.disabledButton=true;
  }  

  }
