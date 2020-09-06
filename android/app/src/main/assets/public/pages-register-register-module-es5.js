function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-register-register-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRegisterRegisterPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home\" color=\"warning\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title >Register</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<!--required pattern=\"^\\d{10}$\"-->\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button color=\"light\" defaultHref=\"home\"></ion-back-button>\r\n      </ion-buttons>\r\n    \r\n    <div style=\" margin-left:10px; margin-right:10px;\">\r\n      \r\n       <h2 style=\"margin-left:25%; margin-bottom:20px; color:white; font: 1.5em sans-serif;;\" >REGISTRATION</h2>  \r\n    \r\n\r\n      <ion-item class=\"item\" lines=\"none\" style=\"border-radius: 40px;\"> \r\n        <ion-icon size=\"small\" name=\"person-outline\"></ion-icon>&nbsp; \r\n        <ion-label position=\"inline\">Name</ion-label>\r\n       <ion-input autocomplete=\"off\" type=\"text\" formControlName=\"name\" >\r\n       </ion-input>\r\n       <ng-container  *ngFor=\"let validation of validation_messages.name\">\r\n        <div *ngIf=\"myForm.get('name').hasError(validation.type) && myForm.get('name').touched\">\r\n         <small>**{{validation.message}}</small>\r\n       </div>\r\n       </ng-container>\r\n      \r\n    </ion-item>\r\n    \r\n  \r\n\r\n    <ion-item class=\"item\" lines=\"none\" style=\"border-radius: 40px;\">  \r\n      <ion-icon size=\"small\" name=\"mail-outline\"></ion-icon>&nbsp;\r\n      <ion-label position=\"inline\">Personal Email</ion-label>\r\n      <ion-input autocomplete=\"off\" type=\"email\" formControlName=\"email\">\r\n      </ion-input>\r\n  \r\n      <ng-container *ngFor=\"let validation of validation_messages.email\">\r\n        <div *ngIf=\"myForm.get('email').hasError(validation.type) && myForm.get('email').touched\">\r\n          <small>**{{validation.message}}</small>\r\n        </div>\r\n      </ng-container>\r\n    </ion-item>\r\n    \r\n\r\n    <ion-item class=\"item\" lines=\"none\" style=\"border-radius: 40px;\">  \r\n      <ion-icon size=\"small\" name=\"calendar-outline\"></ion-icon>&nbsp;\r\n      <ion-label position=\"inline\">Date of Birth</ion-label>\r\n      <ion-datetime displayFormat=\"DD/MM/YYYY\" formControlName=\"dob\" min=\"1990-01-01\" max=\"2020-01-01\"></ion-datetime>\r\n      <ng-container *ngFor=\"let validation of validation_messages.dob\">\r\n        <div *ngIf=\"myForm.get('dob').hasError(validation.type) && myForm.get('dob').touched\">\r\n          <small>**{{validation.message}}</small>\r\n        </div>\r\n      </ng-container>\r\n    </ion-item>\r\n    <div>\r\n      \r\n    </div>\r\n    \r\n\r\n    <ion-item class=\"item\" lines=\"none\" style=\"border-radius: 40px;\">  \r\n      <ion-icon size='small' name=\"image-outline\"></ion-icon>&nbsp;\r\n      <ion-label position=\"inline\">Profile Picture</ion-label>\r\n      <ion-input type=\"file\" (change)=\"onFileSelected($event)\" accept=\"image/*\" formControlName=\"image\"></ion-input>\r\n      <ng-container *ngFor=\"let validation of validation_messages.image\">\r\n        <div *ngIf=\"myForm.get('image').hasError(validation.type) && myForm.get('image').touched\">\r\n          <small>**{{validation.message}}</small>\r\n        </div>\r\n      </ng-container>\r\n    </ion-item>\r\n    \r\n\r\n    <ion-item class=\"item\" lines=\"none\" style=\"border-radius: 40px;\">  \r\n      <ion-icon size=\"small\" name=\"business-outline\"></ion-icon>&nbsp;\r\n      <ion-label position=\"inline\">Address</ion-label>\r\n      <ion-input autocomplete=\"off\" type=\"text\" formControlName=\"address\"></ion-input>\r\n      <ng-container *ngFor=\"let validation of validation_messages.address\">\r\n        <div *ngIf=\"myForm.get('address').hasError(validation.type) && myForm.get('address').touched\">\r\n          <small>**{{validation.message}}</small>\r\n        </div>\r\n      </ng-container>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"item\" lines=\"none\" style=\"border-radius: 40px;\">  \r\n      <ion-icon size=\"small\" name=\"person-sharp\"></ion-icon>&nbsp;\r\n      <ion-label position=\"inline\">Reporting Manager</ion-label>\r\n      <ion-input autocomplete=\"off\" type=\"text\" formControlName=\"manager\"></ion-input>\r\n      <ng-container *ngFor=\"let validation of validation_messages.manager\">\r\n        <div *ngIf=\"myForm.get('manager').hasError(validation.type) && myForm.get('manager').touched\">\r\n          <small>**{{validation.message}}</small>\r\n        </div>\r\n      </ng-container>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"item\" lines=\"none\" style=\"border-radius: 40px;\">  \r\n      <ion-icon size=\"small\" name=\"call-outline\"></ion-icon>&nbsp;\r\n      <ion-label position=\"inline\">Mobile Number</ion-label>\r\n      <ion-input autocomplete=\"off\" type=\"number\" formControlName=\"phone_no\"></ion-input>\r\n      <ng-container *ngFor=\"let validation of validation_messages.phone_no\">\r\n        <div *ngIf=\"myForm.get('phone_no').hasError(validation.type) && myForm.get('phone_no').touched\">\r\n          <small>**{{validation.message}}</small>\r\n        </div>\r\n      </ng-container>\r\n    </ion-item>\r\n    \r\n    \r\n    <ion-item class=\"item\" lines=\"none\" style=\"border-radius: 40px;\">  \r\n      <ion-icon size=\"small\" name=\"desktop-sharp\"></ion-icon>&nbsp;\r\n        <ion-label position=\"inline\">  Device Id</ion-label>\r\n        <ion-input [(ngModel)]=\"device_id\" autocomplete=\"off\" type=\"text\"  formControlName=\"device_id\" ></ion-input>\r\n        <ng-container *ngFor=\"let validation of validation_messages.device_id\">\r\n          <div *ngIf=\"myForm.get('device_id').hasError(validation.type) && myForm.get('device_id').touched\">\r\n            <small class=\"text-danger\">**{{validation.message}}</small>\r\n          </div>\r\n        </ng-container>\r\n      </ion-item>\r\n  \r\n      </div>\r\n    <ion-row>\r\n      <ion-col></ion-col>\r\n      <ion-col >\r\n        <ion-button  shape=\"round\" [disabled]=\"!myForm.valid\" type=\"submit\" (click)=\"sendPostRequest()\">Sign Up</ion-button>\r\n      </ion-col>\r\n      <ion-col></ion-col>\r\n    </ion-row>\r\n  </form>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/register/register-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/register/register-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: RegisterPageRoutingModule */

  /***/
  function srcAppPagesRegisterRegisterRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function () {
      return RegisterPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/pages/register/register.page.ts");

    var routes = [{
      path: '',
      component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }];

    var RegisterPageRoutingModule = function RegisterPageRoutingModule() {
      _classCallCheck(this, RegisterPageRoutingModule);
    };

    RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RegisterPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/register/register.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/register/register.module.ts ***!
    \***************************************************/

  /*! exports provided: RegisterPageModule */

  /***/
  function srcAppPagesRegisterRegisterModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function () {
      return RegisterPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _register_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register-routing.module */
    "./src/app/pages/register/register-routing.module.ts");
    /* harmony import */


    var _register_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./register.page */
    "./src/app/pages/register/register.page.ts");
    /* harmony import */


    var _services_registration_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../services/registration.service */
    "./src/app/services/registration.service.ts");

    var RegisterPageModule = function RegisterPageModule() {
      _classCallCheck(this, RegisterPageModule);
    };

    RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _register_routing_module__WEBPACK_IMPORTED_MODULE_6__["RegisterPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_register_page__WEBPACK_IMPORTED_MODULE_7__["RegisterPage"]],
      providers: [_services_registration_service__WEBPACK_IMPORTED_MODULE_8__["RegistrationService"]]
    })], RegisterPageModule);
    /***/
  },

  /***/
  "./src/app/pages/register/register.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/register/register.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRegisterRegisterPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: url('1599121471486.JPEG') no-repeat 0 0/100% 100%;\n  position: relative;\n  height: auto;\n  width: 100%;\n}\n\nsmall {\n  color: red;\n}\n\n.item {\n  color: whitesmoke;\n  border-radius: 50px;\n  --border-width: 1.5px;\n  --background: rgba(229, 189, 143, 0.459);\n  margin-top: 5px;\n}\n\nion-button {\n  text-align: center;\n  --border-color: rgb(10, 9, 70);\n  --border-width: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0ZXIvQzpcXFVzZXJzXFxCSVZBU1xcRGVza3RvcFxcbGF0ZXN0X0VtcGxveWVlX21hbmFnZW1lbnRcXEVtcGxveWVlX21hbmFnZW1lbnQvc3JjXFxhcHBcXHBhZ2VzXFxyZWdpc3RlclxccmVnaXN0ZXIucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSwrREFBQTtFQUVBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNESjs7QURJQTtFQUNJLFVBQUE7QUNESjs7QURNQTtFQUNJLGlCQUFBO0VBR0EsbUJBQUE7RUFFQSxxQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZUFBQTtBQ05KOztBRFNFO0VBQ0Usa0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZWdpc3Rlci9yZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IHVybChzcmMvYXNzZXRzL2ltZy9SZWdQYWdlLnBuZykgbm8tcmVwZWF0IHRvcCBjZW50ZXIvY292ZXIgZml4ZWQsICNmZmY7XHJcbiAgICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi90aGVtZS8xNTk5MTIxNDcxNDg2LkpQRUcpICBuby1yZXBlYXQgMCAwLzEwMCUgMTAwJSA7XHJcblxyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnNtYWxse1xyXG4gICAgY29sb3I6cmVkO1xyXG59XHJcbiAgXHJcblxyXG4gXHJcbi5pdGVtIHtcclxuICAgIGNvbG9yOndoaXRlc21va2U7XHJcbiAgICAvLyBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA0MCU7XHJcbiAgICAvLyBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIC8vIC0tYm9yZGVyLWNvbG9yOiByZ2IoMjQ1LCAxOTAsIDcxKTtcclxuICAgIC0tYm9yZGVyLXdpZHRoOiAxLjVweDtcclxuICAgIC0tYmFja2dyb3VuZDogcmdiYSgyMjksIDE4OSwgMTQzLCAwLjQ1OSk7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgXHJcbiAgfVxyXG4gIGlvbi1idXR0b257XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogcmdiKDEwLCA5LCA3MCk7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMnB4O1xyXG5cclxuICB9IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi90aGVtZS8xNTk5MTIxNDcxNDg2LkpQRUcpIG5vLXJlcGVhdCAwIDAvMTAwJSAxMDAlIDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5zbWFsbCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi5pdGVtIHtcbiAgY29sb3I6IHdoaXRlc21va2U7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIC0tYm9yZGVyLXdpZHRoOiAxLjVweDtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKDIyOSwgMTg5LCAxNDMsIDAuNDU5KTtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAtLWJvcmRlci1jb2xvcjogcmdiKDEwLCA5LCA3MCk7XG4gIC0tYm9yZGVyLXdpZHRoOiAycHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/register/register.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/register/register.page.ts ***!
    \*************************************************/

  /*! exports provided: RegisterPage */

  /***/
  function srcAppPagesRegisterRegisterPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterPage", function () {
      return RegisterPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_registration_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/registration.service */
    "./src/app/services/registration.service.ts");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");

    var RegisterPage = /*#__PURE__*/function () {
      function RegisterPage(router, alertController, device, registrationService, httpClient, formsBuilder) {
        _classCallCheck(this, RegisterPage);

        this.router = router;
        this.alertController = alertController;
        this.device = device;
        this.registrationService = registrationService;
        this.httpClient = httpClient;
        this.formsBuilder = formsBuilder;
        this._registerUrl = "https://emp-manage90.herokuapp.com/api/employees";
        this.items = {};
        this.device_id = this.device.uuid;
        this.validation_messages = {
          'name': [{
            type: 'required',
            message: 'Name is required.'
          }],
          'email': [{
            type: 'required',
            message: 'Email is required.'
          }, {
            type: 'pattern',
            message: 'Please enter a valid email.'
          }],
          'dob': [{
            type: 'required',
            message: 'Date of Birth is required.'
          }],
          'image': [{
            type: 'required',
            message: 'Profile Picture is required.'
          }],
          'address': [{
            type: 'required',
            message: 'Address is required.'
          }],
          'manager': [{
            type: 'required',
            message: 'manager is required.'
          }],
          'phone_no': [{
            type: 'required',
            message: 'Mobile Number is required.'
          }, {
            type: 'pattern',
            message: 'Mobile Number must have 10 digit'
          }],
          'device_id': [{
            type: 'required',
            message: 'device_id is required.'
          }]
        };
        this.myForm = formsBuilder.group({
          name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)])]],
          dob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          image: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          manager: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          phone_no: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]{10}$')])]],
          device_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
      }

      _createClass(RegisterPage, [{
        key: "onSubmit",
        value: function onSubmit() {
          console.log(this.myForm.value);
        }
      }, {
        key: "btnClicked",
        value: function btnClicked() {// // alert('btn clicked')
          // this.router.navigate(['main-page']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onFileSelected",
        value: function onFileSelected(event) {
          var file = event.target.files[0];
          this.myForm.patchValue({
            image: file
          });
          this.myForm.get('image').updateValueAndValidity();
          console.log('gtdyuetwhuwierhie', file);
        }
      }, {
        key: "sendPostRequest",
        value: function sendPostRequest() {
          var _this = this;

          this.registrationService.onUploadproduct(this.myForm.value.name, this.myForm.value.image, this.myForm.value.email, this.myForm.value.dob, this.myForm.value.address, this.myForm.value.manager, this.myForm.value.phone_no, this.myForm.value.device_id).subscribe(function (data) {
            console.log(data);
            _this.items = data;

            if (!_this.items.error) {
              _this.alert();
            } else {
              _this.alertError();
            }
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "alert",
        value: function alert() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: 'successfull',
                      message: 'User Registration Complete ',
                      buttons: [{
                        text: 'Ok',
                        handler: function handler() {
                          _this2.router.navigate(['/login']);
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "alertError",
        value: function alertError() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: 'Unseccessfull',
                      message: this.items.message,
                      buttons: [{
                        text: 'Ok',
                        handler: function handler() {
                          _this3.router.navigate(['register']);
                        }
                      }]
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return RegisterPage;
    }();

    RegisterPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__["Device"]
      }, {
        type: src_app_services_registration_service__WEBPACK_IMPORTED_MODULE_6__["RegistrationService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./register.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./register.page.scss */
      "./src/app/pages/register/register.page.scss"))["default"]]
    })], RegisterPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-register-register-module-es5.js.map