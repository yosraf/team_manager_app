(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Screens-project-proposition-project-proposition-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Screens/project-proposition/project-proposition.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Screens/project-proposition/project-proposition.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"end\">\n          <ion-button color=\"dark\" routerLink=\"/homes/clientProjects\" >\n            <ion-icon slot=\"icon-only\" name=\"close\" class=\"close\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]=\"validation\" (ngSubmit)=\"add(validation.value)\" >\n    <div class=\"ion-padding\">\n        <ion-item>\n           <ion-icon slot=\"start\" name=\"clipboard\"></ion-icon>\n            <ion-input type=\"text\" formControlName=\"Name\" placeholder=\"Project name\" required></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-icon slot=\"start\" name=\"create\"></ion-icon>\n              <ion-input type=\"text\" placeholder=\"Project description\"  formControlName=\"Description\" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-icon slot=\"start\" name=\"document\"  (click)=\"selectfile()\"></ion-icon>\n              <!--<ion-input type=\"file\" placeholder=\"upload specifications\" formControlName=\"Specifications\" required></ion-input>-->\n             <!-- <div *ngIf=\"filetoupload!=null\">{{ filetoupload.name }}</div> --> \n              \n            </ion-item>\n            <ion-item>\n              <ion-icon slot=\"start\" name=\"list-box\"></ion-icon>\n              <ion-select placeholder=\"Project type\" formControlName=\"Type\">\n                <ion-select-option value=\"web\">web</ion-select-option>\n                <ion-select-option value=\"mobile\">mobile</ion-select-option>\n                <ion-select-option value=\"data\">data</ion-select-option>\n\n              </ion-select>\n          </ion-item>\n            <!--<ion-item>\n                <ion-icon slot=\"start\" name=\"contacts\"></ion-icon>\n                <ion-select placeholder=\"Select a person\" formControlName=\"Person\" >\n                  <ion-select-option *ngFor=\"let t of managers\" value=\"{{t['uid']}}\">{{t[\"username\"]}}</ion-select-option>\n                </ion-select>\n              </ion-item>-->\n      </div>\n    \n    <div class=\"ion-padding\">\n      <ion-button size=\"medium\" type=\"submit\" expand=\"block\" class=\"submit\">Create proposition</ion-button>\n  \n    </div>\n  </form>\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _project_proposition_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-proposition.page */ "./src/app/Screens/project-proposition/project-proposition.page.ts");








const routes = [
    {
        path: '',
        component: _project_proposition_page__WEBPACK_IMPORTED_MODULE_6__["ProjectPropositionPage"]
    }
];
let ProjectPropositionPageModule = class ProjectPropositionPageModule {
};
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



/***/ }),

/***/ "./src/app/Screens/project-proposition/project-proposition.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/Screens/project-proposition/project-proposition.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".close {\n  --background:#462373; }\n\n.submit {\n  height: 50px;\n  text-transform: none;\n  --background:#462373;\n  --background-hover:#462373; }\n\nion-item ion-icon {\n  color: #d6b0ff; }\n\nion-toolbar {\n  --background:#d6b0ff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvc3JhZmF0bmFzc2kvQnVyZWF1LzNpbmcvbW9iaWxlL3RlYW1fbWFuYWdlcl9hcHAvc3JjL2FwcC9TY3JlZW5zL3Byb2plY3QtcHJvcG9zaXRpb24vcHJvamVjdC1wcm9wb3NpdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBYSxFQUFBOztBQUVqQjtFQUNJLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsb0JBQWE7RUFDYiwwQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxjQUFhLEVBQUE7O0FBRWpCO0VBQ0ksb0JBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL1NjcmVlbnMvcHJvamVjdC1wcm9wb3NpdGlvbi9wcm9qZWN0LXByb3Bvc2l0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbG9zZXtcbiAgICAtLWJhY2tncm91bmQ6IzQ2MjM3Mztcbn1cbi5zdWJtaXR7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIC0tYmFja2dyb3VuZDojNDYyMzczO1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjojNDYyMzczO1xuXG59XG5pb24taXRlbSBpb24taWNvbntcbiAgICBjb2xvcjojZDZiMGZmO1xufVxuaW9uLXRvb2xiYXJ7XG4gICAgLS1iYWNrZ3JvdW5kOiNkNmIwZmY7XG59XG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Services_projects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/projects.service */ "./src/app/Services/projects.service.ts");
/* harmony import */ var _ionic_native_chooser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/chooser/ngx */ "./node_modules/@ionic-native/chooser/ngx/index.js");






let ProjectPropositionPage = class ProjectPropositionPage {
    constructor(route, formBuilder, service, chooser) {
        this.route = route;
        this.formBuilder = formBuilder;
        this.service = service;
        this.chooser = chooser;
        this.managers = [];
        this.filetoupload = null;
    }
    ngOnInit() {
        this.service.getManagers().then(res => {
            this.managers = res;
        });
        this.validation = this.formBuilder.group({
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ])),
            Description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ])),
            /*Specifications: new FormControl('', Validators.compose([
              Validators.required
            ])),*/
            Type: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]))
        });
    }
    selectfile() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.filetoupload = yield this.chooser.getFile("application/pdf");
            console.log(this.filetoupload.name);
        });
    }
    add(value) {
        this.service.createProposition(value, this.filetoupload).then(res => {
            this.route.navigate(["/homes/clientProjects"]);
        });
    }
};
ProjectPropositionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _Services_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"] },
    { type: _ionic_native_chooser_ngx__WEBPACK_IMPORTED_MODULE_5__["Chooser"] }
];
ProjectPropositionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project-proposition',
        template: __webpack_require__(/*! raw-loader!./project-proposition.page.html */ "./node_modules/raw-loader/index.js!./src/app/Screens/project-proposition/project-proposition.page.html"),
        styles: [__webpack_require__(/*! ./project-proposition.page.scss */ "./src/app/Screens/project-proposition/project-proposition.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _Services_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"], _ionic_native_chooser_ngx__WEBPACK_IMPORTED_MODULE_5__["Chooser"]])
], ProjectPropositionPage);



/***/ })

}]);
//# sourceMappingURL=Screens-project-proposition-project-proposition-module-es2015.js.map