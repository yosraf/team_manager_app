(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Screens-modal-modal-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Screens/modal/modal.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Screens/modal/modal.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n               <ion-button type=\"button\" (click)=\"dismiss()\">\n                      <h6>Cancel</h6>\n                </ion-button>\n    </ion-buttons>\n    <ion-title >\n        <div class=\"title\" >\n           <h2>{{title}}</h2>\n        </div>\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<div *ngIf=\"this.data=='project'\">\n   <app-project-form></app-project-form>\n</div>\n<div *ngIf=\"this.data=='task'\">\n  <app-task-form></app-task-form>\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Screens/modal/modal.module.ts":
/*!***********************************************!*\
  !*** ./src/app/Screens/modal/modal.module.ts ***!
  \***********************************************/
/*! exports provided: ModalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageModule", function() { return ModalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal.page */ "./src/app/Screens/modal/modal.page.ts");







var routes = [
    {
        path: '',
        component: _modal_page__WEBPACK_IMPORTED_MODULE_6__["ModalPage"]
    }
];
var ModalPageModule = /** @class */ (function () {
    function ModalPageModule() {
    }
    ModalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_modal_page__WEBPACK_IMPORTED_MODULE_6__["ModalPage"],
            ]
        })
    ], ModalPageModule);
    return ModalPageModule;
}());



/***/ }),

/***/ "./src/app/Screens/modal/modal.page.scss":
/*!***********************************************!*\
  !*** ./src/app/Screens/modal/modal.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  color: #462373;\n}\n\nion-button {\n  color: #0984e3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvc3JhZmF0bmFzc2kvQnVyZWF1LzNpbmcvbW9iaWxlL3RlYW1fbWFuYWdlcl9hcHAvc3JjL2FwcC9TY3JlZW5zL21vZGFsL21vZGFsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvU2NyZWVucy9tb2RhbC9tb2RhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FEQ0E7RUFDSSxjQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9TY3JlZW5zL21vZGFsL21vZGFsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcbiAgICBjb2xvcjogIzQ2MjM3Mztcbn1cbmlvbi1idXR0b257XG4gICAgY29sb3I6ICMwOTg0ZTM7XG59IiwiLnRpdGxlIHtcbiAgY29sb3I6ICM0NjIzNzM7XG59XG5cbmlvbi1idXR0b24ge1xuICBjb2xvcjogIzA5ODRlMztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Screens/modal/modal.page.ts":
/*!*********************************************!*\
  !*** ./src/app/Screens/modal/modal.page.ts ***!
  \*********************************************/
/*! exports provided: ModalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPage", function() { return ModalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ModalPage = /** @class */ (function () {
    function ModalPage(modalController) {
        this.modalController = modalController;
    }
    ModalPage.prototype.ngOnInit = function () {
        if (this.data == "project") {
            this.title = "Create new project";
        }
        else {
            this.title = "Create new task";
        }
    };
    ModalPage.prototype.dismiss = function () {
        this.modalController.dismiss({
            'dismissed': true
        });
    };
    ModalPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ModalPage.prototype, "data", void 0);
    ModalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__(/*! raw-loader!./modal.page.html */ "./node_modules/raw-loader/index.js!./src/app/Screens/modal/modal.page.html"),
            styles: [__webpack_require__(/*! ./modal.page.scss */ "./src/app/Screens/modal/modal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], ModalPage);
    return ModalPage;
}());



/***/ })

}]);
//# sourceMappingURL=Screens-modal-modal-module-es5.js.map