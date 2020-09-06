function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesProfileProfilePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent no-border>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      My Profile&nbsp;</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"editcall()\">\r\n        <ion-icon name=\"create-outline\"></ion-icon>\r\n        Edit\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<div>\r\n  \r\n  <img src=\"{{image}}\" class=\"bg\">\r\n\r\n</div>\r\n<div class=\"main-cnt\">\r\n  <img src=\"{{image}}\" class=\"dp\">\r\n  <h1 class=\"heading\">{{name}}</h1>\r\n  <h3 class=\"heading\">Employee ID : {{empId}}</h3>\r\n  <ion-list no-lines>\r\n    <ion-item>\r\n      <ion-label>\r\n        Personal Email : {{email}}\r\n      </ion-label>\r\n  </ion-item>\r\n    <ion-item>\r\n      <ion-label>\r\n        Designation : {{designation}}\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n      <ion-label>\r\n        Date of Birth : {{dob}}\r\n      </ion-label>\r\n    </ion-item>\r\n    <ion-item>\r\n    <ion-label>\r\n      Reporting Manager : {{manager}}\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>\r\n      Joining Date :{{joining_date}}\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>\r\n      Hardware Allotted : {{hardware}}\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>\r\n      Address : {{address}}\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>\r\n      Mobile number : {{phone_no}}\r\n    </ion-label>\r\n  </ion-item>\r\n  <ion-item>\r\n    <ion-label>\r\n      Device Id : {{device_id}}\r\n    </ion-label>\r\n  </ion-item>\r\n  </ion-list>\r\n</div>\r\n</ion-content>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/pages/profile/profile-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/profile/profile-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: ProfilePageRoutingModule */

  /***/
  function srcAppPagesProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
      return ProfilePageRoutingModule;
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


    var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/pages/profile/profile.page.ts");

    var routes = [{
      path: '',
      component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }];

    var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
      _classCallCheck(this, ProfilePageRoutingModule);
    };

    ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProfilePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/profile/profile.module.ts ***!
    \*************************************************/

  /*! exports provided: ProfilePageModule */

  /***/
  function srcAppPagesProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
      return ProfilePageModule;
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


    var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-routing.module */
    "./src/app/pages/profile/profile-routing.module.ts");
    /* harmony import */


    var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./profile.page */
    "./src/app/pages/profile/profile.page.ts");

    var ProfilePageModule = function ProfilePageModule() {
      _classCallCheck(this, ProfilePageModule);
    };

    ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
      declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })], ProfilePageModule);
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/profile/profile.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesProfileProfilePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".android ion-toolbar, .md ion-toolbar {\n  --background: rgb(88, 27, 145);\n  --color:white;\n}\n.android ion-button, .md ion-button {\n  color: \"warning\";\n}\n.android .bg, .md .bg {\n  height: 300px;\n  background-size: cover;\n  -webkit-filter: blur(5px);\n          filter: blur(5px);\n  background-position: center center;\n}\n.android .main-cnt, .md .main-cnt {\n  width: 100%;\n  height: 700px;\n}\n.android .heading, .md .heading {\n  text-align: center;\n}\n.android .dp, .md .dp {\n  border-radius: 50%;\n  height: 100px;\n  width: 100px;\n  z-index: 10;\n  margin-top: -70px;\n  position: relative;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n  box-shadow: -6px 15px 81px 3px rgba(0, 0, 0, 0.75);\n}\n.android ion-list ion-item, .md ion-list ion-item {\n  color: #6e1077;\n  background-color: #311475;\n  border-radius: 10px;\n  margin-bottom: 10px;\n  margin-left: 4%;\n  margin-right: 4%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9DOlxcVXNlcnNcXEJJVkFTXFxEZXNrdG9wXFxsYXRlc3RfRW1wbG95ZWVfbWFuYWdlbWVudFxcRW1wbG95ZWVfbWFuYWdlbWVudC9zcmNcXGFwcFxccGFnZXNcXHByb2ZpbGVcXHByb2ZpbGUucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBRUEsOEJBQUE7RUFDQSxhQUFBO0FDREo7QURHQTtFQUNJLGdCQUFBO0FDREo7QURJSTtFQUVJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxrQ0FBQTtBQ0hSO0FES0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtBQ0hSO0FET0k7RUFDSSxrQkFBQTtBQ0xSO0FET0k7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtEQUFBO0FDTFI7QURPSTtFQUNJLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNMUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGUvcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW5kcm9pZCwubWR7XHJcbiAgICBpb24tdG9vbGJhciB7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoODgsIDI3LCAxNDUpO1xyXG4gICAgLS1jb2xvcjp3aGl0ZTtcclxufVxyXG5pb24tYnV0dG9ue1xyXG4gICAgY29sb3I6XCJ3YXJuaW5nXCI7XHJcbn1cclxuXHJcbiAgICAuYmd7XHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvZW1wY292ZXIucG5nJyk7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGZpbHRlcjogYmx1cig1cHgpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAubWFpbi1jbnR7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA3MDBweDtcclxuICAgICAgICAvLyBwYWRkaW5nOjEwcHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAuaGVhZGluZ3tcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuZHB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIG1hcmdpbi10b3A6LTcwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGxlZnQ6NTAlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDotNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogLTZweCAxNXB4IDgxcHggM3B4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICB9XHJcbiAgICBpb24tbGlzdCBpb24taXRlbXtcclxuICAgICAgICBjb2xvcjpyZ2IoMTEwLCAxNiwgMTE5KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzExNDc1O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNCU7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0JTtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbiIsIi5hbmRyb2lkIGlvbi10b29sYmFyLCAubWQgaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHJnYig4OCwgMjcsIDE0NSk7XG4gIC0tY29sb3I6d2hpdGU7XG59XG4uYW5kcm9pZCBpb24tYnV0dG9uLCAubWQgaW9uLWJ1dHRvbiB7XG4gIGNvbG9yOiBcIndhcm5pbmdcIjtcbn1cbi5hbmRyb2lkIC5iZywgLm1kIC5iZyB7XG4gIGhlaWdodDogMzAwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGZpbHRlcjogYmx1cig1cHgpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xufVxuLmFuZHJvaWQgLm1haW4tY250LCAubWQgLm1haW4tY250IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNzAwcHg7XG59XG4uYW5kcm9pZCAuaGVhZGluZywgLm1kIC5oZWFkaW5nIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFuZHJvaWQgLmRwLCAubWQgLmRwIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIHotaW5kZXg6IDEwO1xuICBtYXJnaW4tdG9wOiAtNzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1yaWdodDogLTUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGJveC1zaGFkb3c6IC02cHggMTVweCA4MXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuLmFuZHJvaWQgaW9uLWxpc3QgaW9uLWl0ZW0sIC5tZCBpb24tbGlzdCBpb24taXRlbSB7XG4gIGNvbG9yOiAjNmUxMDc3O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzExNDc1O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogNCU7XG4gIG1hcmdpbi1yaWdodDogNCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/profile/profile.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/profile/profile.page.ts ***!
    \***********************************************/

  /*! exports provided: ProfilePage */

  /***/
  function srcAppPagesProfileProfilePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
      return ProfilePage;
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


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ProfilePage = /*#__PURE__*/function () {
      //private _getUserUrl ="https://emp-manage90.herokuapp.com/api/profile/{{this.empId}}"
      function ProfilePage(alertController, storage, httpClient, router) {
        _classCallCheck(this, ProfilePage);

        this.alertController = alertController;
        this.storage = storage;
        this.httpClient = httpClient;
        this.router = router;
        this.items = {};
        this.key = 'items';
        this.Key = "t";
        this.mytoken = {};
      }

      _createClass(ProfilePage, [{
        key: "editcall",
        value: function editcall() {
          console.log("testing");
          this.router.navigate(['/profile-edit']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getToken();
          this.getData(); //this.getUser();
        }
      }, {
        key: "getData",
        value: function getData() {
          var _this = this;

          this.storage.get(this.key).then(function (val) {
            if (val != null && val != undefined) {
              _this.items = JSON.parse(val); //console.log(this.items.data.name);

              _this.name = _this.items.data.name; //this.empId =this.items.data.empId;

              _this.email = _this.items.data.email;
              _this.dob = _this.items.data.dob;
              _this.designation = _this.items.data.designation;
              _this.image = _this.items.data.profile_pic;
              _this.address = _this.items.data.address;
              _this.manager = _this.items.data.manager;
              _this.phone_no = _this.items.data.phone_no;
              _this.device_id = _this.items.data.device_id;
              _this.joining_date = _this.items.data.joining_date;
              _this.hardware = _this.items.data.hardware;
              _this.token = _this.items.token;
            }
          });
        }
      }, {
        key: "getToken",
        value: function getToken() {
          var _this2 = this;

          this.storage.get(this.Key).then(function (val) {
            if (val != null && val != undefined) {
              _this2.mytoken = JSON.parse(val);
              _this2.token = _this2.mytoken.token;
              _this2.empId = _this2.mytoken.data.empId; //console.log(this.token);
            }
          });
        }
      }]);

      return ProfilePage;
    }();

    ProfilePage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }];
    };

    ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile.page.scss */
      "./src/app/pages/profile/profile.page.scss"))["default"]]
    })], ProfilePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-profile-profile-module-es5.js.map