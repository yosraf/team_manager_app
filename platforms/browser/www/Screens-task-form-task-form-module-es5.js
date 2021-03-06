(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Screens-task-form-task-form-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Screens/task-form/task-form.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Screens/task-form/task-form.page.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"end\">\n          <ion-button color=\"dark\" (click)=\"open()\">\n            <ion-icon slot=\"icon-only\" name=\"close\" class=\"close\"></ion-icon>\n          </ion-button>\n        </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <form [formGroup]=\"validation\" (ngSubmit)=\"add(validation.value)\" >\n    <div class=\"ion-padding\">\n        <ion-item>\n           <ion-icon slot=\"start\" name=\"clipboard\"></ion-icon>\n            <ion-input type=\"text\" formControlName=\"Name\" placeholder=\"Task name\" required></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-icon slot=\"start\" name=\"create\"></ion-icon>\n              <ion-input type=\"text\" placeholder=\"Task description\"  formControlName=\"Description\" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-icon slot=\"start\" name=\"clock\"></ion-icon>\n              <ion-input type=\"type\" placeholder=\"Number of hours\"  formControlName=\"Hours\" required></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-icon slot=\"start\" name=\"contacts\"></ion-icon>\n                <ion-select placeholder=\"Select a person\" formControlName=\"Person\" >\n                  <ion-select-option *ngFor=\"let t of team\" value=\"{{t['uid']}}\">{{t[\"username\"]}}</ion-select-option>\n                </ion-select>\n              </ion-item>\n      </div>\n    \n    <div class=\"ion-padding\">\n      <ion-button size=\"medium\" type=\"submit\" expand=\"block\" class=\"submit\">Create task</ion-button>\n  \n    </div>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/Screens/task-form/task-form.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/Screens/task-form/task-form.module.ts ***!
  \*******************************************************/
/*! exports provided: TaskFormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskFormPageModule", function() { return TaskFormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _task_form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task-form.page */ "./src/app/Screens/task-form/task-form.page.ts");








var routes = [
    {
        path: '',
        component: _task_form_page__WEBPACK_IMPORTED_MODULE_6__["TaskFormPage"]
    }
];
var TaskFormPageModule = /** @class */ (function () {
    function TaskFormPageModule() {
    }
    TaskFormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_task_form_page__WEBPACK_IMPORTED_MODULE_6__["TaskFormPage"]]
        })
    ], TaskFormPageModule);
    return TaskFormPageModule;
}());



/***/ }),

/***/ "./src/app/Screens/task-form/task-form.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/Screens/task-form/task-form.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".close {\n  --background:#462373; }\n\n.submit {\n  height: 50px;\n  text-transform: none;\n  --background:#462373;\n  --background-hover:#462373; }\n\nion-item ion-icon {\n  color: #d6b0ff; }\n\nion-toolbar {\n  --background:#d6b0ff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvc3JhZmF0bmFzc2kvQnVyZWF1LzNpbmcvbW9iaWxlL3RlYW1fbWFuYWdlcl9hcHAvc3JjL2FwcC9TY3JlZW5zL3Rhc2stZm9ybS90YXNrLWZvcm0ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQWEsRUFBQTs7QUFFakI7RUFDSSxZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLG9CQUFhO0VBQ2IsMEJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksY0FBYSxFQUFBOztBQUVqQjtFQUNJLG9CQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9TY3JlZW5zL3Rhc2stZm9ybS90YXNrLWZvcm0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb3Nle1xuICAgIC0tYmFja2dyb3VuZDojNDYyMzczO1xufVxuLnN1Ym1pdHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgLS1iYWNrZ3JvdW5kOiM0NjIzNzM7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiM0NjIzNzM7XG5cbn1cbmlvbi1pdGVtIGlvbi1pY29ue1xuICAgIGNvbG9yOiNkNmIwZmY7XG59XG5pb24tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6I2Q2YjBmZjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/Screens/task-form/task-form.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/Screens/task-form/task-form.page.ts ***!
  \*****************************************************/
/*! exports provided: TaskFormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskFormPage", function() { return TaskFormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_projects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/projects.service */ "./src/app/Services/projects.service.ts");





var TaskFormPage = /** @class */ (function () {
    function TaskFormPage(route, formBuilder, active, service) {
        var _this = this;
        this.route = route;
        this.formBuilder = formBuilder;
        this.active = active;
        this.service = service;
        this.active.params.subscribe(function (params) {
            _this.id = params["id"];
            console.log(params["id"]);
        });
    }
    TaskFormPage.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getDevs().then(function (res) {
            _this.team = res;
        });
        this.validation = this.formBuilder.group({
            Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ])),
            Description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
            ])),
            Person: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ])),
            Hours: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
            ]))
        });
    };
    TaskFormPage.prototype.add = function (value) {
        var url = "/task/" + this.id;
        this.service.createTask(value, this.id);
        this.route.navigate([url]);
    };
    TaskFormPage.prototype.open = function () {
        var url = "/task/" + this.id;
        this.route.navigate([url]);
    };
    TaskFormPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _Services_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"] }
    ]; };
    TaskFormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-form',
            template: __webpack_require__(/*! raw-loader!./task-form.page.html */ "./node_modules/raw-loader/index.js!./src/app/Screens/task-form/task-form.page.html"),
            styles: [__webpack_require__(/*! ./task-form.page.scss */ "./src/app/Screens/task-form/task-form.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _Services_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectsService"]])
    ], TaskFormPage);
    return TaskFormPage;
}());



/***/ })

}]);
//# sourceMappingURL=Screens-task-form-task-form-module-es5.js.map