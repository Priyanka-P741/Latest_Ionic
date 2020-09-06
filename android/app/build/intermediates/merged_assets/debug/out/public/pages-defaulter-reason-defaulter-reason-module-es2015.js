(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-defaulter-reason-defaulter-reason-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/defaulter-reason/defaulter-reason.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/defaulter-reason/defaulter-reason.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">Reason Box</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n    <div class=\"total\" >\r\n      <h2 class=\"heading\"  >Reason Box</h2>  \r\n\r\n    <ion-item lines=\"none\">\r\n  <ion-label position=\"floating\" required>\r\n  Please fill your reason for late Check-In.\r\n  </ion-label>\r\n  <br>\r\n  <ion-input formControlName=\"lateInReason\" name=\"lateInReason\" auto-grow ></ion-input>\r\n</ion-item>\r\n<ion-button shape=\"round\" color=\"danger\" [disabled]=\"!myForm.valid\"  (click)=\"sendPostRequest()\"  type=\"submit\" color=\"danger\" expand=\"block\">OK</ion-button>\r\n</div>\r\n</form>\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ "./src/app/pages/defaulter-reason/defaulter-reason-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/defaulter-reason/defaulter-reason-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: DefaulterReasonPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaulterReasonPageRoutingModule", function() { return DefaulterReasonPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _defaulter_reason_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defaulter-reason.page */ "./src/app/pages/defaulter-reason/defaulter-reason.page.ts");




const routes = [
    {
        path: '',
        component: _defaulter_reason_page__WEBPACK_IMPORTED_MODULE_3__["DefaulterReasonPage"]
    }
];
let DefaulterReasonPageRoutingModule = class DefaulterReasonPageRoutingModule {
};
DefaulterReasonPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DefaulterReasonPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/defaulter-reason/defaulter-reason.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/defaulter-reason/defaulter-reason.module.ts ***!
  \*******************************************************************/
/*! exports provided: DefaulterReasonPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaulterReasonPageModule", function() { return DefaulterReasonPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _defaulter_reason_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./defaulter-reason-routing.module */ "./src/app/pages/defaulter-reason/defaulter-reason-routing.module.ts");
/* harmony import */ var _defaulter_reason_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./defaulter-reason.page */ "./src/app/pages/defaulter-reason/defaulter-reason.page.ts");







let DefaulterReasonPageModule = class DefaulterReasonPageModule {
};
DefaulterReasonPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _defaulter_reason_routing_module__WEBPACK_IMPORTED_MODULE_5__["DefaulterReasonPageRoutingModule"]
        ],
        declarations: [_defaulter_reason_page__WEBPACK_IMPORTED_MODULE_6__["DefaulterReasonPage"]]
    })
], DefaulterReasonPageModule);



/***/ }),

/***/ "./src/app/pages/defaulter-reason/defaulter-reason.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/defaulter-reason/defaulter-reason.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url('1599063952683.JPEG') no-repeat 0 0/100% 100%;\n  position: relative;\n  height: auto;\n  width: 100%;\n}\n\nion-item {\n  --background: rgba(238, 223, 223, 0.39);\n  --border-width: 1.5px;\n}\n\n.total {\n  padding-top: 100px;\n  margin-left: 45px;\n  margin-right: 45px;\n}\n\n.heading {\n  margin-left: 30%;\n  margin-bottom: 50px;\n  color: black;\n  font: 1.5em sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGVmYXVsdGVyLXJlYXNvbi9DOlxcVXNlcnNcXEJJVkFTXFxEZXNrdG9wXFxsYXRlc3RfRW1wbG95ZWVfbWFuYWdlbWVudFxcRW1wbG95ZWVfbWFuYWdlbWVudC9zcmNcXGFwcFxccGFnZXNcXGRlZmF1bHRlci1yZWFzb25cXGRlZmF1bHRlci1yZWFzb24ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9kZWZhdWx0ZXItcmVhc29uL2RlZmF1bHRlci1yZWFzb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsK0RBQUE7RUFFQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDREY7O0FER0E7RUFDRSx1Q0FBQTtFQUNBLHFCQUFBO0FDQUY7O0FERUU7RUFDRSxrQkFBQTtFQUNDLGlCQUFBO0VBQ0Msa0JBQUE7QUNDTjs7QURDRTtFQUNFLGdCQUFBO0VBQ0MsbUJBQUE7RUFDQyxZQUFBO0VBQ0Msc0JBQUE7QUNFUCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RlZmF1bHRlci1yZWFzb24vZGVmYXVsdGVyLXJlYXNvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLy8gLS1iYWNrZ3JvdW5kOiB1cmwoc3JjL2Fzc2V0cy9pbWcvUmVnUGFnZS5wbmcpIG5vLXJlcGVhdCB0b3AgY2VudGVyL2NvdmVyIGZpeGVkLCAjZmZmO1xyXG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL3RoZW1lLzE1OTkwNjM5NTI2ODMuSlBFRykgbm8tcmVwZWF0IDAgMC8xMDAlIDEwMCUgO1xyXG5cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59ICBcclxuaW9uLWl0ZW17XHJcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDIzOCwgMjIzLCAyMjMsIDAuMzkpO1xyXG4gIC0tYm9yZGVyLXdpZHRoOiAxLjVweDt9XHJcblxyXG4gIC50b3RhbHtcclxuICAgIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICAgICBtYXJnaW4tbGVmdDo0NXB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6NDVweDtcclxuICB9XHJcbiAgLmhlYWRpbmd7XHJcbiAgICBtYXJnaW4tbGVmdDozMCU7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTo1MHB4O1xyXG4gICAgICBjb2xvcjpibGFjaztcclxuICAgICAgIGZvbnQ6IDEuNWVtIHNhbnMtc2VyaWY7XHJcbiAgfSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vdGhlbWUvMTU5OTA2Mzk1MjY4My5KUEVHKSBuby1yZXBlYXQgMCAwLzEwMCUgMTAwJSA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjM4LCAyMjMsIDIyMywgMC4zOSk7XG4gIC0tYm9yZGVyLXdpZHRoOiAxLjVweDtcbn1cblxuLnRvdGFsIHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBtYXJnaW4tbGVmdDogNDVweDtcbiAgbWFyZ2luLXJpZ2h0OiA0NXB4O1xufVxuXG4uaGVhZGluZyB7XG4gIG1hcmdpbi1sZWZ0OiAzMCU7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udDogMS41ZW0gc2Fucy1zZXJpZjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/defaulter-reason/defaulter-reason.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/defaulter-reason/defaulter-reason.page.ts ***!
  \*****************************************************************/
