(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Screens-proposition-details-proposition-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Screens/proposition-details/proposition-details.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Screens/proposition-details/proposition-details.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"title\"></ion-back-button>\n      </ion-buttons>\n    <ion-title class=\"title\">\n      Details\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Screens/proposition-details/proposition-details.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Screens/proposition-details/proposition-details.module.ts ***!
  \***************************************************************************/
/*! exports provided: PropositionDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropositionDetailsPageModule", function() { return PropositionDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _proposition_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./proposition-details.page */ "./src/app/Screens/proposition-details/proposition-details.page.ts");







const routes = [
    {
        path: '',
        component: _proposition_details_page__WEBPACK_IMPORTED_MODULE_6__["PropositionDetailsPage"]
    }
];
let PropositionDetailsPageModule = class PropositionDetailsPageModule {
};
PropositionDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_proposition_details_page__WEBPACK_IMPORTED_MODULE_6__["PropositionDetailsPage"]]
    })
], PropositionDetailsPageModule);



/***/ }),

/***/ "./src/app/Screens/proposition-details/proposition-details.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/Screens/proposition-details/proposition-details.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background:#d6b0ff; }\n\n.title {\n  color: #462373; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvc3JhZmF0bmFzc2kvQnVyZWF1LzNpbmcvbW9iaWxlL3RlYW1fbWFuYWdlcl9hcHAvc3JjL2FwcC9TY3JlZW5zL3Byb3Bvc2l0aW9uLWRldGFpbHMvcHJvcG9zaXRpb24tZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBYSxFQUFBOztBQUdqQjtFQUNJLGNBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL1NjcmVlbnMvcHJvcG9zaXRpb24tZGV0YWlscy9wcm9wb3NpdGlvbi1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xuICAgIC0tYmFja2dyb3VuZDojZDZiMGZmO1xufVxuXG4udGl0bGV7XG4gICAgY29sb3I6IzQ2MjM3Mztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Screens/proposition-details/proposition-details.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Screens/proposition-details/proposition-details.page.ts ***!
  \*************************************************************************/
/*! exports provided: PropositionDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropositionDetailsPage", function() { return PropositionDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PropositionDetailsPage = class PropositionDetailsPage {
    constructor() { }
    ngOnInit() {
    }
};
PropositionDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-proposition-details',
        template: __webpack_require__(/*! raw-loader!./proposition-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/Screens/proposition-details/proposition-details.page.html"),
        styles: [__webpack_require__(/*! ./proposition-details.page.scss */ "./src/app/Screens/proposition-details/proposition-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PropositionDetailsPage);



/***/ })

}]);
//# sourceMappingURL=Screens-proposition-details-proposition-details-module-es2015.js.map