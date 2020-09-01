import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder } from '@ionic-native/native-geocoder/ngx';
//  { Firebase } from '@ionic-native/firebase/ngx';
import { RegistrationService } from './services/registration.service';
import {LoginService} from './services/login.service';
import { ProfileEditService } from './services/profile-edit.service';
// import { AngularFireModule } from 'angularfire2';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { FcmService } from './services/fcm.service'
import { Device } from '@ionic-native/device/ngx';
// import { Push } from '@ionic-native/push/ngx';

//  const config = {
//   // your firebase web config
//  }

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
    FormsModule,
    HttpClientModule,
     IonicModule.forRoot(),
     IonicStorageModule.forRoot(),
    //  AngularFireModule.initializeApp(config), 
    // AngularFirestoreModule,
     AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    // Firebase,
    // FcmService,
    RegistrationService,
    // LoginService,
    // ProfileEditService,
    Device,
    Geolocation,
    NativeGeocoder,
    // Push,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
