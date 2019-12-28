(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Screens-project-proposition-project-proposition-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Screens/project-proposition/project-proposition.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Screens/project-proposition/project-proposition.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"end\">\n          <ion-button color=\"dark\" routerLink=\"/homes/clientProjects\" >\n            <ion-icon slot=\"icon-only\" name=\"close\" class=\"close\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]=\"validation\" (ngSubmit)=\"add(validation.value)\" >\n    <div class=\"ion-padding\">\n        <ion-item>\n           <ion-icon slot=\"start\" name=\"clipboard\"></ion-icon>\n            <ion-input type=\"text\" formControlName=\"Name\" placeholder=\"Project name\" required></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-icon slot=\"start\" name=\"create\"></ion-icon>\n              <ion-input type=\"text\" placeholder=\"Task description\"  formControlName=\"Description\" required></ion-input>\n            </ion-item>\n          \n            <ion-item>\n                <ion-icon slot=\"start\" name=\"contacts\"></ion-icon>\n                <ion-select placeholder=\"Select a person\" formControlName=\"Person\" >\n                  <ion-select-option *ngFor=\"let t of team\" value=\"{{t['name']}}\">{{t[\"name\"]}}</ion-select-option>\n                </ion-select>\n              </ion-item>\n      </div>\n    \n    <div class=\"ion-padding\">\n      <ion-button size=\"medium\" type=\"submit\" expand=\"block\" class=\"submit\">Create proposition</ion-button>\n  \n    </div>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/Screens/project-proposition/project-proposition.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Screens/project-proposition/project-proposition.module.ts ***!
  \***************************************************************************/
/*! exports provided: ProjectPropositionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPropositionPageModule", function() { return ProjectPropositionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _project_proposition_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-proposition.page */ "./src/app/Screens/project-proposition/project-proposition.page.ts");








var routes = [
    {
        path: '',
        component: _project_proposition_page__WEBPACK_IMPORTED_MODULE_6__["ProjectPropositionPage"]
    }
];
var ProjectPropositionPageModule = /** @class */ (function () {
    function ProjectPropositionPageModule() {
    }
    ProjectPropositionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_project_proposition_page__WEBPACK_IMPORTED_MODULE_6__["ProjectPropositionPage"]]
        })
    ], ProjectPropositionPageModule);
    return ProjectPropositionPageModule;
}());



/***/ }),

/***/ "./src/app/Screens/project-proposition/project-proposition.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/Screens/project-proposition/project-proposition.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".close {\n  --background:#462373; }\n\n.submit {\n  height: 50px;\n  text-transform: none;\n  --background:#ff7300;\n  --background-hover:#ff7300; }\n\nion-item ion-icon {\n  color: #ff7300; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvc3JhZmF0bmFzc2kvQnVyZWF1LzNpbmcvbW9iaWxlL3RlYW1fbWFuYWdlcl9hcHAvc3JjL2FwcC9TY3JlZW5zL3Byb2plY3QtcHJvcG9zaXRpb24vcHJvamVjdC1wcm9wb3NpdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBYSxFQUFBOztBQUVqQjtFQUNJLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsb0JBQWE7RUFDYiwwQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxjQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9TY3JlZW5zL3Byb2plY3QtcHJvcG9zaXRpb24vcHJvamVjdC1wcm9wb3NpdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2xvc2V7XG4gICAgLS1iYWNrZ3JvdW5kOiM0NjIzNzM7XG59XG4uc3VibWl0e1xuICAgIGhlaWdodDogNTBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAtLWJhY2tncm91bmQ6I2ZmNzMwMDtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6I2ZmNzMwMDtcblxufVxuaW9uLWl0ZW0gaW9uLWljb257XG4gICAgY29sb3I6I2ZmNzMwMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/Screens/project-proposition/project-proposition.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Screens/project-proposition/project-proposition.page.ts ***!
  \*************************************************************************/
/*! exports provided: ProjectPropositionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPropositionPage", function() { return ProjectPropositionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ProjectPropositionPage = /** @class */ (function () {
    function ProjectPropositionPage(route, formBuilder) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.team = [];
    }
    ProjectPropositionPage.prototype.ngOnInit = function () {
        this.team = [
            {
                "id": "123",
                "name": "yosrf"
            },
            {
                "id": "124",
                "name": "sirine"
            }
        ];
        this.validation = this.formBuilder.group({
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ])),
            Description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ])),
            Person: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]))
        });
    };
    ProjectPropositionPage.prototype.add = function (value) {
        console.log(value);
    };
    ProjectPropositionPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    ProjectPropositionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-proposition',
            template: __webpack_require__(/*! raw-loader!./project-proposition.page.html */ "./node_modules/raw-loader/index.js!./src/app/Screens/project-proposition/project-proposition.page.html"),
            styles: [__webpack_require__(/*! ./project-proposition.page.scss */ "./src/app/Screens/project-proposition/project-proposition.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ProjectPropositionPage);
    return ProjectPropositionPage;
}());



/***/ })

}]);
//# sourceMappingURL=Screens-project-proposition-project-proposition-module-es5.js.map