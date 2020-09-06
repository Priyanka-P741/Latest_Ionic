(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-edit-profile-edit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-edit/profile-edit.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-edit/profile-edit.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header translucent no-border>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      Edit Profile&nbsp;</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n<form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\r\n  <ion-buttons slot=\"start\">\r\n    <ion-back-button defaultHref=\"login\">Back</ion-back-button>\r\n  </ion-buttons>\r\n  <div class=\"total\" >\r\n    <h2 class=\"heading\"  >Edit Profile</h2>  \r\n\r\n    <ion-item>\r\n      <ion-label position=\"inline\">Emp Id :</ion-label>\r\n      <ion-input [(ngModel)]=\"empId\" formControlName=\"empId\" type=\"text\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"inline\">Name : </ion-label>\r\n      <ion-input [(ngModel)]=\"name\" formControlName=\"name\" type=\"text\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"inline\">Designation : </ion-label>\r\n      <ion-input [(ngModel)]=\"designation\" formControlName=\"designation\" type=\"text\"></ion-input>\r\n    </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"inline\">Reporting Manager : </ion-label>\r\n      <ion-input [(ngModel)]=\"manager\" formControlName=\"manager\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"inline\">Hardware Allotted : </ion-label>\r\n      <ion-input [(ngModel)]=\"hardware\" formControlName=\"hardware\" type=\"text\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"inline\">Date Of Birth : </ion-label>\r\n        <ion-input [(ngModel)]=\"dob\" formControlName=\"dob\" type=\"date\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label position=\"inline\">Personal Email : </ion-label>\r\n        <ion-input [(ngModel)]=\"email\" formControlName=\"email\" type=\"email\"></ion-input>\r\n    </ion-item>\r\n    <ion-item lines=\"full\"> \r\n      <ion-label position=\"inline\">Profile Picture :</ion-label>\r\n      <ion-input [(ngModel)]=\"image\" (change)=\"onFileSelected($event)\" formControlName=\"image\" type=\"file\" accept=\"image/*\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"inline\">Address : </ion-label>\r\n      <ion-input [(ngModel)]=\"address\" formControlName=\"addr\" type=\"text\"></ion-input>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label position=\"inline\">Mobile Number : </ion-label>\r\n      <ion-input [(ngModel)]=\"phone_no\" formControlName=\"phone_no\" type=\"number\"></ion-input>\r\n    </ion-item>\r\n</div>\r\n<ion-row>\r\n  <ion-col></ion-col>\r\n  <ion-col>\r\n<ion-button  shape=\"round\" type=\"submit\" (click)=\"sendPutRequest()\">Save</ion-button>\r\n</ion-col>\r\n<ion-col></ion-col>\r\n</ion-row>\r\n</form>\r\n</ion-content>\r\n\r\n\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/pages/profile-edit/profile-edit-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/profile-edit/profile-edit-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProfileEditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditPageRoutingModule", function() { return ProfileEditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _profile_edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile-edit.page */ "./src/app/pages/profile-edit/profile-edit.page.ts");




const routes = [
    {
        path: '',
        component: _profile_edit_page__WEBPACK_IMPORTED_MODULE_3__["ProfileEditPage"]
    }
];
let ProfileEditPageRoutingModule = class ProfileEditPageRoutingModule {
};
ProfileEditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfileEditPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/profile-edit/profile-edit.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/profile-edit/profile-edit.module.ts ***!
  \***********************************************************/
/*! exports provided: ProfileEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditPageModule", function() { return ProfileEditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-edit-routing.module */ "./src/app/pages/profile-edit/profile-edit-routing.module.ts");
/* harmony import */ var _profile_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-edit.page */ "./src/app/pages/profile-edit/profile-edit.page.ts");







let ProfileEditPageModule = class ProfileEditPageModule {
};
ProfileEditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _profile_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileEditPageRoutingModule"]
        ],
        declarations: [_profile_edit_page__WEBPACK_IMPORTED_MODULE_6__["ProfileEditPage"]]
    })
], ProfileEditPageModule);



/***/ }),

