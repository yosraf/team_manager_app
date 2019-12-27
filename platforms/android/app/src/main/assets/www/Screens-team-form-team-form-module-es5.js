(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Screens-team-form-team-form-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Screens/team-form/team-form.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Screens/team-form/team-form.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"end\">\n          <ion-button color=\"dark\" routerLink=\"/homes/teams\">\n            <ion-icon slot=\"icon-only\" name=\"close\" class=\"close\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  \n</ion-content>"

/***/ }),

/***/ "./src/app/Screens/team-form/team-form.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/Screens/team-form/team-form.module.ts ***!
  \*******************************************************/
/*! exports provided: TeamFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamFormPageModule", function() { return TeamFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _team_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./team-form.page */ "./src/app/Screens/team-form/team-form.page.ts");







var routes = [
    {
        path: '',
        component: _team_form_page__WEBPACK_IMPORTED_MODULE_6__["TeamFormPage"]
    }
];
var TeamFormPageModule = /** @class */ (function () {
    function TeamFormPageModule() {
    }
    TeamFormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_team_form_page__WEBPACK_IMPORTED_MODULE_6__["TeamFormPage"]]
        })
    ], TeamFormPageModule);
    return TeamFormPageModule;
}());



/***/ }),

/***/ "./src/app/Screens/team-form/team-form.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/Screens/team-form/team-form.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1NjcmVlbnMvdGVhbS1mb3JtL3RlYW0tZm9ybS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/Screens/team-form/team-form.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/Screens/team-form/team-form.page.ts ***!
  \*****************************************************/
/*! exports provided: TeamFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamFormPage", function() { return TeamFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TeamFormPage = /** @class */ (function () {
    function TeamFormPage() {
    }
    TeamFormPage.prototype.ngOnInit = function () {
    };
    TeamFormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-team-form',
            template: __webpack_require__(/*! raw-loader!./team-form.page.html */ "./node_modules/raw-loader/index.js!./src/app/Screens/team-form/team-form.page.html"),
            styles: [__webpack_require__(/*! ./team-form.page.scss */ "./src/app/Screens/team-form/team-form.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TeamFormPage);
    return TeamFormPage;
}());



/***/ })

}]);
//# sourceMappingURL=Screens-team-form-team-form-module-es5.js.map