function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forgotpassword-forgotpassword-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgotpassword/forgotpassword.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgotpassword/forgotpassword.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesForgotpasswordForgotpasswordPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"login\">Back</ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title >Reset Your Password</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"login\">Back</ion-back-button>\r\n    </ion-buttons>\r\n    <div class=\"total\" >\r\n      <h2 class=\"heading\"  >Reset Your Password</h2>  \r\n\r\n      <ion-item class=\"item\" lines=\"none\" >  \r\n        <ion-icon name=\"mail-outline\"></ion-icon>&nbsp;\r\n      <ion-label position=\"inline\">Emp Id</ion-label>\r\n      <ion-input autocomplete=\"off\" type=\"email\" formControlName=\"empId\"></ion-input>\r\n      <ng-container *ngFor=\"let validation of validation_messages.empId\">\r\n        <div *ngIf=\"myForm.get('empId').hasError(validation.type) && myForm.get('empId').touched\">\r\n          <small class=\"text-danger\">**{{validation.message}}</small>\r\n        </div>\r\n        </ng-container>\r\n    </ion-item>\r\n    \r\n    \r\n\r\n    <ion-item class=\"item\" lines=\"none\"  >  \r\n      <ion-icon name=\"key-outline\"></ion-icon>&nbsp;\r\n      <ion-label position=\"inline\">Old Password</ion-label>\r\n      <ion-input autocomplete=\"off\" type=\"password\" formControlName=\"oldpassword\"></ion-input>\r\n      <ng-container *ngFor=\"let validation of validation_messages.oldpassword\">\r\n        <div *ngIf=\"myForm.get('oldpassword').hasError(validation.type) && myForm.get('oldpassword').touched\">\r\n          <small class=\"text-danger\">**{{validation.message}}</small>\r\n        </div>\r\n        </ng-container>\r\n    </ion-item>\r\n    \r\n    \r\n\r\n    <ion-item class=\"item\" lines=\"none\"  >  \r\n      <ion-icon name=\"key-outline\"></ion-icon>&nbsp;\r\n      <ion-label position=\"inline\">New Password</ion-label>\r\n      <ion-icon slot=\"end\" size=\"small\"\r\n          [name]=\"passwordShown === true ? 'eye-sharp' : 'eye-off-sharp'\" (click)=\"togglePassword()\"></ion-icon>\r\n      <ion-input autocomplete=\"off\" formControlName=\"password\" [type]=\"passwordType\"></ion-input>\r\n    </ion-item>\r\n    <!-- <div>\r\n      <ng-container *ngFor=\"let validation of validation_messages.password\">\r\n        <div *ngIf=\"!myForm.get('password').hasError(validation.type) && myForm.get('password').touched\">\r\n          <small class=\"text-danger\">**{{validation.message}}</small>\r\n        </div>\r\n        </ng-container>\r\n    </div> -->\r\n\r\n    <ion-item class=\"item\" lines=\"none\"  >  \r\n      <ion-icon name=\"key-outline\"></ion-icon>&nbsp;\r\n      <ion-label position=\"inline\">Confirm Password </ion-label>\r\n      <ion-icon slot=\"end\" size=\"small\" [name]=\"passwordShown === true ? 'eye-sharp' : 'eye-off-sharp'\"\r\n        (click)=\"togglePassword()\"></ion-icon>\r\n      <ion-input  [class.is-invalid]=\"myForm.errors?.misMatch\" autocomplete=\"off\" formControlName=\"confirmPassword\"\r\n        [type]=\"passwordType\"></ion-input>\r\n        <div>\r\n          <small class=\"text-danger\" *ngIf=\"!myForm.get('confirmPassword').errors && myForm.hasError('passwordNotMatch') && (myForm.get('confirmPassword').dirty || myForm.get('confirmPassword').touched)\">**Passwords do not match</small>\r\n        </div>\r\n    </ion-item>\r\n    \r\n    <!-- <div>\r\n      <ng-container *ngFor=\"let validation of validation_messages.confirmPassword\">\r\n        <div *ngIf=\"!myForm.get('confirmPassword').hasError(validation.type) && myForm.get('confirmPassword').touched\">\r\n          <small class=\"text-danger\">**{{validation.message}}</small>\r\n        </div>\r\n        </ng-container>\r\n    </div> -->\r\n    <br>\r\n\r\n</div>\r\n    <ion-row>\r\n      <ion-col></ion-col>\r\n      <ion-col>\r\n        <ion-button shape=\"round\" [disabled]=\"!myForm.valid\" type=\"submit\" (click)=\"sendPutRequest()\">Update\r\n        </ion-button>\r\n      </ion-col>\r\n      <ion-col></ion-col>\r\n    </ion-row>\r\n  </form>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/forgotpassword/forgotpassword-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/forgotpassword/forgotpassword-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: ForgotpasswordPageRoutingModule */

  /***/
  function srcAppPagesForgotpasswordForgotpasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageRoutingModule", function () {
      return ForgotpasswordPageRoutingModule;
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


    var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./forgotpassword.page */
    "./src/app/pages/forgotpassword/forgotpassword.page.ts");

    var routes = [{
      path: '',
      component: _forgotpassword_page__WEBPACK_IMPORTED_MODULE_3__["ForgotpasswordPage"]
    }];

    var ForgotpasswordPageRoutingModule = function ForgotpasswordPageRoutingModule() {
      _classCallCheck(this, ForgotpasswordPageRoutingModule);
    };

    ForgotpasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ForgotpasswordPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/forgotpassword/forgotpassword.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/forgotpassword/forgotpassword.module.ts ***!
    \***************************************************************/

  /*! exports provided: ForgotpasswordPageModule */

  /***/
  function srcAppPagesForgotpasswordForgotpasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotpasswordPageModule", function () {
      return ForgotpasswordPageModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./forgotpassword-routing.module */
    "./src/app/pages/forgotpassword/forgotpassword-routing.module.ts");
    /* harmony import */


    var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./forgotpassword.page */
    "./src/app/pages/forgotpassword/forgotpassword.page.ts");

    var ForgotpasswordPageModule = function ForgotpasswordPageModule() {
      _classCallCheck(this, ForgotpasswordPageModule);
    };

    ForgotpasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_5__["ForgotpasswordPageRoutingModule"]],
      declarations: [_forgotpassword_page__WEBPACK_IMPORTED_MODULE_6__["ForgotpasswordPage"]]
    })], ForgotpasswordPageModule);
    /***/
  },

  /***/
  "./src/app/pages/forgotpassword/forgotpassword.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/forgotpassword/forgotpassword.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesForgotpasswordForgotpasswordPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: url('photo-1499610519775-f6180db76b5a.jpeg') no-repeat 0 0/100% 100%;\n  position: relative;\n  height: auto;\n  width: 100%;\n}\n\n.item {\n  --background: rgba(238, 223, 223, 0.39);\n  --border-width: 1.5px;\n  margin-top: 5px;\n  border-radius: 40px;\n}\n\nion-icon {\n  font-size: 15px;\n  color: black;\n}\n\nsmall {\n  color: red;\n}\n\n.total {\n  padding-top: 60px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.heading {\n  margin-left: 20%;\n  margin-bottom: 50px;\n  color: black;\n  font: 1.5em sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9yZ290cGFzc3dvcmQvQzpcXFVzZXJzXFxCSVZBU1xcRGVza3RvcFxcbGF0ZXN0X0VtcGxveWVlX21hbmFnZW1lbnRcXEVtcGxveWVlX21hbmFnZW1lbnQvc3JjXFxhcHBcXHBhZ2VzXFxmb3Jnb3RwYXNzd29yZFxcZm9yZ290cGFzc3dvcmQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9mb3Jnb3RwYXNzd29yZC9mb3Jnb3RwYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxrRkFBQTtFQUVBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNERjs7QURTRztFQUNDLHVDQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0MsbUJBQUE7QUNOTDs7QURVRztFQUNDLGVBQUE7RUFDQSxZQUFBO0FDUEo7O0FEVUU7RUFDRSxVQUFBO0FDUEo7O0FEVUU7RUFDRSxpQkFBQTtFQUNDLGlCQUFBO0VBQ0Msa0JBQUE7QUNQTjs7QURTRTtFQUNFLGdCQUFBO0VBQ0MsbUJBQUE7RUFDQyxZQUFBO0VBQ0Msc0JBQUE7QUNOUCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZvcmdvdHBhc3N3b3JkL2ZvcmdvdHBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAvLyAtLWJhY2tncm91bmQ6IHVybChzcmMvYXNzZXRzL2ltZy9SZWdQYWdlLnBuZykgbm8tcmVwZWF0IHRvcCBjZW50ZXIvY292ZXIgZml4ZWQsICNmZmY7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vdGhlbWUvcGhvdG8tMTQ5OTYxMDUxOTc3NS1mNjE4MGRiNzZiNWEuanBlZykgbm8tcmVwZWF0IDAgMC8xMDAlIDEwMCUgO1xyXG5cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59ICBcclxuLy8gaW9uLXRvb2xiYXJ7XHJcbi8vICAgICAtLWJhY2tncm91bmQ6IHJnYigyMTgsIDQ1LCAxNDApO1xyXG4vLyAgIH1cclxuLy8gICBpb24tdGl0bGV7XHJcbi8vICAgICAgIC0tY29sb3JcdDp3aGl0ZTtcclxuLy8gICAgIH1cclxuICAgLml0ZW17XHJcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMjM4LCAyMjMsIDIyMywgMC4zOSk7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMS41cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuXHJcblxyXG4gICB9XHJcbiAgIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIFxyXG4gIH1cclxuICBzbWFsbHtcclxuICAgIGNvbG9yOnJlZDtcclxuICB9XHJcblxyXG4gIC50b3RhbHtcclxuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xyXG4gICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDoxMHB4O1xyXG4gIH1cclxuICAuaGVhZGluZ3tcclxuICAgIG1hcmdpbi1sZWZ0OjIwJTtcclxuICAgICBtYXJnaW4tYm90dG9tOjUwcHg7XHJcbiAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAgZm9udDogMS41ZW0gc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi90aGVtZS9waG90by0xNDk5NjEwNTE5Nzc1LWY2MTgwZGI3NmI1YS5qcGVnKSBuby1yZXBlYXQgMCAwLzEwMCUgMTAwJSA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLml0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMjM4LCAyMjMsIDIyMywgMC4zOSk7XG4gIC0tYm9yZGVyLXdpZHRoOiAxLjVweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG5zbWFsbCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi50b3RhbCB7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uaGVhZGluZyB7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udDogMS41ZW0gc2Fucy1zZXJpZjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/forgotpassword/forgotpassword.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/forgotpassword/forgotpassword.page.ts ***!
    \*************************************************************/

  /*! exports provided: ForgotpasswordPage */

  /***/
  function srcAppPagesForgotpasswordForgotpasswordPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotpasswordPage", function () {
      return ForgotpasswordPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");

    var ForgotpasswordPage = /*#__PURE__*/function () {
      function ForgotpasswordPage(alertController, storage, httpClient, router, formsBuilder) {
        _classCallCheck(this, ForgotpasswordPage);

        this.alertController = alertController;
        this.storage = storage;
        this.httpClient = httpClient;
        this.router = router;
        this.formsBuilder = formsBuilder;
        this.items = {};
        this.key = 'items';
        this.validation_messages = {
          'empId': [{
            type: 'required',
            message: 'EmpId is required.'
          }],
          'oldpassword': [{
            type: 'required',
            message: 'Password is required.'
          }],
          'password': [{
            type: 'required',
            message: 'Password is required.'
          }],
          'confirmPassword': [{
            type: 'required',
            message: 'Password is required.'
          }]
        };
        this.passwordType = "password";
        this.passwordShown = false;
        this._updatePasswordUrl = "https://emp-manage90.herokuapp.com/api/password-update";
      }

      _createClass(ForgotpasswordPage, [{
        key: "onSubmit",
        value: function onSubmit() {
          console.log(this.myForm.value);
        }
      }, {
        key: "togglePassword",
        value: function togglePassword() {
          if (this.passwordShown) {
            this.passwordShown = false;
            this.passwordType = 'password';
          } else {
            this.passwordShown = true;
            this.passwordType = 'text';
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.myForm = this.formsBuilder.group({
            empId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            oldpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
          }, {
            validators: this.Password.bind(this)
          });
          this.getData();
        }
      }, {
        key: "Password",
        value: function Password(formGroup) {
          var _formGroup$get = formGroup.get('password'),
              password = _formGroup$get.value;

          var _formGroup$get2 = formGroup.get('confirmPassword'),
              confirmPassword = _formGroup$get2.value;

          return password === confirmPassword ? null : {
            passwordNotMatch: true
          };
        }
      }, {
        key: "sendPutRequest",
        value: function sendPutRequest() {
          var _this = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]().append('Content-Type', 'application/json').append('Authorization', this.token).append('Access-Control-Allow-Headers', '*').append('Access-Control-Allow-Methods', "GET, POST, DELETE, PUT").append('Access-Control-Allow-Origin', '*');
          this.httpClient.put(this._updatePasswordUrl, JSON.stringify(this.myForm.value), {
            headers: headers
          }).subscribe(function (data) {
            console.log(data);
            _this.items = data;

            _this.storage.set(_this.key, JSON.stringify(_this.items));

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
        key: "getData",
        value: function getData() {
          var _this2 = this;

          this.storage.get(this.key).then(function (val) {
            if (val != null && val != undefined) {
              _this2.items = JSON.parse(val); //console.log(this.items.token);

              _this2.token = _this2.items.token;
            }
          });
        }
      }, {
        key: "alert",
        value: function alert() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: 'Update Password',
                      message: 'Successfully changed password.',
                      buttons: [{
                        text: 'Ok',
                        handler: function handler() {
                          _this3.router.navigate(['/login']);
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
            var _this4 = this;

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
                          _this4.router.navigate(['forgotpassword']);
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

      return ForgotpasswordPage;
    }();

    ForgotpasswordPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    ForgotpasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forgotpassword',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./forgotpassword.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgotpassword/forgotpassword.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./forgotpassword.page.scss */
      "./src/app/pages/forgotpassword/forgotpassword.page.scss"))["default"]]
    })], ForgotpasswordPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-forgotpassword-forgotpassword-module-es5.js.map