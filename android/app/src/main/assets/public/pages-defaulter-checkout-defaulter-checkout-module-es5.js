function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-defaulter-checkout-defaulter-checkout-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/defaulter-checkout/defaulter-checkout.page.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/defaulter-checkout/defaulter-checkout.page.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDefaulterCheckoutDefaulterCheckoutPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">Reason Box</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"myForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n    <div class=\"total\" >\r\n      <h2 class=\"heading\"  >Reason Box</h2>  \r\n\r\n    <ion-item lines=\"none\">\r\n  <ion-label position=\"floating\" required>\r\n    Please fill your reason for Checking out early.\r\n  </ion-label>\r\n  <br>\r\n  <ion-input formControlName=\"earlyOutReason\" name=\"earlyOutReason\" auto-grow ></ion-input>\r\n</ion-item>\r\n<ion-button shape=\"round\" color=\"danger\" [disabled]=\"!myForm.valid\"  (click)=\"sendPutRequest()\"  type=\"submit\" expand=\"block\">Submit</ion-button>\r\n</div>\r\n</form>\r\n</ion-content>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/pages/defaulter-checkout/defaulter-checkout-routing.module.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/defaulter-checkout/defaulter-checkout-routing.module.ts ***!
    \*******************************************************************************/

  /*! exports provided: DefaulterCheckoutPageRoutingModule */

  /***/
  function srcAppPagesDefaulterCheckoutDefaulterCheckoutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaulterCheckoutPageRoutingModule", function () {
      return DefaulterCheckoutPageRoutingModule;
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


    var _defaulter_checkout_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./defaulter-checkout.page */
    "./src/app/pages/defaulter-checkout/defaulter-checkout.page.ts");

    var routes = [{
      path: '',
      component: _defaulter_checkout_page__WEBPACK_IMPORTED_MODULE_3__["DefaulterCheckoutPage"]
    }];

    var DefaulterCheckoutPageRoutingModule = function DefaulterCheckoutPageRoutingModule() {
      _classCallCheck(this, DefaulterCheckoutPageRoutingModule);
    };

    DefaulterCheckoutPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DefaulterCheckoutPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/defaulter-checkout/defaulter-checkout.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/defaulter-checkout/defaulter-checkout.module.ts ***!
    \***********************************************************************/

  /*! exports provided: DefaulterCheckoutPageModule */

  /***/
  function srcAppPagesDefaulterCheckoutDefaulterCheckoutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaulterCheckoutPageModule", function () {
      return DefaulterCheckoutPageModule;
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


    var _defaulter_checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./defaulter-checkout-routing.module */
    "./src/app/pages/defaulter-checkout/defaulter-checkout-routing.module.ts");
    /* harmony import */


    var _defaulter_checkout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./defaulter-checkout.page */
    "./src/app/pages/defaulter-checkout/defaulter-checkout.page.ts");

    var DefaulterCheckoutPageModule = function DefaulterCheckoutPageModule() {
      _classCallCheck(this, DefaulterCheckoutPageModule);
    };

    DefaulterCheckoutPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _defaulter_checkout_routing_module__WEBPACK_IMPORTED_MODULE_5__["DefaulterCheckoutPageRoutingModule"]],
      declarations: [_defaulter_checkout_page__WEBPACK_IMPORTED_MODULE_6__["DefaulterCheckoutPage"]]
    })], DefaulterCheckoutPageModule);
    /***/
  },

  /***/
  "./src/app/pages/defaulter-checkout/defaulter-checkout.page.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/defaulter-checkout/defaulter-checkout.page.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDefaulterCheckoutDefaulterCheckoutPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: url('1599063952683.JPEG') no-repeat 0 0/100% 100%;\n  position: relative;\n  height: auto;\n  width: 100%;\n}\n\nion-item {\n  --background: rgba(245, 241, 241, 0.39);\n  --border-width: 1.5px;\n}\n\n.total {\n  padding-top: 100px;\n  margin-left: 45px;\n  margin-right: 45px;\n}\n\n.heading {\n  margin-left: 30%;\n  margin-bottom: 50px;\n  color: black;\n  font: 1.5em sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGVmYXVsdGVyLWNoZWNrb3V0L0M6XFxVc2Vyc1xcQklWQVNcXERlc2t0b3BcXGxhdGVzdF9FbXBsb3llZV9tYW5hZ2VtZW50XFxFbXBsb3llZV9tYW5hZ2VtZW50L3NyY1xcYXBwXFxwYWdlc1xcZGVmYXVsdGVyLWNoZWNrb3V0XFxkZWZhdWx0ZXItY2hlY2tvdXQucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9kZWZhdWx0ZXItY2hlY2tvdXQvZGVmYXVsdGVyLWNoZWNrb3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVFLCtEQUFBO0VBRUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0ZGOztBRElBO0VBQ0UsdUNBQUE7RUFDQSxxQkFBQTtBQ0RGOztBREdFO0VBQ0Usa0JBQUE7RUFDQyxpQkFBQTtFQUNDLGtCQUFBO0FDQU47O0FERUU7RUFDRSxnQkFBQTtFQUNDLG1CQUFBO0VBQ0MsWUFBQTtFQUNDLHNCQUFBO0FDQ1AiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kZWZhdWx0ZXItY2hlY2tvdXQvZGVmYXVsdGVyLWNoZWNrb3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgXHJcbmlvbi1jb250ZW50IHtcclxuICAvLyAtLWJhY2tncm91bmQ6IHVybChzcmMvYXNzZXRzL2ltZy9SZWdQYWdlLnBuZykgbm8tcmVwZWF0IHRvcCBjZW50ZXIvY292ZXIgZml4ZWQsICNmZmY7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vdGhlbWUvMTU5OTA2Mzk1MjY4My5KUEVHKSBuby1yZXBlYXQgMCAwLzEwMCUgMTAwJSA7XHJcblxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn0gIFxyXG5pb24taXRlbXtcclxuICAtLWJhY2tncm91bmQ6IHJnYmEoMjQ1LCAyNDEsIDI0MSwgMC4zOSk7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDEuNXB4O31cclxuXHJcbiAgLnRvdGFse1xyXG4gICAgcGFkZGluZy10b3A6IDEwMHB4O1xyXG4gICAgIG1hcmdpbi1sZWZ0OjQ1cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDo0NXB4O1xyXG4gIH1cclxuICAuaGVhZGluZ3tcclxuICAgIG1hcmdpbi1sZWZ0OjMwJTtcclxuICAgICBtYXJnaW4tYm90dG9tOjUwcHg7XHJcbiAgICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgICAgZm9udDogMS41ZW0gc2Fucy1zZXJpZjtcclxuICB9IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi90aGVtZS8xNTk5MDYzOTUyNjgzLkpQRUcpIG5vLXJlcGVhdCAwIDAvMTAwJSAxMDAlIDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSgyNDUsIDI0MSwgMjQxLCAwLjM5KTtcbiAgLS1ib3JkZXItd2lkdGg6IDEuNXB4O1xufVxuXG4udG90YWwge1xuICBwYWRkaW5nLXRvcDogMTAwcHg7XG4gIG1hcmdpbi1sZWZ0OiA0NXB4O1xuICBtYXJnaW4tcmlnaHQ6IDQ1cHg7XG59XG5cbi5oZWFkaW5nIHtcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250OiAxLjVlbSBzYW5zLXNlcmlmO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/defaulter-checkout/defaulter-checkout.page.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/pages/defaulter-checkout/defaulter-checkout.page.ts ***!
    \*********************************************************************/

  /*! exports provided: DefaulterCheckoutPage */

  /***/
  function srcAppPagesDefaulterCheckoutDefaulterCheckoutPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaulterCheckoutPage", function () {
      return DefaulterCheckoutPage;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var DefaulterCheckoutPage = /*#__PURE__*/function () {
      function DefaulterCheckoutPage(router, alertCtrl, formsBuilder, httpClient, storage) {
        _classCallCheck(this, DefaulterCheckoutPage);

        this.router = router;
        this.alertCtrl = alertCtrl;
        this.formsBuilder = formsBuilder;
        this.httpClient = httpClient;
        this.storage = storage;
        this._checkoutUrl = "https://emp-manage90.herokuapp.com/attendence/check-out"; //get items from localstorage items

        this.items = {};
        this.key = 'items'; //set checkinItems from localstorage checkinItems

        this.checkinItems = [];
        this.nextKey = 'checkinItems';
        this.d = new Date();
        this.myForm = formsBuilder.group({
          'earlyOutReason': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])]
        });
      }

      _createClass(DefaulterCheckoutPage, [{
        key: "onSubmit",
        value: function onSubmit() {
          console.log(this.myForm.value);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getData();
          this.d;
        }
      }, {
        key: "sendPutRequest",
        value: function sendPutRequest() {
          var _this = this;

          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]().append('Content-Type', 'application/json').append('Authorization', this.token).append('Access-Control-Allow-Headers', 'Content-Type').append('Access-Control-Allow-Methods', "GET, POST, DELETE, PUT").append('Access-Control-Allow-Origin', '*');
          var inputs = {
            "outTime": this.d,
            "empId": this.empId,
            "earlyOutReason": this.myForm.value.earlyOutReason
          };
          this.httpClient.put(this._checkoutUrl, inputs, {
            headers: headers
          }).subscribe(function (data) {
            console.log(data);
            _this.checkinItems = data;

            _this.storage.set(_this.nextKey, JSON.stringify(_this.checkinItems));

            if (!_this.checkinItems.error) {
              _this.router.navigate(['user-home']);
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
              _this2.items = JSON.parse(val);
              console.log(_this2.items.data.empId);
              _this2.token = _this2.items.token;
              _this2.empId = _this2.items.data.empId;
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
                    return this.alertCtrl.create({
                      header: 'successfull',
                      message: 'check out successfully',
                      buttons: [{
                        text: 'Ok',
                        handler: function handler() {
                          _this3.router.navigate(['/user-home']);
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
                    return this.alertCtrl.create({
                      header: 'Unseccessfull',
                      message: this.checkinItems.message,
                      buttons: [{
                        text: 'Ok',
                        handler: function handler() {
                          _this4.router.navigate(['/user-home']);
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

      return DefaulterCheckoutPage;
    }();

    DefaulterCheckoutPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__["Storage"]
      }];
    };

    DefaulterCheckoutPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-defaulter-checkout',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./defaulter-checkout.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/defaulter-checkout/defaulter-checkout.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./defaulter-checkout.page.scss */
      "./src/app/pages/defaulter-checkout/defaulter-checkout.page.scss"))["default"]]
    })], DefaulterCheckoutPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-defaulter-checkout-defaulter-checkout-module-es5.js.map