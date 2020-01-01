(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Screens-rejected-propositions-rejected-propositions-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Screens/rejected-propositions/rejected-propositions.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Screens/rejected-propositions/rejected-propositions.page.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"title\">Rejections</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"title\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngIf=\"this.rejections.length>0\">\n\n    <div *ngFor=\"let d of rejections\">\n      <div class=\"card\">\n        <ion-item>\n          <ion-icon [name]=\"icon(d['type'])\" [ngStyle]=\"{'color':color(d['type'])}\" slot=\"start\"></ion-icon>\n          <h3 [ngStyle]=\"{'color':color(d['type'])}\" class=\"project-name\">{{d['name']}}</h3>\n          <ion-badge color=\"tertiary\" slot=\"end\">manager</ion-badge>\n\n        </ion-item>\n\n\n        <div class=\"content\">\n          <p class=\"project-description\">{{d[\"description\"]}}</p>\n\n        </div>\n\n\n      </div>\n    </div>\n  </ion-list>\n  <ion-card *ngIf=\"this.rejections.length==0\" class=\"no-project\">\n    <ion-card-content>\n      No rejection Found\n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/Screens/rejected-propositions/rejected-propositions.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/Screens/rejected-propositions/rejected-propositions.module.ts ***!
  \*******************************************************************************/
/*! exports provided: RejectedPropositionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectedPropositionsPageModule", function() { return RejectedPropositionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rejected_propositions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rejected-propositions.page */ "./src/app/Screens/rejected-propositions/rejected-propositions.page.ts");







var routes = [
    {
        path: '',
        component: _rejected_propositions_page__WEBPACK_IMPORTED_MODULE_6__["RejectedPropositionsPage"]
    }
];
var RejectedPropositionsPageModule = /** @class */ (function () {
    function RejectedPropositionsPageModule() {
    }
    RejectedPropositionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_rejected_propositions_page__WEBPACK_IMPORTED_MODULE_6__["RejectedPropositionsPage"]]
        })
    ], RejectedPropositionsPageModule);
    return RejectedPropositionsPageModule;
}());



/***/ }),

/***/ "./src/app/Screens/rejected-propositions/rejected-propositions.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/Screens/rejected-propositions/rejected-propositions.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  color: #462373; }\n\n.no-project {\n  font-size: medium;\n  color: #ff7300; }\n\n.project-name {\n  font-weight: bold; }\n\n.project-description {\n  font-size: 18px;\n  color: #8395a7;\n  margin-left: 10px; }\n\n.accept {\n  color: #2ecc71;\n  width: 50%;\n  text-align: center;\n  font-size: 35px; }\n\n.refuse {\n  color: #e74c3c;\n  width: 50%;\n  text-align: center;\n  font-size: 35px; }\n\n.card {\n  box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.4);\n  border-radius: 6px;\n  margin: 0 auto;\n  margin-bottom: 10px;\n  width: 90%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvc3JhZmF0bmFzc2kvQnVyZWF1LzNpbmcvbW9iaWxlL3RlYW1fbWFuYWdlcl9hcHAvc3JjL2FwcC9TY3JlZW5zL3JlamVjdGVkLXByb3Bvc2l0aW9ucy9yZWplY3RlZC1wcm9wb3NpdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBYSxFQUFBOztBQUVqQjtFQUNJLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7O0FBRWxCO0VBQ0MsaUJBQWlCLEVBQUE7O0FBRWxCO0VBQ0ksZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFHckI7RUFDRyxjQUFjO0VBQ2IsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBRW5CO0VBQ0csY0FBYztFQUNiLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUluQjtFQUNJLDZDQUE2QztFQUM3QyxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9TY3JlZW5zL3JlamVjdGVkLXByb3Bvc2l0aW9ucy9yZWplY3RlZC1wcm9wb3NpdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xuICAgIGNvbG9yOiM0NjIzNzM7XG59XG4ubm8tcHJvamVjdHtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICBjb2xvcjogI2ZmNzMwMDtcbn1cbi5wcm9qZWN0LW5hbWV7XG4gZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucHJvamVjdC1kZXNjcmlwdGlvbntcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6ICM4Mzk1YTc7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG5cbn1cbi5hY2NlcHR7XG4gICBjb2xvcjogIzJlY2M3MTtcbiAgICB3aWR0aDogNTAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDM1cHg7XG59XG4ucmVmdXNle1xuICAgY29sb3I6ICNlNzRjM2M7XG4gICAgd2lkdGg6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuXG59XG5cbi5jYXJke1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB3aWR0aDogOTAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Screens/rejected-propositions/rejected-propositions.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/Screens/rejected-propositions/rejected-propositions.page.ts ***!
  \*****************************************************************************/
/*! exports provided: RejectedPropositionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectedPropositionsPage", function() { return RejectedPropositionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/projects.service */ "./src/app/Services/projects.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);




var RejectedPropositionsPage = /** @class */ (function () {
    function RejectedPropositionsPage(service) {
        this.service = service;
        this.rejections = [];
    }
    RejectedPropositionsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getRejections().subscribe(function (data) {
            _this.rejections = [];
            data.forEach(function (d) {
                var value = firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser;
                var obj = JSON.parse(JSON.stringify(d.payload.doc.data()));
                if (obj['client'] == value.uid) {
                    var p = {
                        "name": obj.name,
                        "description": obj.description,
                        "client": obj.client,
                        "type": obj.type,
                        "id": d.payload.doc.id
                    };
                    _this.rejections.push(p);
                }
            });
        });
    };
    RejectedPropositionsPage.prototype.color = function (type) {
        if (type == "web") {
            return "#e67e22";
        }
        if (type == "mobile") {
            return "#a55eea";
        }
        if (type == "data") {
            return "#8e44ad";
        }
    };
    RejectedPropositionsPage.prototype.icon = function (type) {
        if (type == "web") {
            return "md-desktop";
        }
        if (type == "mobile") {
            return "md-phone-portrait";
        }
        if (type == "data") {
            return "md-analytics";
        }
    };
    RejectedPropositionsPage.ctorParameters = function () { return [
        { type: _Services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"] }
    ]; };
    RejectedPropositionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rejected-propositions',
            template: __webpack_require__(/*! raw-loader!./rejected-propositions.page.html */ "./node_modules/raw-loader/index.js!./src/app/Screens/rejected-propositions/rejected-propositions.page.html"),
            styles: [__webpack_require__(/*! ./rejected-propositions.page.scss */ "./src/app/Screens/rejected-propositions/rejected-propositions.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]])
    ], RejectedPropositionsPage);
    return RejectedPropositionsPage;
}());



/***/ })

}]);
//# sourceMappingURL=Screens-rejected-propositions-rejected-propositions-module-es5.js.map