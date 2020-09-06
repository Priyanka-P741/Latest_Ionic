(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-user-home-user-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-home/user-home.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-home/user-home.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title slot=\"start\">Welcome User</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid text-center>\n    <ion-row *ngIf=\"disappear\">\n      <ion-col size=\"6\">\n        <div *ngIf=\"disappear\">\n          <ion-button color=\"tertiary\" expand=\"full\" (click)='afunction()'>Check In</ion-button>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\" *ngIf=\"disappear\">\n        <ion-button color=\"tertiary\" expand=\"full\" (click)='showConfirm()' [disabled]='disabledButton'>Check Out</ion-button>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf=\"!disappear\">\n      <ion-col size=\"4\"></ion-col>\n      <ion-col size=\"4\">         \n         <ion-button color=\"tertiary\" expand=\"full\" (click)='showConfirm()' [disabled]='disabledButton'>Check Out</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div class=\"map-wrapper\">\n    <div id=\"map_center\">\n      <img src=\"assets/icon/location-marker.png\" />\n    </div>\n    <div #map id=\"map\"></div>\n  </div>\n  <ion-button color=\"warning\" expand=\"full\" (click)=\"loadMap()\">Find me</ion-button>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"3\">\n        <b> Current Date</b>\n      </ion-col>\n      <ion-col>\n        {{ today | date: 'dd/MM/yyyy' }}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\">\n        <b> Device ID</b>\n      </ion-col>\n      <ion-col>\n        {{ deviceId }}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\">\n        <b>Current Time</b>\n      </ion-col>\n      <ion-col>\n        {{ today | date: 'HH:mm'}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\">\n        <b>Lattitude</b>\n      </ion-col>\n      <ion-col>\n        {{latitude}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\">\n        <b>Longitude</b>\n      </ion-col>\n      <ion-col>\n        {{longitude}}\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\">\n        <b>Address</b>\n      </ion-col>\n      <ion-col>\n        {{address}}\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-button color=\"tertiary\" expand=\"full\" href=\"tel:+91 83340 95538\">Contact</ion-button>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/user-home/user-home-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/user-home/user-home-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: UserHomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHomePageRoutingModule", function() { return UserHomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-home.page */ "./src/app/pages/user-home/user-home.page.ts");




const routes = [
    {
        path: '',
        component: _user_home_page__WEBPACK_IMPORTED_MODULE_3__["UserHomePage"]
    }
];
let UserHomePageRoutingModule = class UserHomePageRoutingModule {
};
UserHomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserHomePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/user-home/user-home.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/user-home/user-home.module.ts ***!
  \*****************************************************/
/*! exports provided: UserHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHomePageModule", function() { return UserHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _user_home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-home-routing.module */ "./src/app/pages/user-home/user-home-routing.module.ts");
/* harmony import */ var _user_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-home.page */ "./src/app/pages/user-home/user-home.page.ts");







// import { AgmCoreModule } from '@agm/core';
let UserHomePageModule = class UserHomePageModule {
};
UserHomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            // AgmCoreModule,
            _user_home_routing_module__WEBPACK_IMPORTED_MODULE_5__["UserHomePageRoutingModule"]
        ],
        declarations: [_user_home_page__WEBPACK_IMPORTED_MODULE_6__["UserHomePage"]]
    })
], UserHomePageModule);



/***/ }),

