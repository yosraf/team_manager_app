(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Screens-modify-project-modify-project-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Screens/modify-project/modify-project.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Screens/modify-project/modify-project.page.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"dark\"(click)=\"back(id)\">\n        <ion-icon slot=\"icon-only\" name=\"close\" class=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"validation\"  (ngSubmit)=\"modify(validation.value)\" >\n    <div class=\"ion-padding\">\n        <ion-item>\n           <ion-icon slot=\"start\" name=\"clipboard\"></ion-icon>\n            <ion-input type=\"text\" formControlName=\"name\" [(ngModel)]=\"project.name\" ></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-icon slot=\"start\" name=\"create\"></ion-icon>\n              <ion-input type=\"text\" formControlName=\"description\"  [(ngModel)]=\"project.description\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-icon slot=\"start\" name=\"list-box\"></ion-icon>\n              <ion-select  formControlName=\"type\"  [(ngModel)]=\"project.type\" name=\"type\">\n                <ion-select-option value=\"web\">web</ion-select-option>\n                <ion-select-option value=\"mobile\">mobile</ion-select-option>\n                <ion-select-option value=\"data\">data</ion-select-option>\n\n              </ion-select>\n          </ion-item>\n            <ion-item>\n                <ion-icon slot=\"start\" name=\"contacts\"></ion-icon>\n                <ion-select formControlName=\"client\"   [(ngModel)]=\"owner\"  name=\"client\">\n                <ion-select-option *ngFor=\"let c of clients\" [value]=\"c.username\" >{{ c.username}}</ion-select-option>\n                </ion-select>\n            </ion-item>\n      </div>\n    \n    <div class=\"ion-padding\">\n      <ion-button size=\"medium\" type=\"submit\" expand=\"block\" class=\"submit\">Modify project</ion-button>\n  \n    </div>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Screens/modify-project/modify-project.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Screens/modify-project/modify-project.module.ts ***!
  \*****************************************************************/
/*! exports provided: ModifyProjectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyProjectPageModule", function() { return ModifyProjectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modify_project_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modify-project.page */ "./src/app/Screens/modify-project/modify-project.page.ts");








const routes = [
    {
        path: '',
        component: _modify_project_page__WEBPACK_IMPORTED_MODULE_6__["ModifyProjectPage"]
    }
];
let ModifyProjectPageModule = class ModifyProjectPageModule {
};
ModifyProjectPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_modify_project_page__WEBPACK_IMPORTED_MODULE_6__["ModifyProjectPage"]]
    })
], ModifyProjectPageModule);



/***/ }),

/***/ "./src/app/Screens/modify-project/modify-project.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/Screens/modify-project/modify-project.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background:#d6b0ff; }\n\n.close {\n  color: #462373; }\n\n.submit {\n  height: 50px;\n  text-transform: none;\n  --background:#462373;\n  --background-hover:#462373; }\n\nion-item ion-icon {\n  color: #d6b0ff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvc3JhZmF0bmFzc2kvQnVyZWF1LzNpbmcvbW9iaWxlL3RlYW1fbWFuYWdlcl9hcHAvc3JjL2FwcC9TY3JlZW5zL21vZGlmeS1wcm9qZWN0L21vZGlmeS1wcm9qZWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFhLEVBQUE7O0FBR2pCO0VBQ0csY0FBYSxFQUFBOztBQUVoQjtFQUNJLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsb0JBQWE7RUFDYiwwQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxjQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9TY3JlZW5zL21vZGlmeS1wcm9qZWN0L21vZGlmeS1wcm9qZWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xuICAgIC0tYmFja2dyb3VuZDojZDZiMGZmO1xufVxuXG4uY2xvc2V7XG4gICBjb2xvcjojNDYyMzczO1xufVxuLnN1Ym1pdHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgLS1iYWNrZ3JvdW5kOiM0NjIzNzM7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiM0NjIzNzM7XG5cbn1cbmlvbi1pdGVtIGlvbi1pY29ue1xuICAgIGNvbG9yOiNkNmIwZmY7XG59Il19 */"

/***/ }),

/***/ "./src/app/Screens/modify-project/modify-project.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/Screens/modify-project/modify-project.page.ts ***!
  \***************************************************************/
/*! exports provided: ModifyProjectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyProjectPage", function() { return ModifyProjectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Services_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/projects.service */ "./src/app/Services/projects.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _Models_Project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Models/Project */ "./src/app/Models/Project.ts");






let ModifyProjectPage = class ModifyProjectPage {
    constructor(route, router, service, formBuilder) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.formBuilder = formBuilder;
        this.project = {};
        this.owner = "";
        this.clients = [];
        this.uid = "";
        this.route.params.subscribe(params => {
            this.id = params["id"];
        });
    }
    ngOnInit() {
        this.service.getProject(this.id).then(res => {
            this.project = res;
            this.uid = this.project.client;
            console.log(this.project.client);
            this.service.getClient(this.uid).then(cl => {
                this.owner = cl;
                console.log(this.owner);
                console.log(cl);
            });
        });
        this.service.getClients().then(res => {
            res.forEach(element => {
                this.clients.push(element);
            });
        });
        this.validation = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([])),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([])),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([])),
            client: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([]))
        });
    }
    modify(value) {
        let client;
        if (value.client == undefined) {
            client = this.project.client;
        }
        else {
            this.clients.forEach(element => {
                if (element.username == value.client) {
                    client = element.uid;
                }
            });
        }
        let data = new _Models_Project__WEBPACK_IMPORTED_MODULE_5__["Project"]();
        data.name = value.name;
        data.description = value.description;
        data.client = client;
        data.manager = this.project.manager;
        data.progress = this.project.progress;
        data.type = this.project.type;
        /*let data={
          "name":value.name,
          "description":value.description,
          "client":client,
          "manager":this.project.manager,
          "progress":this.project.progress,
          "type":value.type
        }*/
        this.service.update(data, this.id).then(res => {
            this.back(this.id);
        });
    }
    back(id) {
        let url = "/task/" + id;
        this.router.navigate([url]);
    }
};
ModifyProjectPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _Services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
ModifyProjectPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modify-project',
        template: __webpack_require__(/*! raw-loader!./modify-project.page.html */ "./node_modules/raw-loader/index.js!./src/app/Screens/modify-project/modify-project.page.html"),
        styles: [__webpack_require__(/*! ./modify-project.page.scss */ "./src/app/Screens/modify-project/modify-project.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _Services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], ModifyProjectPage);



/***/ })

}]);
//# sourceMappingURL=Screens-modify-project-modify-project-module-es2015.js.map