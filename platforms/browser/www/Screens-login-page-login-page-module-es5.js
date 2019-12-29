(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Screens-login-page-login-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Screens/login-page/login-page.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Screens/login-page/login-page.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-login-form></app-login-form>"

/***/ }),

/***/ "./src/app/Screens/login-page/login-page.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/Screens/login-page/login-page.module.ts ***!
  \*********************************************************/
/*! exports provided: LoginPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPagePageModule", function() { return LoginPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-page.page */ "./src/app/Screens/login-page/login-page.page.ts");
/* harmony import */ var _Components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Components/login-form/login-form.component */ "./src/app/Components/login-form/login-form.component.ts");









var routes = [
    {
        path: '',
        component: _login_page_page__WEBPACK_IMPORTED_MODULE_6__["LoginPagePage"]
    }
];
var LoginPagePageModule = /** @class */ (function () {
    function LoginPagePageModule() {
    }
    LoginPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page_page__WEBPACK_IMPORTED_MODULE_6__["LoginPagePage"], _Components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_7__["LoginFormComponent"]]
        })
    ], LoginPagePageModule);
    return LoginPagePageModule;
}());



/***/ }),

/***/ "./src/app/Screens/login-page/login-page.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/Screens/login-page/login-page.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1NjcmVlbnMvbG9naW4tcGFnZS9sb2dpbi1wYWdlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Screens/login-page/login-page.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/Screens/login-page/login-page.page.ts ***!
  \*******************************************************/
/*! exports provided: LoginPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPagePage", function() { return LoginPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginPagePage = /** @class */ (function () {
    function LoginPagePage() {
    }
    LoginPagePage.prototype.ngOnInit = function () {
    };
    LoginPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! raw-loader!./login-page.page.html */ "./node_modules/raw-loader/index.js!./src/app/Screens/login-page/login-page.page.html"),
            styles: [__webpack_require__(/*! ./login-page.page.scss */ "./src/app/Screens/login-page/login-page.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginPagePage);
    return LoginPagePage;
}());



/***/ })

}]);
//# sourceMappingURL=Screens-login-page-login-page-module-es5.js.map