/***/ "./src/app/pages/profile-edit/profile-edit.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/profile-edit/profile-edit.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url('photo-1499610519775-f6180db76b5a.jpeg') no-repeat 0 0/100% 100%;\n  position: relative;\n  height: auto;\n  width: 100%;\n}\n\nion-item {\n  --background: transparent;\n  color: darkblue;\n  --background: rgba(230, 217, 217, 0.29);\n  margin-top: 1.5px;\n  border-radius: 40px;\n}\n\n.custom-icon {\n  font-size: 30px;\n  color: white;\n}\n\n.total {\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.heading {\n  margin-left: 35%;\n  margin-bottom: 5px;\n  color: black;\n  font: 1.5em sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS1lZGl0L0M6XFxVc2Vyc1xcQklWQVNcXERlc2t0b3BcXGxhdGVzdF9FbXBsb3llZV9tYW5hZ2VtZW50XFxFbXBsb3llZV9tYW5hZ2VtZW50L3NyY1xcYXBwXFxwYWdlc1xccHJvZmlsZS1lZGl0XFxwcm9maWxlLWVkaXQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9maWxlLWVkaXQvcHJvZmlsZS1lZGl0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtGQUFBO0VBRUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0FKOztBRFNBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUNBQUE7RUFFQSxpQkFBQTtFQUNDLG1CQUFBO0FDUEw7O0FEV0E7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ1JKOztBRFdFO0VBQ0UsaUJBQUE7RUFDQyxrQkFBQTtBQ1JMOztBRFdFO0VBQ0UsZ0JBQUE7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDQyxzQkFBQTtBQ1JOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS1lZGl0L3Byb2ZpbGUtZWRpdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi90aGVtZS9waG90by0xNDk5NjEwNTE5Nzc1LWY2MTgwZGI3NmI1YS5qcGVnKSBuby1yZXBlYXQgMCAwLzEwMCUgMTAwJSA7XHJcbiAgICAvLyAtLWJhY2tncm91bmQgOiNkY2RkZTg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLy8gaW9uLXRvb2xiYXIge1xyXG4vLyAgICAgLy8gLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuLy8gICAgIC0tYmFja2dyb3VuZDogcmdiKDU2LCAxMjgsIDI1NSk7XHJcbi8vICAgICAtLWNvbG9yOndoaXRlO1xyXG4vLyB9XHJcblxyXG5pb24taXRlbXtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogZGFya2JsdWU7XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjMwLCAyMTcsIDIxNywgMC4yOSk7XHJcbiAgICAvLyAtLWJvcmRlci13aWR0aDogMXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMS41cHg7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuXHJcbn1cclxuXHJcbi5jdXN0b20taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvciA6d2hpdGU7XHJcbiAgfVxyXG5cclxuICAudG90YWx7XHJcbiAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gICAgIG1hcmdpbi1yaWdodDoxMHB4O1xyXG4gIH1cclxuICBcclxuICAuaGVhZGluZ3tcclxuICAgIG1hcmdpbi1sZWZ0OjM1JTtcclxuICAgICBtYXJnaW4tYm90dG9tOjVweDsgXHJcbiAgICAgY29sb3I6YmxhY2s7XHJcbiAgICAgIGZvbnQ6IDEuNWVtIHNhbnMtc2VyaWY7XHJcbiAgfSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vdGhlbWUvcGhvdG8tMTQ5OTYxMDUxOTc3NS1mNjE4MGRiNzZiNWEuanBlZykgbm8tcmVwZWF0IDAgMC8xMDAlIDEwMCUgO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IGRhcmtibHVlO1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjMwLCAyMTcsIDIxNywgMC4yOSk7XG4gIG1hcmdpbi10b3A6IDEuNXB4O1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xufVxuXG4uY3VzdG9tLWljb24ge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRvdGFsIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmhlYWRpbmcge1xuICBtYXJnaW4tbGVmdDogMzUlO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udDogMS41ZW0gc2Fucy1zZXJpZjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/profile-edit/profile-edit.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile-edit/profile-edit.page.ts ***!
  \*********************************************************/
/*! exports provided: ProfileEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileEditPage", function() { return ProfileEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let ProfileEditPage = class ProfileEditPage {
    constructor(alertController, storage, httpClient, router, formsBuilder) {
        this.alertController = alertController;
        this.storage = storage;
        this.httpClient = httpClient;
        this.router = router;
        this.formsBuilder = formsBuilder;
        this.items = {};
        this.key = 'items';
        this.Key = "t";
        this.mytoken = {};
        this._profileEditUrl = "https://emp-manage90.herokuapp.com/api/update";
        this.myForm = formsBuilder.group({
            empId: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            designation: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            manager: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            hardware: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            addr: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            phone_no: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
            dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
    }
    onSubmit() {
        console.log(this.myForm.value.touched);
    }
    ngOnInit() {
        this.getToken();
        this.getData();
    }
    onFileSelected(event) {
        const file = event.target.files[0];
        this.myForm.patchValue({
            image: file
        });
        this.myForm.get('image').updateValueAndValidity();
        console.log('gtdyuetwhuwierhie', file);
    }
    sendPutRequest() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]()
            .append('Content-Type', 'application/json')
            .append('Authorization', this.token)
            .append('Access-Control-Allow-Headers', '*')
            .append('Access-Control-Allow-Methods', "GET, POST, DELETE, PUT")
            .append('Access-Control-Allow-Origin', '*');
        this.httpClient.put(this._profileEditUrl, JSON.stringify(this.myForm.value), { headers })
            .subscribe(data => {
            console.log(data);
            this.items = data;
            if (!this.items.error) {
                this.alert();
                this.storage.set(this.key, JSON.stringify(this.items));
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
                this.name = this.items.data.name;
                this.empId = this.items.data.empId;
                this.email = this.items.data.email;
                this.dob = this.items.data.dob;
                this.image = this.items.data.image;
                this.address = this.items.data.address;
                this.manager = this.items.data.manager;
                this.phone_no = this.items.data.phone_no;
                this.device_id = this.items.data.device_id;
                this.joining_date = this.items.data.joining_date;
                this.designation = this.items.data.designation;
                this.hardware = this.items.data.hardware;
                //this.token =this.items.token;
            }
        });
    }
    getToken() {
        this.storage.get(this.Key).then((val) => {
            if (val != null && val != undefined) {
                this.items = JSON.parse(val);
                this.token = this.items.token;
                //console.log(this.token);
            }
        });
    }
    alert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Successfull',
                message: 'Successfully updated profile.',
                buttons: [{
                        text: 'Ok',
                        handler: () => {
                            this.router.navigate(['profile']);
                        }
                    }]
            });
            yield alert.present();
        });
    }
    alertError() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Unseccessfull',
                message: this.items.message,
                buttons: [{
                        text: 'Ok',
                        handler: () => {
                            this.router.navigate(['profile-edit']);
                        }
                    }]
            });
            yield alert.present();
        });
    }
};
ProfileEditPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
ProfileEditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile-edit',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile-edit.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile-edit/profile-edit.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile-edit.page.scss */ "./src/app/pages/profile-edit/profile-edit.page.scss")).default]
    })
], ProfileEditPage);



/***/ })

}]);
//# sourceMappingURL=pages-profile-edit-profile-edit-module-es2015.js.map