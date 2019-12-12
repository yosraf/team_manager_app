(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Screens-project-project-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Screens/project/project.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Screens/project/project.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"end\">\n          <ion-button color=\"dark\" routerLink=\"/homes/projects\">\n            <ion-icon slot=\"icon-only\" name=\"close\" class=\"close\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <form >\n        <div class=\"ion-padding\">\n            <ion-item>\n               <ion-icon slot=\"start\" name=\"clipboard\"></ion-icon>\n                <ion-input type=\"text\" placeholder=\"Project name\" required></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-icon slot=\"start\" name=\"create\"></ion-icon>\n                  <ion-input type=\"text\" placeholder=\"Project description\" required></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-icon slot=\"start\" name=\"list-box\"></ion-icon>\n                    <ion-select placeholder=\"Project type\">\n                      <ion-select-option value=\"web\">web</ion-select-option>\n                      <ion-select-option value=\"mobile\">mobile</ion-select-option>\n                      <ion-select-option value=\"data\">data</ion-select-option>\n\n                    </ion-select>\n                  </ion-item>\n                <ion-item>\n                    <ion-icon slot=\"start\" name=\"contacts\"></ion-icon>\n                    <ion-select placeholder=\"Select a team\">\n                      <ion-select-option value=\"f\">Female</ion-select-option>\n                      <ion-select-option value=\"m\">Male</ion-select-option>\n                    </ion-select>\n                  </ion-item>\n          </div>\n        \n        <div class=\"ion-padding\">\n          <ion-button size=\"medium\" type=\"submit\" expand=\"block\" class=\"submit\">Create project</ion-button>\n      \n        </div>\n      </form>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Screens/project/project.module.ts":
/*!***************************************************!*\
  !*** ./src/app/Screens/project/project.module.ts ***!
  \***************************************************/
/*! exports provided: ProjectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPageModule", function() { return ProjectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _project_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project.page */ "./src/app/Screens/project/project.page.ts");







var routes = [
    {
        path: '',
        component: _project_page__WEBPACK_IMPORTED_MODULE_6__["ProjectPage"]
    }
];
var ProjectPageModule = /** @class */ (function () {
    function ProjectPageModule() {
    }
    ProjectPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_project_page__WEBPACK_IMPORTED_MODULE_6__["ProjectPage"]]
        })
    ], ProjectPageModule);
    return ProjectPageModule;
}());



/***/ }),

/***/ "./src/app/Screens/project/project.page.scss":
/*!***************************************************!*\
  !*** ./src/app/Screens/project/project.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".close {\n  --background:#462373;\n}\n\n.submit {\n  height: 50px;\n  text-transform: none;\n  --background:#ff7300;\n  --background-hover:#ff7300;\n}\n\nion-item ion-icon {\n  color: #ff7300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvc3JhZmF0bmFzc2kvQnVyZWF1LzNpbmcvbW9iaWxlL3RlYW1fbWFuYWdlcl9hcHAvc3JjL2FwcC9TY3JlZW5zL3Byb2plY3QvcHJvamVjdC5wYWdlLnNjc3MiLCJzcmMvYXBwL1NjcmVlbnMvcHJvamVjdC9wcm9qZWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0FDRUo7O0FEQ0E7RUFDSSxjQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9TY3JlZW5zL3Byb2plY3QvcHJvamVjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xvc2V7XG4gICAgLS1iYWNrZ3JvdW5kOiM0NjIzNzM7XG59XG4uc3VibWl0e1xuICAgIGhlaWdodDogNTBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAtLWJhY2tncm91bmQ6I2ZmNzMwMDtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6I2ZmNzMwMDtcblxufVxuaW9uLWl0ZW0gaW9uLWljb257XG4gICAgY29sb3I6I2ZmNzMwMDtcbn1cbiIsIi5jbG9zZSB7XG4gIC0tYmFja2dyb3VuZDojNDYyMzczO1xufVxuXG4uc3VibWl0IHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgLS1iYWNrZ3JvdW5kOiNmZjczMDA7XG4gIC0tYmFja2dyb3VuZC1ob3ZlcjojZmY3MzAwO1xufVxuXG5pb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjZmY3MzAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Screens/project/project.page.ts":
/*!*************************************************!*\
  !*** ./src/app/Screens/project/project.page.ts ***!
  \*************************************************/
/*! exports provided: ProjectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPage", function() { return ProjectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectPage = /** @class */ (function () {
    function ProjectPage() {
    }
    ProjectPage.prototype.ngOnInit = function () {
    };
    ProjectPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! raw-loader!./project.page.html */ "./node_modules/raw-loader/index.js!./src/app/Screens/project/project.page.html"),
            styles: [__webpack_require__(/*! ./project.page.scss */ "./src/app/Screens/project/project.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectPage);
    return ProjectPage;
}());



/***/ })

}]);
//# sourceMappingURL=Screens-project-project-module-es5.js.map