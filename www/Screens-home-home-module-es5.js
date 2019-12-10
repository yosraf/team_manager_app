(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Screens-home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Screens/home/home.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Screens/home/home.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-register-form></app-register-form>"

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
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
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

module.exports = "ion-icon {\n  color: #ff7300;\n}\n\nion-input {\n  --color:#462373;\n}\n\nion-input:hover {\n  border-bottom-color: #462373;\n}\n\nion-button {\n  height: 50px;\n  text-transform: none;\n  --background:#ff7300;\n  --background-hover:#ff7300;\n}\n\na {\n  color: #462373;\n  text-decoration: none;\n}\n\n.validation-errors {\n  color: #ff6b6b;\n  size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvc3JhZmF0bmFzc2kvQnVyZWF1LzNpbmcvbW9iaWxlL2dlc3Rpb25fY29sbGFiL3NyYy9hcHAvU2NyZWVucy9ob21lL2hvbWUucGFnZS5zY3NzIiwic3JjL2FwcC9TY3JlZW5zL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxjQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0FDQUo7O0FER0E7RUFDRyw0QkFBQTtBQ0FIOztBRElBO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtBQ0RKOztBREdBO0VBRUksY0FBQTtFQUNBLHFCQUFBO0FDREo7O0FER0E7RUFDSSxjQUFBO0VBQ0EsVUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvU2NyZWVucy9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24taWNvbntcbiAgICBjb2xvcjojZmY3MzAwO1xuICAgIFxufVxuaW9uLWlucHV0e1xuICAgIC0tY29sb3I6IzQ2MjM3MztcbiAgICBcbn1cbmlvbi1pbnB1dDpob3ZlcntcbiAgIGJvcmRlci1ib3R0b20tY29sb3I6ICM0NjIzNzM7XG4gICAgXG59XG5cbmlvbi1idXR0b257XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIC0tYmFja2dyb3VuZDojZmY3MzAwO1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjojZmY3MzAwO1xufVxuYVxue1xuICAgIGNvbG9yOiM0NjIzNzM7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnZhbGlkYXRpb24tZXJyb3Jze1xuICAgIGNvbG9yOiNmZjZiNmI7XG4gICAgc2l6ZTogMTBweDtcbn0iLCJpb24taWNvbiB7XG4gIGNvbG9yOiAjZmY3MzAwO1xufVxuXG5pb24taW5wdXQge1xuICAtLWNvbG9yOiM0NjIzNzM7XG59XG5cbmlvbi1pbnB1dDpob3ZlciB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM0NjIzNzM7XG59XG5cbmlvbi1idXR0b24ge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAtLWJhY2tncm91bmQ6I2ZmNzMwMDtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiNmZjczMDA7XG59XG5cbmEge1xuICBjb2xvcjogIzQ2MjM3MztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udmFsaWRhdGlvbi1lcnJvcnMge1xuICBjb2xvcjogI2ZmNmI2YjtcbiAgc2l6ZTogMTBweDtcbn0iXX0= */"

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
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/Screens/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/Screens/home/home.page.scss")]
        })
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=Screens-home-home-module-es5.js.map