/***/ "./src/app/pages/user-home/user-home.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/user-home/user-home.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card-title {\n  text-align: center;\n}\n\n#map_canvas {\n  width: 90%;\n  height: 80%;\n  border: 1px solid red;\n}\n\n#address {\n  padding: 10px;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n#map {\n  width: 100%;\n  height: 70vh;\n}\n\n.map-wrapper {\n  position: relative;\n}\n\n.map-wrapper #map_center {\n  position: absolute;\n  z-index: 99;\n  height: 40px;\n  width: 40px;\n  top: 50%;\n  left: 50%;\n  margin-left: -21px;\n  margin-top: -41px;\n}\n\nion-toolbar {\n  --background: rgb(56, 128, 255);\n}\n\nion-title {\n  --color:white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdXNlci1ob21lL0M6XFxVc2Vyc1xcQklWQVNcXERlc2t0b3BcXGxhdGVzdF9FbXBsb3llZV9tYW5hZ2VtZW50XFxFbXBsb3llZV9tYW5hZ2VtZW50L3NyY1xcYXBwXFxwYWdlc1xcdXNlci1ob21lXFx1c2VyLWhvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy91c2VyLWhvbWUvdXNlci1ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNJLGtCQUFBO0FDSko7O0FETUE7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FDSEo7O0FET0U7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDSko7O0FET0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0pKOztBRE9FO0VBQ0Usa0JBQUE7QUNKSjs7QURNSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDSk47O0FEUUE7RUFDRSwrQkFBQTtBQ0xGOztBRFFFO0VBQ0UsYUFBQTtBQ0xKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdXNlci1ob21lL3VzZXItaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhZ20tbWFwe1xuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIGhlaWdodDogMTAwJTtcbi8vIH1cbmlvbi1jYXJkLXRpdGxle1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNtYXBfY2FudmFzIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGhlaWdodDogODAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcbiAgfVxuICBcbiAgXG4gICNhZGRyZXNzIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgI21hcCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA3MHZoO1xuICB9XG4gIFxuICAubWFwLXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgXG4gICAgI21hcF9jZW50ZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogOTk7XG4gICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgbWFyZ2luLWxlZnQ6IC0yMXB4O1xuICAgICAgbWFyZ2luLXRvcDogLTQxcHg7XG4gICAgfVxuICB9XG5cbmlvbi10b29sYmFye1xuICAtLWJhY2tncm91bmQ6IHJnYig1NiwgMTI4LCAyNTUpO1xuICB9XG4gIFxuICBpb24tdGl0bGV7XG4gICAgLS1jb2xvclx0OndoaXRlO1xuICB9XG5cblxuICAiLCJpb24tY2FyZC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI21hcF9jYW52YXMge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xufVxuXG4jYWRkcmVzcyB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNtYXAge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MHZoO1xufVxuXG4ubWFwLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFwLXdyYXBwZXIgI21hcF9jZW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDk5O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTIxcHg7XG4gIG1hcmdpbi10b3A6IC00MXB4O1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogcmdiKDU2LCAxMjgsIDI1NSk7XG59XG5cbmlvbi10aXRsZSB7XG4gIC0tY29sb3I6d2hpdGU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/user-home/user-home.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/user-home/user-home.page.ts ***!
  \***************************************************/
/*! exports provided: UserHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserHomePage", function() { return UserHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/native-geocoder/ngx */ "./node_modules/@ionic-native/native-geocoder/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");









