function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"warning\" defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title >Log In</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content padding>\r\n  <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button color=\"light\" defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    \r\n    <div style=\"padding-top: 70px; margin-left:10px; margin-right:10px;\">\r\n      \r\n      <h2 style=\"margin-left:40%; margin-bottom:40px; color:white; font: 2em sans-serif;;\" >LOGIN</h2>  \r\n    \r\n\r\n      <ion-item class=\"item\"  lines=\"none\">\r\n      <ion-icon class=\"custom-icon\" name=\"mail-sharp\"></ion-icon>&nbsp;\r\n      <!-- <ion-label position=\"inline\">Employee ID</ion-label> -->\r\n      <ion-input placeholder=\"Employee ID\" autocomplete=\"off\" formControlName=\"empId\" type=\"text\"></ion-input>\r\n      <ng-container *ngFor=\"let validation of validation_messages.empId\">\r\n        <div *ngIf=\"myForm.get('empId').hasError(validation.type) && myForm.get('empId').touched\">\r\n          <small>**{{validation.message}}</small>\r\n        </div>\r\n      </ng-container>\r\n    </ion-item>   \r\n    \r\n    <ion-item class=\"item\" lines=\"none\" >\r\n      <ion-icon class=\"custom-icon\" name=\"key-sharp\"></ion-icon>&nbsp;\r\n      <!-- <ion-label position=\"inline\">Password</ion-label> -->\r\n      <ion-input placeholder=\"password\" autocomplete=\"off\" formControlName=\"password\" type=\"password\"></ion-input>\r\n      <ng-container *ngFor=\"let validation of validation_messages.password\">\r\n        <div *ngIf=\"myForm.get('password').hasError(validation.type) && myForm.get('password').touched\">\r\n          <small>**{{validation.message}}</small>\r\n        </div>\r\n      </ng-container>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"item\" lines=\"none\">\r\n      <ion-icon class=\"custom-icon\" name=\"desktop-sharp\"></ion-icon>&nbsp;\r\n      <!-- <ion-label position=\"inline\">Device Id</ion-label> -->\r\n      <ion-input [(ngModel)]=\"device_id\" autocomplete=\"off\" type=\"text\"  formControlName=\"device_id\" ></ion-input>\r\n      <ng-container *ngFor=\"let validation of validation_messages.device_id\">\r\n        <div *ngIf=\"myForm.get('device_id').hasError(validation.type) && myForm.get('device_id').touched\">\r\n          <small class=\"text-danger\">**{{validation.message}}</small>\r\n        </div>\r\n</ng-container>\r\n    </ion-item>\r\n\r\n</div>\r\n      <ion-button style=\"margin-left:50%;\" color=\"transparent\" size=\"small\" [routerLink]=\"['/forgotpassword']\">forgot password?</ion-button>\r\n         \r\n    <ion-row style=\"padding-top:40px;\"> \r\n      <ion-col></ion-col>     \r\n      <ion-col>\r\n        <ion-button shape=\"round\" color=\"success\" (click)=\"sendPostRequest()\" [disabled]=\"!myForm.valid\" type=\"submit\">Sign In</ion-button>\r\n        <!-- <ion-button fill=\"outline\" shape=\"round\" color=\"warning\" [routerLink]=\"['/forgotpassword']\"  expand=\"block\">Forgot Password?</ion-button>\r\n        <ion-button fill=\"outline\" shape=\"round\" color=\"success\" [routerLink]=\"['/register']\" expand=\"block\">Create Account?</ion-button> -->\r\n      </ion-col>\r\n      <ion-col></ion-col>\r\n    </ion-row>\r\n </form>\r\n \r\n<p style=\"margin-top:100px; margin-left:20%;\">Don't have an account? \r\n  <ion-button color=\"transparent\" size=\"small\" [routerLink]=\"['/register']\">Sign Up</ion-button>\r\n</p>\r\n</ion-content>\r\n";
    /***/
  },

  /***/
  "./src/app/pages/login/login-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/login/login-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/pages/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_6__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_7__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: url('1599121471486.JPEG') no-repeat 0 0/100% 100%;\n  position: relative;\n  height: auto;\n  width: 100%;\n}\n\n.item {\n  color: whitesmoke;\n  border-radius: 50px;\n  --border-width: 2px;\n  --background: rgba(194, 158, 116, 0.459);\n  margin-top: 5px;\n}\n\n.custom-icon {\n  font-size: 15px;\n  color: whitesmoke;\n}\n\nsmall {\n  color: red;\n}\n\nion-input.placeholder {\n  --color:rgb(250, 244, 244);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vQzpcXFVzZXJzXFxCSVZBU1xcRGVza3RvcFxcbGF0ZXN0X0VtcGxveWVlX21hbmFnZW1lbnRcXEVtcGxveWVlX21hbmFnZW1lbnQvc3JjXFxhcHBcXHBhZ2VzXFxsb2dpblxcbG9naW4ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi9sb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSwrREFBQTtFQUVBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNESjs7QURJQTtFQUNFLGlCQUFBO0VBR0EsbUJBQUE7RUFFQSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0YsZUFBQTtBQ0pBOztBRFNBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDTko7O0FEa0JBO0VBQ0UsVUFBQTtBQ2ZGOztBRG9CQTtFQUNJLDBCQUFBO0FDakJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLy8gLS1iYWNrZ3JvdW5kOiB1cmwoc3JjL2Fzc2V0cy9pbWcvUmVnUGFnZS5wbmcpIG5vLXJlcGVhdCB0b3AgY2VudGVyL2NvdmVyIGZpeGVkLCAjZmZmO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vdGhlbWUvMTU5OTEyMTQ3MTQ4Ni5KUEVHKSBuby1yZXBlYXQgMCAwLzEwMCUgMTAwJSA7XHJcbiAgLy8gIC0tYmctY29sb3I6cmdiKDIwOSwgODEsIDgxKTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLy8gZmlsdGVyOiBibHVyKDVweCk7XHJcbn1cclxuLml0ZW0ge1xyXG4gIGNvbG9yOndoaXRlc21va2U7XHJcbiAgLy8gYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNDAlO1xyXG4gIC8vIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAvLyAtLWJvcmRlci1jb2xvcjogcmdiKDI0NSwgMTkwLCA3MSk7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDJweDtcclxuICAtLWJhY2tncm91bmQ6IHJnYmEoMTk0LCAxNTgsIDExNiwgMC40NTkpO1xyXG5tYXJnaW4tdG9wOiA1cHg7XHJcblxyXG59XHJcblxyXG5cclxuLmN1c3RvbS1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgXHJcbiAgfVxyXG4gIFxyXG4vLyAuYm90dG9tX3BvcyB7XHJcbi8vICAgcG9zaXRpb246IGZpeGVkO1xyXG4vLyAgIGxlZnQ6IDA7XHJcbi8vICAgYm90dG9tOiAzMHB4O1xyXG4vLyAgIHJpZ2h0OiAwO1xyXG4vLyB9XHJcbiAgICBcclxuXHJcbnNtYWxse1xyXG4gIGNvbG9yOnJlZDtcclxuICBcclxufVxyXG4gIFxyXG5cclxuaW9uLWlucHV0LnBsYWNlaG9sZGVye1xyXG4gICAgLS1jb2xvclx0OnJnYigyNTAsIDI0NCwgMjQ0KTtcclxuICB9XHJcbiAgIiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi90aGVtZS8xNTk5MTIxNDcxNDg2LkpQRUcpIG5vLXJlcGVhdCAwIDAvMTAwJSAxMDAlIDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaXRlbSB7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAtLWJvcmRlci13aWR0aDogMnB4O1xuICAtLWJhY2tncm91bmQ6IHJnYmEoMTk0LCAxNTgsIDExNiwgMC40NTkpO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG5cbi5jdXN0b20taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG5cbnNtYWxsIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuaW9uLWlucHV0LnBsYWNlaG9sZGVyIHtcbiAgLS1jb2xvcjpyZ2IoMjUwLCAyNDQsIDI0NCk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/login/login.page.ts ***!
    \*******************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/__ivy_ngcc__/ngx/index.js");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(router, alertController, device, storage, httpClient, formsBuilder) {
        _classCallCheck(this, LoginPage);

        this.router = router;
        this.alertController = alertController;
        this.device = device;
        this.storage = storage;
        this.httpClient = httpClient;
        this.formsBuilder = formsBuilder;
        this.device_id = this.device.uuid;
        this.items = [];
        this.key = 'items';
        this.Key = "t";
        this.mytoken = [];
        this.d = new Date();
        this.h = this.d.getHours();
        this.m = this.d.getMinutes();
        this.t = "" + this.h + this.m;
        this.time = Number(this.t);
        this._loginUrl = "https://emp-manage90.herokuapp.com/api/login";
        this.validation_messages = {
          'empId': [{
            type: 'required',
            message: 'EmpId is required.'
          }],
          'password': [{
            type: 'required',
            message: 'Password is required.'
          }],
          'device_id': [{
            type: 'required',
            message: 'device_id is required.'
          }]
        };
        this.myForm = formsBuilder.group({
          empId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
          device_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
      }

      _createClass(LoginPage, [{
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
        key: "sendPostRequest",
        value: function sendPostRequest() {
          var _this = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().append('Content-Type', 'application/json').append('Access-Control-Allow-Headers', 'Content-Type').append('Access-Control-Allow-Methods', "GET, POST, DELETE, PUT").append('Access-Control-Allow-Origin', '*');
          this.httpClient.post(this._loginUrl, JSON.stringify(this.myForm.value), {
            headers: headers
          }).subscribe(function (data) {
            console.log(data);
            _this.items = data;
            _this.mytoken = data;

            _this.storage.set(_this.key, JSON.stringify(_this.items));

            _this.storage.set(_this.Key, JSON.stringify(_this.mytoken));

            if (!_this.items.error) {
              _this.alertSuccess();
            } else {
              _this.alert();
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
                      header: 'Unseccessfull Login',
                      message: this.items.message,
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
        key: "alertSuccess",
        value: function alertSuccess() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: 'Seccessfull Login',
                      message: 'User Login Successfully',
                      buttons: [{
                        text: 'Ok',
                        handler: function handler() {
                          if (_this3.items.data.isnewUser) {
                            _this3.router.navigate(['forgotpassword']);
                          } else {
                            _this3.router.navigate(['user-home']);
                          }
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

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }, {
        type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_7__["Device"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/pages/login/login.page.scss"))["default"]]
    })], LoginPage); // sendPostRequest() {
    //   console.log(this.myForm.value.empId);
    //   this.loginService.loginPost(
    //     this.myForm.value.empId,
    //     this.myForm.value.password,
    //     this.myForm.value.device_id
    //     ).subscribe(data => {
    //       console.log(data);
    //       this.items = data;
    //       this.mytoken = data;
    //       this.storage.set(this.key,JSON.stringify(this.items));
    //       this.storage.set(this.Key,JSON.stringify(this.mytoken));
    //       if(!this.items.error){
    //         this.alertSuccess();
    //       }else{
    //         this.alert();
    //       }
    //      }, error => {
    //       console.log(error);
    //     });
    // }

    /***/
  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map