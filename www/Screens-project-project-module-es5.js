(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Screens-project-project-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Screens/project/project.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Screens/project/project.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"end\">\n          <ion-button color=\"dark\" routerLink=\"/homes/projects\">\n            <ion-icon slot=\"icon-only\" name=\"close\" class=\"close\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <form [formGroup]=\"validation\" (ngSubmit)=\"add(validation.value)\" >\n        <div class=\"ion-padding\">\n            <ion-item>\n               <ion-icon slot=\"start\" name=\"clipboard\"></ion-icon>\n                <ion-input type=\"text\" formControlName=\"name\" placeholder=\"Project name\" required></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-icon slot=\"start\" name=\"create\"></ion-icon>\n                  <ion-input type=\"text\" placeholder=\"Project description\"  formControlName=\"description\" required></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-icon slot=\"start\" name=\"list-box\"></ion-icon>\n                    <ion-select placeholder=\"Project type\" formControlName=\"type\">\n                      <ion-select-option value=\"web\">web</ion-select-option>\n                      <ion-select-option value=\"mobile\">mobile</ion-select-option>\n                      <ion-select-option value=\"data\">data</ion-select-option>\n\n                    </ion-select>\n                </ion-item>\n                <ion-item>\n                  <ion-icon name=\"cash\" slot=\"start\"></ion-icon>\n                  <ion-input type=\"number\" placeholder=\"cost of the project\"  formControlName=\"cost\" required></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-icon slot=\"start\" name=\"contact\"></ion-icon>\n                  <ion-select placeholder=\"Select a client\" formControlName=\"client\" >\n                    <ion-select-option *ngFor=\"let c of clients\" value=\"{{c['uid']}}\">{{c[\"username\"]}}</ion-select-option>\n                  </ion-select>\n                </ion-item>\n          </div>\n        \n        <div class=\"ion-padding\">\n          <ion-button size=\"medium\" type=\"submit\" expand=\"block\" class=\"submit\">Create project</ion-button>\n      \n        </div>\n      </form>\n\n</ion-content>\n"

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
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
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

module.exports = ".close {\n  color: #462373; }\n\n.submit {\n  height: 50px;\n  text-transform: none;\n  --background:#462373;\n  --background-hover:#462373; }\n\nion-item ion-icon {\n  color: #d6b0ff; }\n\nion-toolbar {\n  --background:#d6b0ff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvc3JhZmF0bmFzc2kvQnVyZWF1LzNpbmcvbW9iaWxlL3RlYW1fbWFuYWdlcl9hcHAvc3JjL2FwcC9TY3JlZW5zL3Byb2plY3QvcHJvamVjdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhLEVBQUE7O0FBRWpCO0VBQ0ksWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixvQkFBYTtFQUNiLDBCQUFtQixFQUFBOztBQUd2QjtFQUNJLGNBQWEsRUFBQTs7QUFFakI7RUFDSSxvQkFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvU2NyZWVucy9wcm9qZWN0L3Byb2plY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb3Nle1xuICAgIGNvbG9yOiM0NjIzNzM7XG59XG4uc3VibWl0e1xuICAgIGhlaWdodDogNTBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAtLWJhY2tncm91bmQ6IzQ2MjM3MztcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IzQ2MjM3MztcblxufVxuaW9uLWl0ZW0gaW9uLWljb257XG4gICAgY29sb3I6I2Q2YjBmZjtcbn1cbmlvbi10b29sYmFye1xuICAgIC0tYmFja2dyb3VuZDojZDZiMGZmO1xufVxuIl19 */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Services_projects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/projects.service */ "./src/app/Services/projects.service.ts");





var ProjectPage = /** @class */ (function () {
    function ProjectPage(route, formBuilder, service) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.service = service;
        this.clients = [];
    }
    ProjectPage.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getClients().then(function (res) {
            _this.clients = res;
        });
        console.log(this.clients);
        this.validation = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ])),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ])),
            cost: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            ])),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
            client: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
            ])),
        });
    };
    ProjectPage.prototype.add = function (value) {
        var _this = this;
        this.service.createProject(value).then(function (res) {
            if (res) {
                console.log(res);
                _this.route.navigate(["/homes/projects"]);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ProjectPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _Services_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"] }
    ]; };
    ProjectPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! raw-loader!./project.page.html */ "./node_modules/raw-loader/index.js!./src/app/Screens/project/project.page.html"),
            styles: [__webpack_require__(/*! ./project.page.scss */ "./src/app/Screens/project/project.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _Services_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"]])
    ], ProjectPage);
    return ProjectPage;
}());



/***/ })

}]);
//# sourceMappingURL=Screens-project-project-module-es5.js.map