let UserHomePage = class UserHomePage {
    constructor(router, httpClient, storage, device, geolocation, nativeGeocoder, alertCtrl) {
        this.router = router;
        this.httpClient = httpClient;
        this.storage = storage;
        this.device = device;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.alertCtrl = alertCtrl;
        this.deviceId = this.device_id;
        this.disappear = true;
        this.x = 30; // 30 Seconds
        this.flag = 0;
        this._checkinUrl = "https://emp-manage90.herokuapp.com/attendence/check-in";
        this._checkoutUrl = "https://emp-manage90.herokuapp.com/attendence/check-out";
        //get items from localstorage items
        this.items = {};
        this.key = "items";
        //set checkinItems in localstorage checkinItems
        this.checkinItems = [];
        this.nextKey = 'checkinItems';
        this.d = new Date();
        this.h = this.d.getHours();
        this.m = this.d.getMinutes();
        this.t = "" + this.h + this.m;
        this.time = Number(this.t);
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
            };
            this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
            this.map.addListener('dragend', () => {
                this.latitude = this.map.center.lat();
                this.longitude = this.map.center.lng();
                this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng());
            });
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }
    getAddressFromCoords(latitude, longitude) {
        console.log("getAddressFromCoords " + latitude + " " + longitude);
        let options = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.reverseGeocode(latitude, longitude, options)
            .then((result) => {
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
            .catch((error) => {
            this.address = "Address Not Available!";
        });
    }
    locate() {
        console.log('Latitude:' + this.latitude + 'and Longitude:' + this.longitude);
    }
    ngOnInit() {
        this.loadMap();
        console.log(this.d);
        setInterval(() => {
            this.locate();
        }, 30000);
        setInterval(() => {
            this.today = Date.now();
        }, 1000);
        this.getData();
    }
    // read the data from local storage
    getData() {
        this.storage.get(this.key).then((val) => {
            if (val != null && val != undefined) {
                this.items = JSON.parse(val);
                this.token = this.items.token;
                console.log(this.items.token);
                console.log(this.items.data.empId);
                this.empId = this.items.data.empId;
                this.device_id = this.items.data.device_id;
            }
        });
    }
    //condition for check in
    afunction() {
        (this.time > 1000) || (this.time > 100) ? this.flag = 1 : console.log('time ok');
        console.log(this.time);
        //this.disappear= !this.disappear;
        if (this.flag == 1) {
            this.router.navigate(['/defaulter-reason']);
            this.disappear = !this.disappear;
        }
        else {
            this.sendPostRequest();
        }
    }
    sendPostRequest() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHeaders"]()
            //.append('Content-Type', 'application/json')
            .append('Authorization', this.token)
            .append('Access-Control-Allow-Headers', '*')
            .append('Access-Control-Allow-Methods', "GET, POST, DELETE, PUT")
            .append('Access-Control-Allow-Origin', '*');
        let inputs = {
            "inTime": "",
            "lat": this.latitude,
            "lon": this.longitude,
            "empId": this.empId
        };
        this.httpClient.post(this._checkinUrl, inputs, { headers })
            .subscribe(data => {
            console.log(data);
            this.checkinItems = data;
            this.storage.set(this.nextKey, JSON.stringify(this.checkinItems));
            if (!this.checkinItems.error) {
                alert("You are Checked-In");
                //this.disappear= !this.disappear;
            }
            else {
                this.alertError();
            }
        }, error => {
            console.log(error);
        });
    }
    //alert for check out
    showConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const confirm = yield this.alertCtrl.create({
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
                        }
                    }]
            });
            yield confirm.present();
        });
    }
    //condition for check out
    bfunction() {
        (this.time < 1800) || (this.time < 180) ? this.flag = 1 : console.log('time ok');
        console.log(this.time);
        //this.checkOutDisabled();
        if (this.flag == 1) {
            this.router.navigate(['/defaulter-checkout']);
        }
        else {
            this.sendPutRequest();
        }
    }
    sendPutRequest() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpHeaders"]()
            .append('Content-Type', 'application/json')
            .append('Authorization', this.token)
            .append('Access-Control-Allow-Headers', 'Content-Type')
            .append('Access-Control-Allow-Methods', "GET, POST, DELETE, PUT")
            .append('Access-Control-Allow-Origin', '*');
        console.log(this.empId, this.token);
        let inputs = {
            "outTime": this.d,
            "empId": this.empId
        };
        this.httpClient.put(this._checkoutUrl, inputs, { headers })
            .subscribe(data => {
            console.log(data);
            this.checkinItems = data;
            this.storage.set(this.nextKey, JSON.stringify(this.checkinItems));
            if (!this.checkinItems.error) {
                alert("You are Checked-Out");
            }
            else {
                this.alertError();
            }
        }, error => {
            console.log(error);
        });
    }
    alertError() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Unseccessfull',
                message: this.checkinItems.message,
                buttons: [{
                        text: 'Ok',
                        handler: () => {
                            this.router.navigate(['user-home']);
                        }
                    }]
            });
            yield alert.present();
        });
    }
    checkOutDisabled() {
        this.disabledButton = true;
    }
};
UserHomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_7__["Storage"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__["Device"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"] },
    { type: _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_5__["NativeGeocoder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('map', { static: false })
], UserHomePage.prototype, "mapElement", void 0);
UserHomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./user-home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/user-home/user-home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./user-home.page.scss */ "./src/app/pages/user-home/user-home.page.scss")).default]
    })
], UserHomePage);



/***/ })

}]);
//# sourceMappingURL=pages-user-home-user-home-module-es2015.js.map