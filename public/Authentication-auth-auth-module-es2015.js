(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Authentication-auth-auth-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Authentication/auth/auth.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Authentication/auth/auth.page.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"warning\">\n    <ion-title color=\"light\">Authentication</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-lg=\"5\" offset-lg=\"3\" size-sm=\"12\" size-md=\"6\" size-xs=\"12\">\n\n        <div>\n          <img style=\"height: 200px; display: block;\n          margin-left: auto;\n          margin-right: auto;\" src=\"../../../assets/users.png\" id=\"icon\" alt=\"User Icon\" />\n          <h1 style=\"color: white;text-align: center;\">Admin Login</h1>\n        </div>\n\n\n        <ion-card>\n          <ion-item>\n            <ion-label style=\" font-size: 20px;\">\n              <ion-icon name=\"mail\"></ion-icon>\n            </ion-label>\n            <ion-input class=\"input-field\" [(ngModel)]=\"email\" name=\"email\" type=\"email\" placeholder=\"Email\" required>\n            </ion-input>\n          </ion-item>\n\n        </ion-card>\n\n        <ion-card>\n          <ion-item>\n            <ion-label style=\"font-size: 20px;\">\n              <ion-icon name=\"key\"></ion-icon>\n            </ion-label>\n            <ion-input [(ngModel)]=\"password\" name=\"password\" type=\"password\" placeholder=\"Password\" required>\n            </ion-input>\n          </ion-item>\n        </ion-card>\n\n\n        <ion-button color=\"tertiary\" (click)=\"loginUser()\" expand=\"block\">Login</ion-button>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ }),

/***/ "./src/app/Authentication/auth/auth-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/Authentication/auth/auth-routing.module.ts ***!
  \************************************************************/
/*! exports provided: AuthPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageRoutingModule", function() { return AuthPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.page */ "./src/app/Authentication/auth/auth.page.ts");




const routes = [
    {
        path: '',
        component: _auth_page__WEBPACK_IMPORTED_MODULE_3__["AuthPage"]
    }
];
let AuthPageRoutingModule = class AuthPageRoutingModule {
};
AuthPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AuthPageRoutingModule);



/***/ }),

/***/ "./src/app/Authentication/auth/auth.module.ts":
/*!****************************************************!*\
  !*** ./src/app/Authentication/auth/auth.module.ts ***!
  \****************************************************/
/*! exports provided: AuthPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPageModule", function() { return AuthPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/Authentication/auth/auth-routing.module.ts");
/* harmony import */ var _auth_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.page */ "./src/app/Authentication/auth/auth.page.ts");







let AuthPageModule = class AuthPageModule {
};
AuthPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthPageRoutingModule"]
        ],
        declarations: [_auth_page__WEBPACK_IMPORTED_MODULE_6__["AuthPage"]]
    })
], AuthPageModule);



/***/ }),

/***/ "./src/app/Authentication/auth/auth.page.scss":
/*!****************************************************!*\
  !*** ./src/app/Authentication/auth/auth.page.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: url('grad.jpg') 0 0/100% 100% no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQXV0aGVudGljYXRpb24vYXV0aC9hdXRoLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFEQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9BdXRoZW50aWNhdGlvbi9hdXRoL2F1dGgucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvZ3JhZC5qcGcnKSAwIDAvMTAwJSAxMDAlIG5vLXJlcGVhdDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/Authentication/auth/auth.page.ts":
/*!**************************************************!*\
  !*** ./src/app/Authentication/auth/auth.page.ts ***!
  \**************************************************/
/*! exports provided: AuthPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthPage", function() { return AuthPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_Shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Shared/auth.service */ "./src/app/Shared/auth.service.ts");



let AuthPage = class AuthPage {
    constructor(authser) {
        this.authser = authser;
    }
    ngOnInit() { }
    loginUser() {
        let data = {
            email: this.email,
            password: this.password,
        };
        this.authser.login(data).subscribe((res) => {
            console.log(res);
            this.authser.validstate.next(true);
            this.authser.setToken(res.newToken);
        }, (err) => {
            console.log(err);
        });
    }
};
AuthPage.ctorParameters = () => [
    { type: src_app_Shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
AuthPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./auth.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Authentication/auth/auth.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./auth.page.scss */ "./src/app/Authentication/auth/auth.page.scss")).default]
    })
], AuthPage);



/***/ })

}]);
//# sourceMappingURL=Authentication-auth-auth-module-es2015.js.map