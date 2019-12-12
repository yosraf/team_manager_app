(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Screens-login-page-login-page-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/login-form/login-form.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/login-form/login-form.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-grid>\n\t<ion-row justify-content-center>\n\t\t<ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n\t\t\t<div class=\"ion-text-center\">\n\t\t\t\t<h4>Login Form</h4>\n\t\t\t</div>\n\t<div class=\"validation-errors\">\n\t\t<label class=\"error-message\">{{errorMessage}}</label>\n\t  \n\t</div>\t\t\n\t<form [formGroup]=\"validation\"  (ngSubmit)=\"login(validation.value)\">\n\t\t<div class=\"ion-padding\">\n\t\t\t\n\t\t\t<ion-item>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<ion-icon name=\"mail\"></ion-icon>\n\t\t\t\t  </ion-label>\n\t\t\t\t\t\t<ion-input type=\"email\" placeholder=\"Email\" formControlName=\"email\"required></ion-input>\n\t\t\t</ion-item>\n\t\t\t<div class=\"validation-errors\">\n\t\t\t\t<ng-container *ngFor=\"let val of validation_messages.email\">\n\t\t\t\t  <div class=\"error-message\" *ngIf=\"validation.get('email').hasError(val.type) && (validation.get('email').dirty || validation.get('email').touched)\">\n\t\t\t\t\t{{ val.message }}\n\t\t\t\t  </div>\n\t\t\t\t</ng-container>\n\t\t\t  </div>\n\t\n\t\t\t\t\t<ion-item>\n\t\t\t\t<ion-label>\n\t\t\t\t\t<ion-icon name=\"lock\"></ion-icon>\n\t\t\t\t  </ion-label>\n\t\t\t\t\t\t<ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\" required></ion-input>\n\t\t\t</ion-item>\n\t\t\t<div class=\"validation-errors\">\n\t\t\t\t<ng-container *ngFor=\"let val of validation_messages.password\">\n\t\t\t\t  <div class=\"error-message\" *ngIf=\"validation.get('password').hasError(val.type) && (validation.get('password').dirty || validation.get('password').touched)\">\n\t\t\t\t\t{{ val.message }}\n\t\t\t\t  </div>\n\t\t\t\t</ng-container>\n\t\t\t  </div>\n\t\t   \n\t\t  \n\t\t  </div>\n\t\t <div  class=\"ion-text-right\">\n\t\t\t <a class=\"ion-margin-end\" href=\"home\">Create an account</a> \n\t\t </div >\n\t\t<div class=\"ion-padding\">\n\t\t\t<ion-button size=\"large\" type=\"submit\" expand=\"block\">Sign In</ion-button>\n\t\n\t\t</div>\n\t</form>\n\t\t</ion-col>\n\t</ion-row>\n</ion-grid>"

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

module.exports = "ion-icon {\n  color: #ff7300;\n}\n\nion-input {\n  --color:#462373;\n}\n\nion-input:hover {\n  border-bottom-color: #462373;\n}\n\nion-button {\n  height: 50px;\n  text-transform: none;\n  --background:#ff7300;\n  --background-hover:#ff7300;\n}\n\na {\n  color: #462373;\n  text-decoration: none;\n}\n\n.validation-errors {\n  color: #ff6b6b;\n  size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvc3JhZmF0bmFzc2kvQnVyZWF1LzNpbmcvbW9iaWxlL3RlYW1fbWFuYWdlcl9hcHAvc3JjL2FwcC9Db21wb25lbnRzL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0FDQ0o7O0FERUE7RUFDRyw0QkFBQTtBQ0NIOztBREdBO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtBQ0FKOztBREVBO0VBRUksY0FBQTtFQUNBLHFCQUFBO0FDQUo7O0FERUE7RUFDSSxjQUFBO0VBQ0EsVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9sb2dpbi1mb3JtL2xvZ2luLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taWNvbntcbiAgICBjb2xvcjojZmY3MzAwO1xuICAgIFxufVxuaW9uLWlucHV0e1xuICAgIC0tY29sb3I6IzQ2MjM3MztcbiAgICBcbn1cbmlvbi1pbnB1dDpob3ZlcntcbiAgIGJvcmRlci1ib3R0b20tY29sb3I6ICM0NjIzNzM7XG4gICAgXG59XG5cbmlvbi1idXR0b257XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIC0tYmFja2dyb3VuZDojZmY3MzAwO1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjojZmY3MzAwO1xufVxuYVxue1xuICAgIGNvbG9yOiM0NjIzNzM7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnZhbGlkYXRpb24tZXJyb3Jze1xuICAgIGNvbG9yOiNmZjZiNmI7XG4gICAgc2l6ZTogMTBweDtcbn0iLCJpb24taWNvbiB7XG4gIGNvbG9yOiAjZmY3MzAwO1xufVxuXG5pb24taW5wdXQge1xuICAtLWNvbG9yOiM0NjIzNzM7XG59XG5cbmlvbi1pbnB1dDpob3ZlciB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM0NjIzNzM7XG59XG5cbmlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAtLWJhY2tncm91bmQ6I2ZmNzMwMDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiNmZjczMDA7XG59XG5cbmEge1xuICBjb2xvcjogIzQ2MjM3MztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udmFsaWRhdGlvbi1lcnJvcnMge1xuICBjb2xvcjogI2ZmNmI2YjtcbiAgc2l6ZTogMTBweDtcbn0iXX0= */"

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





let LoginFormComponent = class LoginFormComponent {
    constructor(authService, formBuilder, router) {
        this.authService = authService;
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
        this.router.navigate(["/homes"]);
        /*this.authService.loginUser(value)
        .then(res => {
         this.errorMessage = "";
         this.authService.getUser(res.user.uid).then(re=>{
          this.router.navigate(["/homes"],{state:{data:{re}}});
    
         })
        }, err => {
         this.errorMessage = err.message;
    
          console.log(err);
         
        })*/
    }
};
LoginFormComponent.ctorParameters = () => [
    { type: _Services_authentification_service__WEBPACK_IMPORTED_MODULE_2__["AuthentificationService"] },
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