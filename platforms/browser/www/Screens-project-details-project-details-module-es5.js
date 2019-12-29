(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Screens-project-details-project-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Screens/project-details/project-details.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Screens/project-details/project-details.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Screens/project-details/project-details.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Screens/project-details/project-details.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProjectDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailsPageModule", function() { return ProjectDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _project_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-details.page */ "./src/app/Screens/project-details/project-details.page.ts");







var routes = [
    {
        path: '',
        component: _project_details_page__WEBPACK_IMPORTED_MODULE_6__["ProjectDetailsPage"]
    }
];
var ProjectDetailsPageModule = /** @class */ (function () {
    function ProjectDetailsPageModule() {
    }
    ProjectDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_project_details_page__WEBPACK_IMPORTED_MODULE_6__["ProjectDetailsPage"]]
        })
    ], ProjectDetailsPageModule);
    return ProjectDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/Screens/project-details/project-details.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/Screens/project-details/project-details.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-back-button {\n  color: #462373; }\n\nion-title {\n  color: #462373; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvc3JhZmF0bmFzc2kvQnVyZWF1LzNpbmcvbW9iaWxlL3RlYW1fbWFuYWdlcl9hcHAvc3JjL2FwcC9TY3JlZW5zL3Byb2plY3QtZGV0YWlscy9wcm9qZWN0LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYSxFQUFBOztBQUViO0VBQ0ksY0FBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvU2NyZWVucy9wcm9qZWN0LWRldGFpbHMvcHJvamVjdC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1iYWNrLWJ1dHRvbntcbiAgICBjb2xvcjojNDYyMzczO1xuICAgIH1cbiAgICBpb24tdGl0bGV7XG4gICAgICAgIGNvbG9yOiM0NjIzNzM7XG4gICAgXG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/Screens/project-details/project-details.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Screens/project-details/project-details.page.ts ***!
  \*****************************************************************/
/*! exports provided: ProjectDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailsPage", function() { return ProjectDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectDetailsPage = /** @class */ (function () {
    function ProjectDetailsPage() {
    }
    ProjectDetailsPage.prototype.ngOnInit = function () {
    };
    ProjectDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-details',
            template: __webpack_require__(/*! raw-loader!./project-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/Screens/project-details/project-details.page.html"),
            styles: [__webpack_require__(/*! ./project-details.page.scss */ "./src/app/Screens/project-details/project-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectDetailsPage);
    return ProjectDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=Screens-project-details-project-details-module-es5.js.map