(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Screens-rejected-propositions-rejected-propositions-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Screens/rejected-propositions/rejected-propositions.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Screens/rejected-propositions/rejected-propositions.page.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"title\">Rejections</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"title\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngIf=\"this.rejections.length>0\">\n\n    <div *ngFor=\"let d of rejections ; let i = index;\">\n     \n        <ion-item>\n          <ion-icon [name]=\"icon(d['type'])\" [ngStyle]=\"{'color':color(d['type'])}\" slot=\"start\"></ion-icon>\n          <ion-badge color=\"tertiary\" slot=\"end\">{{managers[i]}}</ion-badge>\n\n         <ion-label>\n           <h5 [ngStyle]=\"{'color':color(d['type'])}\" class=\"project-name\"><b>{{d['name']}}</b></h5>\n           <p class=\"project-description\">{{d['description']}}</p>\n          \n         </ion-label>\n        </ion-item>\n      \n\n    </div>\n  </ion-list>\n  <ion-card *ngIf=\"this.rejections.length==0\" class=\"no-project\">\n    <ion-card-content>\n      No rejection Found\n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _rejected_propositions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rejected-propositions.page */ "./src/app/Screens/rejected-propositions/rejected-propositions.page.ts");







const routes = [
    {
        path: '',
        component: _rejected_propositions_page__WEBPACK_IMPORTED_MODULE_6__["RejectedPropositionsPage"]
    }
];
let RejectedPropositionsPageModule = class RejectedPropositionsPageModule {
};
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



/***/ }),

/***/ "./src/app/Screens/rejected-propositions/rejected-propositions.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/Screens/rejected-propositions/rejected-propositions.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background:#d6b0ff; }\n\n.title {\n  --color:#462373; }\n\n.no-project {\n  font-size: medium;\n  color: #462373; }\n\n.project-name {\n  font-weight: bold; }\n\n.project-description {\n  font-size: 15px;\n  color: #8395a7;\n  margin-left: 10px; }\n\n.buttons {\n  display: -webkit-box;\n  display: flex; }\n\n.card {\n  box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.4);\n  border-radius: 6px;\n  margin: 0 auto;\n  margin-bottom: 10px;\n  width: 90%; }\n\nion-badge {\n  margin-left: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvc3JhZmF0bmFzc2kvQnVyZWF1LzNpbmcvbW9iaWxlL3RlYW1fbWFuYWdlcl9hcHAvc3JjL2FwcC9TY3JlZW5zL3JlamVjdGVkLXByb3Bvc2l0aW9ucy9yZWplY3RlZC1wcm9wb3NpdGlvbnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQWEsRUFBQTs7QUFHakI7RUFDSSxlQUFRLEVBQUE7O0FBRVo7RUFDSSxpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUVsQjtFQUNDLGlCQUFpQixFQUFBOztBQUVsQjtFQUNJLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksb0JBQWE7RUFBYixhQUFhLEVBQUE7O0FBS2pCO0VBQ0ksNkNBQTZDO0VBQzdDLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFVBQVUsRUFBQTs7QUFFZDtFQUNJLGlCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvU2NyZWVucy9yZWplY3RlZC1wcm9wb3NpdGlvbnMvcmVqZWN0ZWQtcHJvcG9zaXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xuICAgIC0tYmFja2dyb3VuZDojZDZiMGZmO1xufVxuXG4udGl0bGV7XG4gICAgLS1jb2xvcjojNDYyMzczO1xufVxuLm5vLXByb2plY3R7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgY29sb3I6ICM0NjIzNzM7XG59XG4ucHJvamVjdC1uYW1le1xuIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnByb2plY3QtZGVzY3JpcHRpb257XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjODM5NWE3O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuXG59XG4uYnV0dG9uc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG5cblxuLmNhcmR7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHdpZHRoOiA5MCU7XG59XG5pb24tYmFkZ2V7XG4gICAgbWFyZ2luLWxlZnQ6MTBweDtcbiAgIH0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Services_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/projects.service */ "./src/app/Services/projects.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);




let RejectedPropositionsPage = class RejectedPropositionsPage {
    constructor(service) {
        this.service = service;
        this.rejections = [];
        this.managers = [];
    }
    ngOnInit() {
        this.service.getRejections().subscribe(data => {
            this.rejections = [];
            data.forEach(d => {
                let value = firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser;
                var obj = JSON.parse(JSON.stringify(d.payload.doc.data()));
                if (obj['client'] == value.uid) {
                    var p = {
                        "name": obj.name,
                        "description": obj.description,
                        "client": obj.client,
                        "type": obj.type,
                        "id": d.payload.doc.id,
                        "manager": obj.manager
                    };
                    this.rejections.push(p);
                    this.service.getClient(p.manager).then(res => {
                        this.managers.push(res);
                    });
                }
            });
        });
    }
    color(type) {
        if (type == "web") {
            return "#e67e22";
        }
        if (type == "mobile") {
            return "#a55eea";
        }
        if (type == "data") {
            return "#8e44ad";
        }
    }
    icon(type) {
        if (type == "web") {
            return "md-desktop";
        }
        if (type == "mobile") {
            return "md-phone-portrait";
        }
        if (type == "data") {
            return "md-analytics";
        }
    }
};
RejectedPropositionsPage.ctorParameters = () => [
    { type: _Services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"] }
];
RejectedPropositionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rejected-propositions',
        template: __webpack_require__(/*! raw-loader!./rejected-propositions.page.html */ "./node_modules/raw-loader/index.js!./src/app/Screens/rejected-propositions/rejected-propositions.page.html"),
        styles: [__webpack_require__(/*! ./rejected-propositions.page.scss */ "./src/app/Screens/rejected-propositions/rejected-propositions.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]])
], RejectedPropositionsPage);



/***/ })

}]);
//# sourceMappingURL=Screens-rejected-propositions-rejected-propositions-module-es2015.js.map