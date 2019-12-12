(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Screens-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/register-form/register-form.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/register-form/register-form.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-grid>\n  <ion-row justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n            <div class=\"ion-text-center\">\n                <h4>Login Form</h4>\n      </div>\n      <div class=\"validation-errors\">\n        <label class=\"error-message\">{{errorMessage}}</label>\n\n      </div>\n    <form class=\"form\" [formGroup]=\"validation\"  (ngSubmit)=\"register(validation.value)\">\n\n            <div class=\"ion-padding\">\n                <ion-item>\n          <ion-label>\n            <ion-icon name=\"contact\" > </ion-icon>\n          </ion-label>\n        <ion-input type=\"text\" placeholder=\"Username\" formControlName=\"username\" required></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let val of validation_messages.username\">\n            <div class=\"error-message\" *ngIf=\"validation.get('username').hasError(val.type) && (validation.get('username').dirty || validation.get('username').touched)\">\n              {{ val.message }}\n            </div>\n          </ng-container>\n        </div>\n        <ion-item>\n            <ion-label>\n                <ion-icon name=\"mail\"></ion-icon>\n              </ion-label>\n                    <ion-input type=\"email\" placeholder=\"Email\" formControlName=\"email\" required></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let val of validation_messages.email\">\n            <div class=\"error-message\" *ngIf=\"validation.get('email').hasError(val.type) && (validation.get('email').dirty || validation.get('email').touched)\">\n              {{ val.message }}\n            </div>\n          </ng-container>\n        </div>\n          <ion-item>\n            <ion-label>\n                <ion-icon name=\"lock\"></ion-icon>\n              </ion-label>\n                    <ion-input type=\"password\" placeholder=\"Password\"  formControlName=\"password\" required></ion-input>\n        </ion-item>\n        <div class=\"validation-errors\">\n          <ng-container *ngFor=\"let val of validation_messages.password\">\n            <div class=\"error-message\" *ngIf=\"validation.get('password').hasError(val.type) && (validation.get('password').dirty || validation.get('password').touched)\">\n              {{ val.message }}\n            </div>\n          </ng-container>\n        </div>\n        <ion-item>\n          <ion-label>\n              <ion-icon name=\"md-contacts\"></ion-icon>\n          </ion-label>\n          <ion-select placeholder=\"Role\" formControlName=\"role\" >\n            <ion-select-option value=\"manager\">Manager</ion-select-option>\n            <ion-select-option value=\"developer\">Developer</ion-select-option>\n            <ion-select-option value=\"client\">Client</ion-select-option>\n\n          </ion-select>\n      </ion-item>\n      \n      </div>\n      <div class=\"validation-errors\">\n        <ng-container *ngFor=\"let val of validation_messages.role\">\n          <div class=\"error-message\" *ngIf=\"validation.get('role').hasError(val.type) && (validation.get('role').dirty || validation.get('role').touched)\">\n            {{ val.message }}\n          </div>\n        </ng-container>\n      </div>\n     <div  class=\"ion-text-right\">\n         <a class=\"ion-margin-end\" href=\"login-page\">Already have an account</a> \n     </div >\n        <div class=\"ion-padding\">\n        <ion-button size=\"large\"  expand=\"block\" type=\"submit\">Create account</ion-button>\n\n      </div>\n    </form>\n\n        </ion-col>\n    </ion-row>\n</ion-grid>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Screens/home/home.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Screens/home/home.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<app-register-form></app-register-form>"

/***/ }),

