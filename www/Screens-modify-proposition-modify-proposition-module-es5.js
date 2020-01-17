(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Screens-modify-proposition-modify-proposition-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Screens/modify-proposition/modify-proposition.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Screens/modify-proposition/modify-proposition.page.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button color=\"dark\"(click)=\"back(id)\">\n        <ion-icon slot=\"icon-only\" name=\"close\" class=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form [formGroup]=\"validation\"  (ngSubmit)=\"modify(validation.value)\" >\n    <div class=\"ion-padding\">\n        <ion-item>\n           <ion-icon slot=\"start\" name=\"clipboard\"></ion-icon>\n            <ion-input type=\"text\" formControlName=\"name\" [(ngModel)]=\"proposition.name\" ></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-icon slot=\"start\" name=\"create\"></ion-icon>\n              <ion-input type=\"text\" formControlName=\"description\"  [(ngModel)]=\"proposition.description\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-icon slot=\"start\" name=\"document\"  (click)=\"selectfile()\"></ion-icon>\n            \n              \n            </ion-item>\n          <ion-item>\n              <ion-icon slot=\"start\" name=\"list-box\"></ion-icon>\n              <ion-select  formControlName=\"type\"  [(ngModel)]=\"proposition.type\" name=\"type\">\n                <ion-select-option value=\"web\">web</ion-select-option>\n                <ion-select-option value=\"mobile\">mobile</ion-select-option>\n                <ion-select-option value=\"data\">data</ion-select-option>\n\n              </ion-select>\n          </ion-item>\n         \n      </div>\n    \n    <div class=\"ion-padding\">\n      <ion-button size=\"medium\" type=\"submit\" expand=\"block\" class=\"submit\">Modify proposition</ion-button>\n  \n    </div>\n  </form>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Screens/modify-proposition/modify-proposition.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Screens/modify-proposition/modify-proposition.module.ts ***!
  \*************************************************************************/
/*! exports provided: ModifyPropositionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyPropositionPageModule", function() { return ModifyPropositionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _modify_proposition_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modify-proposition.page */ "./src/app/Screens/modify-proposition/modify-proposition.page.ts");







var routes = [
    {
        path: '',
        component: _modify_proposition_page__WEBPACK_IMPORTED_MODULE_6__["ModifyPropositionPage"]
    }
];
var ModifyPropositionPageModule = /** @class */ (function () {
    function ModifyPropositionPageModule() {
    }
    ModifyPropositionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_modify_proposition_page__WEBPACK_IMPORTED_MODULE_6__["ModifyPropositionPage"]]
        })
    ], ModifyPropositionPageModule);
    return ModifyPropositionPageModule;
}());



/***/ }),

/***/ "./src/app/Screens/modify-proposition/modify-proposition.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/Screens/modify-proposition/modify-proposition.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background:#d6b0ff; }\n\n.close {\n  color: #462373; }\n\n.submit {\n  height: 50px;\n  text-transform: none;\n  --background:#462373;\n  --background-hover:#462373; }\n\nion-item ion-icon {\n  color: #d6b0ff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvc3JhZmF0bmFzc2kvQnVyZWF1LzNpbmcvbW9iaWxlL3RlYW1fbWFuYWdlcl9hcHAvc3JjL2FwcC9TY3JlZW5zL21vZGlmeS1wcm9wb3NpdGlvbi9tb2RpZnktcHJvcG9zaXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQWEsRUFBQTs7QUFHakI7RUFDRyxjQUFhLEVBQUE7O0FBRWhCO0VBQ0ksWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixvQkFBYTtFQUNiLDBCQUFtQixFQUFBOztBQUd2QjtFQUNJLGNBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL1NjcmVlbnMvbW9kaWZ5LXByb3Bvc2l0aW9uL21vZGlmeS1wcm9wb3NpdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6I2Q2YjBmZjtcbn1cblxuLmNsb3Nle1xuICAgY29sb3I6IzQ2MjM3Mztcbn1cbi5zdWJtaXR7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIC0tYmFja2dyb3VuZDojNDYyMzczO1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjojNDYyMzczO1xuXG59XG5pb24taXRlbSBpb24taWNvbntcbiAgICBjb2xvcjojZDZiMGZmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Screens/modify-proposition/modify-proposition.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Screens/modify-proposition/modify-proposition.page.ts ***!
  \***********************************************************************/
/*! exports provided: ModifyPropositionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyPropositionPage", function() { return ModifyPropositionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/projects.service */ "./src/app/Services/projects.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Models_Proposition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Models/Proposition */ "./src/app/Models/Proposition.ts");
/* harmony import */ var _ionic_native_chooser_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/chooser/ngx */ "./node_modules/@ionic-native/chooser/ngx/index.js");







var ModifyPropositionPage = /** @class */ (function () {
    function ModifyPropositionPage(route, router, service, formBuilder, chooser) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.service = service;
        this.formBuilder = formBuilder;
        this.chooser = chooser;
        this.proposition = new _Models_Proposition__WEBPACK_IMPORTED_MODULE_5__["Proposition"];
        this.filetoupload = null;
        this.route.params.subscribe(function (params) {
            _this.id = params["id"];
        });
    }
    ModifyPropositionPage.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getPropositionDetail(this.id).subscribe(function (res) {
            _this.proposition = JSON.parse(JSON.stringify(res.payload.data()));
        });
        this.validation = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([])),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([])),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([])),
        });
    };
    ModifyPropositionPage.prototype.back = function (id) {
        var url = "/proposition-details/" + id;
        this.router.navigate([url]);
    };
    ModifyPropositionPage.prototype.modify = function (value) {
        var _this = this;
        var data = new _Models_Proposition__WEBPACK_IMPORTED_MODULE_5__["Proposition"]();
        data.description = value.description;
        data.name = value.name;
        data.type = value.type;
        var file = this.filetoupload;
        this.service.updateProposition(data, file, this.id).then(function (res) {
            console.log(res);
            _this.back(_this.id);
        });
    };
    ModifyPropositionPage.prototype.selectfile = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.chooser.getFile("application/pdf")];
                    case 1:
                        _a.filetoupload = _b.sent();
                        console.log(this.filetoupload.name);
                        return [2 /*return*/];
                }
            });
        });
    };
    ModifyPropositionPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _Services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _ionic_native_chooser_ngx__WEBPACK_IMPORTED_MODULE_6__["Chooser"] }
    ]; };
    ModifyPropositionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modify-proposition',
            template: __webpack_require__(/*! raw-loader!./modify-proposition.page.html */ "./node_modules/raw-loader/index.js!./src/app/Screens/modify-proposition/modify-proposition.page.html"),
            styles: [__webpack_require__(/*! ./modify-proposition.page.scss */ "./src/app/Screens/modify-proposition/modify-proposition.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _Services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _ionic_native_chooser_ngx__WEBPACK_IMPORTED_MODULE_6__["Chooser"]])
    ], ModifyPropositionPage);
    return ModifyPropositionPage;
}());



/***/ })

}]);
//# sourceMappingURL=Screens-modify-proposition-modify-proposition-module-es5.js.map