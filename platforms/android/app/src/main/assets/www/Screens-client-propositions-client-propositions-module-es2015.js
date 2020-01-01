(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Screens-client-propositions-client-propositions-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Screens/client-propositions/client-propositions.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Screens/client-propositions/client-propositions.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"title\">Project propositions</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"title\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngIf=\"this.propositions.length>0\">\n\n     <div class=\"card\" *ngFor=\"let d of propositions\">\n        <ion-item>\n          <ion-icon [name]=\"icon(d['type'])\" [ngStyle]=\"{'color':color(d['type'])}\" slot=\"start\"></ion-icon>\n          <h3 [ngStyle]=\"{'color':color(d['type'])}\" class=\"project-name\">{{d['name']}}</h3>    \n          <ion-badge color=\"tertiary\" slot=\"end\">client</ion-badge>\n     \n        </ion-item>\n               \n      \n        <div class=\"content\">\n          <p class=\"project-description\">{{d[\"description\"]}}</p>\n          \n        </div>\n        <ion-item class=\"buttons\">\n          <div class=\"accept\">\n            <ion-icon name=\"md-checkmark-circle-outline\" (click)=\"accept(d)\" ></ion-icon>\n\n          </div>\n          <div class=\"refuse\">\n            <ion-icon name=\"ios-close-circle-outline\" (click)=\"refuse(d)\" ></ion-icon>\n\n          </div>\n        </ion-item>\n     \n    </div>\n  </ion-list>\n  <ion-card *ngIf=\"this.propositions.length==0\"  class=\"no-project\">\n    <ion-card-content>\n      No proposition Found\n    </ion-card-content>\n</ion-card>\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/Screens/client-propositions/client-propositions.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Screens/client-propositions/client-propositions.module.ts ***!
  \***************************************************************************/
/*! exports provided: ClientPropositionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPropositionsPageModule", function() { return ClientPropositionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _client_propositions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client-propositions.page */ "./src/app/Screens/client-propositions/client-propositions.page.ts");







const routes = [
    {
        path: '',
        component: _client_propositions_page__WEBPACK_IMPORTED_MODULE_6__["ClientPropositionsPage"]
    }
];
let ClientPropositionsPageModule = class ClientPropositionsPageModule {
};
ClientPropositionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_client_propositions_page__WEBPACK_IMPORTED_MODULE_6__["ClientPropositionsPage"]]
    })
], ClientPropositionsPageModule);



/***/ }),

/***/ "./src/app/Screens/client-propositions/client-propositions.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/Screens/client-propositions/client-propositions.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  color: #462373; }\n\n.no-project {\n  font-size: medium;\n  color: #ff7300; }\n\n.project-name {\n  font-weight: bold; }\n\n.project-description {\n  font-size: 18px;\n  color: #8395a7;\n  margin-left: 10px; }\n\n.accept {\n  color: #2ecc71;\n  width: 50%;\n  text-align: center;\n  font-size: 35px; }\n\n.refuse {\n  color: #e74c3c;\n  width: 50%;\n  text-align: center;\n  font-size: 35px; }\n\n.card {\n  box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.4);\n  border-radius: 6px;\n  margin: 0 auto;\n  margin-bottom: 10px;\n  width: 90%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvc3JhZmF0bmFzc2kvQnVyZWF1LzNpbmcvbW9iaWxlL3RlYW1fbWFuYWdlcl9hcHAvc3JjL2FwcC9TY3JlZW5zL2NsaWVudC1wcm9wb3NpdGlvbnMvY2xpZW50LXByb3Bvc2l0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhLEVBQUE7O0FBRWpCO0VBQ0ksaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFFbEI7RUFDQyxpQkFBaUIsRUFBQTs7QUFFbEI7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUdyQjtFQUNHLGNBQWM7RUFDYixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFFbkI7RUFDRyxjQUFjO0VBQ2IsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7O0FBSW5CO0VBQ0ksNkNBQTZDO0VBQzdDLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL1NjcmVlbnMvY2xpZW50LXByb3Bvc2l0aW9ucy9jbGllbnQtcHJvcG9zaXRpb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcbiAgICBjb2xvcjojNDYyMzczO1xufVxuLm5vLXByb2plY3R7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgY29sb3I6ICNmZjczMDA7XG59XG4ucHJvamVjdC1uYW1le1xuIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnByb2plY3QtZGVzY3JpcHRpb257XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiAjODM5NWE3O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuXG59XG4uYWNjZXB0e1xuICAgY29sb3I6ICMyZWNjNzE7XG4gICAgd2lkdGg6IDUwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzNXB4O1xufVxuLnJlZnVzZXtcbiAgIGNvbG9yOiAjZTc0YzNjO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcblxufVxuXG4uY2FyZHtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgd2lkdGg6IDkwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Screens/client-propositions/client-propositions.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Screens/client-propositions/client-propositions.page.ts ***!
  \*************************************************************************/
/*! exports provided: ClientPropositionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPropositionsPage", function() { return ClientPropositionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Services_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/projects.service */ "./src/app/Services/projects.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);




let ClientPropositionsPage = class ClientPropositionsPage {
    constructor(service) {
        this.service = service;
        this.propositions = [];
    }
    ngOnInit() {
        this.service.AsyncPropositions().subscribe(data => {
            this.propositions = [];
            data.forEach(d => {
                let value = firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser;
                var obj = JSON.parse(JSON.stringify(d.payload.doc.data()));
                if (obj['manager'] == value.uid) {
                    let name;
                    name = Promise.resolve(this.service.getClient(obj.client).then(res => {
                        console.log(res);
                        return res;
                    }));
                    var p = {
                        "name": obj.name,
                        "description": obj.description,
                        "client": obj.client,
                        "type": obj.type,
                        "id": d.payload.doc.id
                    };
                    this.propositions.push(p);
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
    accept(d) {
        this.service.createProject(d).then(res => {
            console.log(res);
        });
        this.service.deletePropostion(d.id).then(res => {
            console.log(res);
        });
    }
    refuse(d) {
        this.service.deletePropostion(d.id).then(res => {
            console.log(res);
        });
        this.service.declinePropositon(d).then(res => {
            console.log(res);
        });
    }
};
ClientPropositionsPage.ctorParameters = () => [
    { type: _Services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"] }
];
ClientPropositionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-client-propositions',
        template: __webpack_require__(/*! raw-loader!./client-propositions.page.html */ "./node_modules/raw-loader/index.js!./src/app/Screens/client-propositions/client-propositions.page.html"),
        styles: [__webpack_require__(/*! ./client-propositions.page.scss */ "./src/app/Screens/client-propositions/client-propositions.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"]])
], ClientPropositionsPage);



/***/ })

}]);
//# sourceMappingURL=Screens-client-propositions-client-propositions-module-es2015.js.map