/***/ "./src/app/Components/register-form/register-form.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/Components/register-form/register-form.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-icon {\n  color: #ff7300;\n}\n\nion-input {\n  --color:#462373;\n}\n\nion-input:hover {\n  border-bottom-color: #462373;\n}\n\nion-button {\n  height: 50px;\n  text-transform: none;\n  --background:#ff7300;\n  --background-hover:#ff7300;\n}\n\na {\n  color: #462373;\n  text-decoration: none;\n}\n\n.validation-errors {\n  color: #ff6b6b;\n  size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvc3JhZmF0bmFzc2kvQnVyZWF1LzNpbmcvbW9iaWxlL3RlYW1fbWFuYWdlcl9hcHAvc3JjL2FwcC9Db21wb25lbnRzL3JlZ2lzdGVyLWZvcm0vcmVnaXN0ZXItZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvQ29tcG9uZW50cy9yZWdpc3Rlci1mb3JtL3JlZ2lzdGVyLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxjQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0FDQUo7O0FER0E7RUFDRyw0QkFBQTtBQ0FIOztBRElBO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtBQ0RKOztBREdBO0VBRUksY0FBQTtFQUNBLHFCQUFBO0FDREo7O0FER0E7RUFDSSxjQUFBO0VBQ0EsVUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9yZWdpc3Rlci1mb3JtL3JlZ2lzdGVyLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmlvbi1pY29ue1xuICAgIGNvbG9yOiNmZjczMDA7XG4gICAgXG59XG5pb24taW5wdXR7XG4gICAgLS1jb2xvcjojNDYyMzczO1xuICAgIFxufVxuaW9uLWlucHV0OmhvdmVye1xuICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzQ2MjM3MztcbiAgICBcbn1cblxuaW9uLWJ1dHRvbntcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgLS1iYWNrZ3JvdW5kOiNmZjczMDA7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiNmZjczMDA7XG59XG5hXG57XG4gICAgY29sb3I6IzQ2MjM3MztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4udmFsaWRhdGlvbi1lcnJvcnN7XG4gICAgY29sb3I6I2ZmNmI2YjtcbiAgICBzaXplOiAxMHB4O1xufSIsImlvbi1pY29uIHtcbiAgY29sb3I6ICNmZjczMDA7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tY29sb3I6IzQ2MjM3Mztcbn1cblxuaW9uLWlucHV0OmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzQ2MjM3Mztcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogNTBweDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIC0tYmFja2dyb3VuZDojZmY3MzAwO1xuICAtLWJhY2tncm91bmQtaG92ZXI6I2ZmNzMwMDtcbn1cblxuYSB7XG4gIGNvbG9yOiAjNDYyMzczO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi52YWxpZGF0aW9uLWVycm9ycyB7XG4gIGNvbG9yOiAjZmY2YjZiO1xuICBzaXplOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Components/register-form/register-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Components/register-form/register-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: RegisterFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterFormComponent", function() { return RegisterFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_authentification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/authentification.service */ "./src/app/Services/authentification.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegisterFormComponent = /** @class */ (function () {
    function RegisterFormComponent(authService, formBuilder, router) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.errorMessage = '';
        this.validation_messages = {
            'email': [
                { type: 'required', message: 'Email is required' },
                { type: 'pattern', message: 'Please enter a valid email' }
            ],
            'username': [
                { type: 'required', message: 'Username is required' },
                { type: 'minlength', message: 'Username must be at least 5 characters long' }
            ],
            'password': [
                { type: 'required', message: 'Password is required' },
                { type: 'minlength', message: 'Password must be at least 5 characters long' }
            ],
            'role': [
                { type: 'required', message: 'role is required' },
            ]
        };
    }
    RegisterFormComponent.prototype.ngOnInit = function () {
        this.validation = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5),
            ])),
            role: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
        });
    };
    RegisterFormComponent.prototype.register = function (value) {
        this.router.navigate(["/homes"]);
        /*this.authService.registerUser(value)
         .then(res => {
          this.errorMessage = "";
          this.authService.createUser(value).then(
           output=> {
             this.router.navigate(["/homes"],{state:{data:{output}}});
    
            },
            erro=>{
              console.log(erro);
    
            }
          );
         
         }, err => {
          this.errorMessage = err.message;
    
           console.log(err);
          
         })*/
    };
    RegisterFormComponent.ctorParameters = function () { return [
        { type: _Services_authentification_service__WEBPACK_IMPORTED_MODULE_2__["AuthentificationService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    RegisterFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-form',
            template: __webpack_require__(/*! raw-loader!./register-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/register-form/register-form.component.html"),
            styles: [__webpack_require__(/*! ./register-form.component.scss */ "./src/app/Components/register-form/register-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_authentification_service__WEBPACK_IMPORTED_MODULE_2__["AuthentificationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RegisterFormComponent);
    return RegisterFormComponent;
}());



/***/ }),

/***/ "./src/app/Screens/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/Screens/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/Screens/home/home.page.ts");
/* harmony import */ var _Components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Components/register-form/register-form.component */ "./src/app/Components/register-form/register-form.component.ts");









var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"], _Components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_7__["RegisterFormComponent"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/Screens/home/home.page.scss":
/*!*********************************************!*\
  !*** ./src/app/Screens/home/home.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1NjcmVlbnMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/Screens/home/home.page.ts":
/*!*******************************************!*\
  !*** ./src/app/Screens/home/home.page.ts ***!
  \*******************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/Screens/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/Screens/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=Screens-home-home-module-es5.js.map