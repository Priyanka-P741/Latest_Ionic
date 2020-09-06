(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">\r\n      Employee Management\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n\r\n<ion-content class=\"auth-form\">\r\n  <h2 class=\"heading\"  >Employee Management</h2>  \r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n        <ion-col align-self-center class=\"bottom_pos\">\r\n        <ion-button fill=\"outline\" shape=\"round\" (click)=\"navigateToRegistration()\" expand=\"block\">Register</ion-button>\r\n\r\n        <span class=\"already\"><small>New User?</small></span>\r\n\r\n        <ion-button fill=\"outline\" shape=\"round\" (click)=\"navigateToLogin()\" expand=\"block\">Sign In</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".auth-form ion-grid,\n.auth-form ion-row {\n  height: 100%;\n  justify-content: center;\n}\n\n.already {\n  display: block;\n  text-align: center;\n  padding-top: 10px;\n  padding-bottom: 5px;\n}\n\nion-content {\n  --background: url('sky.jpg') no-repeat 0 0/100% 100% , #fff;\n  --background-size: contain;\n  position: relative;\n  height: auto;\n  width: 100%;\n}\n\n.bottom_pos {\n  position: fixed;\n  left: 0;\n  bottom: 80px;\n  right: 0;\n  font: 1.2em sans-serif;\n}\n\n.heading {\n  margin-left: 15%;\n  padding-top: 160px;\n  margin-bottom: 50px;\n  color: #180852;\n  font: 1.5em sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXEJJVkFTXFxEZXNrdG9wXFxsYXRlc3RfRW1wbG95ZWVfbWFuYWdlbWVudFxcRW1wbG95ZWVfbWFuYWdlbWVudC9zcmNcXGFwcFxcaG9tZVxcaG9tZS5wYWdlLnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsWUFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRywyREFBQTtFQUNELDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FEVUE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0MsbUJBQUE7RUFDQyxjQUFBO0VBQ0Msc0JBQUE7QUNQTCIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aC1mb3JtIGlvbi1ncmlkLFxyXG4uYXV0aC1mb3JtIGlvbi1yb3cge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmFscmVhZHkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL3RoZW1lL3NreS5qcGcpIG5vLXJlcGVhdCAwIDAvMTAwJSAxMDAlICwgI2ZmZjtcclxuICAtLWJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYm90dG9tX3BvcyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiA4MHB4O1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGZvbnQ6IDEuMmVtIHNhbnMtc2VyaWY7XHJcblxyXG59XHJcblxyXG4vLyBpb24tdG9vbGJhcntcclxuLy8gLS1iYWNrZ3JvdW5kOiByZ2IoMzMsIDIxLCAxMzgpO1xyXG4vLyB9XHJcblxyXG4vLyBpb24tdGl0bGV7XHJcbi8vICAgLS1jb2xvclx0OndoaXRlO1xyXG4vLyB9XHJcbi5oZWFkaW5ne1xyXG4gIG1hcmdpbi1sZWZ0OjE1JTtcclxuICBwYWRkaW5nLXRvcDogMTYwcHg7XHJcbiAgIG1hcmdpbi1ib3R0b206NTBweDtcclxuICAgIGNvbG9yOnJnYigyNCwgOCwgODIpO1xyXG4gICAgIGZvbnQ6IDEuNWVtIHNhbnMtc2VyaWY7XHJcbn1cclxuIiwiLmF1dGgtZm9ybSBpb24tZ3JpZCxcbi5hdXRoLWZvcm0gaW9uLXJvdyB7XG4gIGhlaWdodDogMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5hbHJlYWR5IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vLi4vdGhlbWUvc2t5LmpwZykgbm8tcmVwZWF0IDAgMC8xMDAlIDEwMCUgLCAjZmZmO1xuICAtLWJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYm90dG9tX3BvcyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiA4MHB4O1xuICByaWdodDogMDtcbiAgZm9udDogMS4yZW0gc2Fucy1zZXJpZjtcbn1cblxuLmhlYWRpbmcge1xuICBtYXJnaW4tbGVmdDogMTUlO1xuICBwYWRkaW5nLXRvcDogMTYwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGNvbG9yOiAjMTgwODUyO1xuICBmb250OiAxLjVlbSBzYW5zLXNlcmlmO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");




let HomePage = class HomePage {
    constructor(router, storage) {
        this.router = router;
        this.storage = storage;
    }
    ngOnInit() {
        this.resetLocalStorage();
    }
    navigateToLogin() {
        this.router.navigate(['/login']);
    }
    navigateToRegistration() {
        this.router.navigate(['/register']);
    }
    resetLocalStorage() {
        this.storage.clear();
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")).default]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map