/*! exports provided: DefaulterReasonPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaulterReasonPage", function() { return DefaulterReasonPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








let DefaulterReasonPage = class DefaulterReasonPage {
    constructor(router, geolocation, alertCtrl, formsBuilder, httpClient, storage) {
        this.router = router;
        this.geolocation = geolocation;
        this.alertCtrl = alertCtrl;
        this.formsBuilder = formsBuilder;
        this.httpClient = httpClient;
        this.storage = storage;
        this._checkinUrl = "https://emp-manage90.herokuapp.com/attendence/check-in";
        //get items from localstorage items
        this.items = {};
        this.key = "items";
        //set checkinItems from localstorage checkinItems
        this.checkinItems = [];
        this.nextKey = 'checkinItems';
        this.d = new Date();
        this.myForm = formsBuilder.group({
            'lateInReason': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])],
        });
    }
    onSubmit() {
        console.log(this.myForm.value);
    }
    loadMap() {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.lat = resp.coords.latitude;
            this.lon = resp.coords.longitude;
            console.log(this.lat);
            console.log(this.lon);
        });
    }
    ngOnInit() {
        this.getData();
        console.log(this.d);
        this.loadMap();
    }
    sendPostRequest() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpHeaders"]()
            .append('Content-Type', 'application/json')
            .append('Authorization', this.token)
            .append('Access-Control-Allow-Headers', 'Content-Type')
            .append('Access-Control-Allow-Methods', "GET, POST, DELETE, PUT")
            .append('Access-Control-Allow-Origin', '*');
        let inputs = {
            "inTime": this.d,
            "lat": this.lat,
            "lon": this.lon,
            "empId": this.empId,
            "lateInReason": this.myForm.value.lateInReason
        };
        this.httpClient.post(this._checkinUrl, inputs, { headers })
            .subscribe(data => {
            console.log(data);
            this.checkinItems = data;
            this.storage.set(this.nextKey, JSON.stringify(this.checkinItems));
            if (!this.checkinItems.error) {
                this.alert();
            }
            else {
                this.alertError();
            }
        }, error => {
            console.log(error);
        });
    }
    getData() {
        this.storage.get(this.key).then((val) => {
            if (val != null && val != undefined) {
                this.items = JSON.parse(val);
                console.log(this.items.data.empId);
                console.log(this.items.token);
                this.token = this.items.token;
                this.empId = this.items.data.empId;
            }
        });
    }
    alert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'successfull',
                message: "check-in successfully",
                buttons: [{
                        text: 'Ok',
                        handler: () => {
                            this.router.navigate(['/user-home']);
                        }
                    }]
            });
            yield alert.present();
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
                            this.router.navigate(['/user-home']);
                        }
                    }]
            });
            yield alert.present();
        });
    }
};
DefaulterReasonPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_3__["Geolocation"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] }
];
DefaulterReasonPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-defaulter-reason',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./defaulter-reason.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/defaulter-reason/defaulter-reason.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./defaulter-reason.page.scss */ "./src/app/pages/defaulter-reason/defaulter-reason.page.scss")).default]
    })
], DefaulterReasonPage);



/***/ })

}]);
//# sourceMappingURL=pages-defaulter-reason-defaulter-reason-module-es2015.js.map