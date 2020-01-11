(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Screens-login-page-login-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/login-form/login-form.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/login-form/login-form.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-grid>\n\t<ion-row justify-content-center>\n\t\t<ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n\t\t\t<div class=\"ion-text-center\">\n\t\t\t\t<img src=\"../../../assets/icon/logo_1.png\">\n\t\t\t</div>\n\t<div class=\"validation-errors\">\n\t\t<label class=\"error-message\">{{errorMessage}}</label>\n\t  \n\t</div>\t\t\n\t<form [formGroup]=\"validation\"  (ngSubmit)=\"login(validation.value)\">\n\t\t<div class=\"ion-padding\">\n\t\t\t\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<ion-icon name=\"mail\"></ion-icon>\n\t\t\t\t  </ion-label>\n\t\t\t\t\t\t<ion-input type=\"email\" placeholder=\"Email\" formControlName=\"email\"required></ion-input>\n\t\t\t</ion-item>\n\t\t\t<div class=\"validation-errors\">\n\t\t\t\t<ng-container *ngFor=\"let val of validation_messages.email\">\n\t\t\t\t  <div class=\"error-message\" *ngIf=\"validation.get('email').hasError(val.type) && (validation.get('email').dirty || validation.get('email').touched)\">\n\t\t\t\t\t{{ val.message }}\n\t\t\t\t  </div>\n\t\t\t\t</ng-container>\n\t\t\t  </div>\n\t\n\t\t\t\t\t<ion-item>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<ion-icon name=\"lock\"></ion-icon>\n\t\t\t\t  </ion-label>\n\t\t\t\t\t\t<ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\" required></ion-input>\n\t\t\t</ion-item>\n\t\t\t<div class=\"validation-errors\">\n\t\t\t\t<ng-container *ngFor=\"let val of validation_messages.password\">\n\t\t\t\t  <div class=\"error-message\" *ngIf=\"validation.get('password').hasError(val.type) && (validation.get('password').dirty || validation.get('password').touched)\">\n\t\t\t\t\t{{ val.message }}\n\t\t\t\t  </div>\n\t\t\t\t</ng-container>\n\t\t\t  </div>\n\t\t   \n\t\t  \n\t\t  </div>\n\t\t <div  class=\"ion-text-right\">\n\t\t\t <a class=\"ion-margin-end\" href=\"home\">Create an account</a> \n\t\t </div >\n\t\t<div class=\"ion-padding\">\n\t\t\t<ion-button size=\"large\" type=\"submit\" expand=\"block\">Sign In</ion-button>\n\t\n\t\t</div>\n\t</form>\n\t\t</ion-col>\n\t</ion-row>\n</ion-grid>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Screens/login-page/login-page.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Screens/login-page/login-page.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-login-form></app-login-form>"

/***/ }),

/***/ "./src/app/Components/login-form/login-form.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/Components/login-form/login-form.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon {\n  color: #d6b0ff; }\n\nion-input {\n  --color:#462373; }\n\nion-input:hover {\n  border-bottom-color: #462373; }\n\nion-button {\n  height: 50px;\n  text-transform: none;\n  --background:#462373;\n  --background-hover:#462373; }\n\na {\n  color: #8e44ad;\n  text-decoration: none; }\n\n.validation-errors {\n  color: #ff6b6b;\n  size: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvc3JhZmF0bmFzc2kvQnVyZWF1LzNpbmcvbW9iaWxlL3RlYW1fbWFuYWdlcl9hcHAvc3JjL2FwcC9Db21wb25lbnRzL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQWEsRUFBQTs7QUFHakI7RUFDSSxlQUFRLEVBQUE7O0FBR1o7RUFDRyw0QkFBNEIsRUFBQTs7QUFJL0I7RUFDSSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLG9CQUFhO0VBQ2IsMEJBQW1CLEVBQUE7O0FBRXZCO0VBRUksY0FBYTtFQUNiLHFCQUFxQixFQUFBOztBQUV6QjtFQUNJLGNBQWE7RUFDYixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29ue1xuICAgIGNvbG9yOiNkNmIwZmY7XG4gICAgXG59XG5pb24taW5wdXR7XG4gICAgLS1jb2xvcjojNDYyMzczO1xuICAgIFxufVxuaW9uLWlucHV0OmhvdmVye1xuICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzQ2MjM3MztcbiAgICBcbn1cblxuaW9uLWJ1dHRvbntcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgLS1iYWNrZ3JvdW5kOiM0NjIzNzM7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiM0NjIzNzM7XG59XG5hXG57XG4gICAgY29sb3I6IzhlNDRhZDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4udmFsaWRhdGlvbi1lcnJvcnN7XG4gICAgY29sb3I6I2ZmNmI2YjtcbiAgICBzaXplOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Components/login-form/login-form.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Components/login-form/login-form.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Services_authentification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/authentification.service */ "./src/app/Services/authentification.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let LoginFormComponent = class LoginFormComponent {
    constructor(authService, loadingController, formBuilder, router) {
        this.authService = authService;
        this.loadingController = loadingController;
        this.formBuilder = formBuilder;
        this.router = router;
        this.errorMessage = '';
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required' },
                { type: 'pattern', message: 'Please enter a valid email' }
            ],
            'password': [
                { type: 'required', message: 'Password is required' },
                { type: 'minlength', message: 'Password must be at least 5 characters long' }
            ]
        };
    }
    ngOnInit() {
        this.validation = this.formBuilder.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
        });
    }
    login(value) {
        this.authService.loginUser(value)
            .then(res => {
            this.errorMessage = "";
            this.authService.getUser().then(re => {
                this.router.navigate(["/homes"], { state: { data: { re } } });
                //this.presentLoadingWithOptions().then(res=>{
                //})
            });
        }, err => {
            this.errorMessage = err.message;
            console.log(err);
        });
    }
    presentLoadingWithOptions() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                duration: 5000,
                message: 'Please wait...',
                translucent: true,
                showBackdrop: true,
                cssClass: 'custom-class custom-loading'
            });
            return yield loading.present();
        });
    }
};
LoginFormComponent.ctorParameters = () => [
    { type: _Services_authentification_service__WEBPACK_IMPORTED_MODULE_2__["AuthentificationService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-form',
        template: __webpack_require__(/*! raw-loader!./login-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/login-form/login-form.component.html"),
        styles: [__webpack_require__(/*! ./login-form.component.scss */ "./src/app/Components/login-form/login-form.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_authentification_service__WEBPACK_IMPORTED_MODULE_2__["AuthentificationService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], LoginFormComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-page.page */ "./src/app/Screens/login-page/login-page.page.ts");
/* harmony import */ var _Components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Components/login-form/login-form.component */ "./src/app/Components/login-form/login-form.component.ts");









const routes = [
    {
        path: '',
        component: _login_page_page__WEBPACK_IMPORTED_MODULE_6__["LoginPagePage"]
    }
];
let LoginPagePageModule = class LoginPagePageModule {
};
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginPagePage = class LoginPagePage {
    constructor() { }
    ngOnInit() {
    }
};
LoginPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-page',
        template: __webpack_require__(/*! raw-loader!./login-page.page.html */ "./node_modules/raw-loader/index.js!./src/app/Screens/login-page/login-page.page.html"),
        styles: [__webpack_require__(/*! ./login-page.page.scss */ "./src/app/Screens/login-page/login-page.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LoginPagePage);



/***/ })

}]);
//# sourceMappingURL=Screens-login-page-login-page-module-es2015.js.map