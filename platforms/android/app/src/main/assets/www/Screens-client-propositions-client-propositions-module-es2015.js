(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Screens-client-propositions-client-propositions-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Screens/client-propositions/client-propositions.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Screens/client-propositions/client-propositions.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"title\">Project propositions</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"title\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list *ngIf=\"this.propositions.length>0\">\n      <div *ngFor=\"let d of propositions;let i = index;\">\n        <ion-badge color=\"tertiary\" slot=\"end\">{{client[i]}}</ion-badge>\n        <div  class=\"card\" (click)=\"open(d['id'])\">\n          <div class=\"project-info\" [ngStyle]=\"{'background-color':color(d['type'])}\">\n            <ion-icon [name]=\"icon(d['type'])\" class=\"icon\"></ion-icon>\n          </div>\n          <div class=\"container\">\n            <h5 ><b>{{d['name']}}</b></h5>\n             <p>{{d['description']}}</p>\n  \n          \n        </div> \n        </div>\n         \n      </div>\n    \n  </ion-list>\n  <ion-card *ngIf=\"this.propositions.length==0\"  class=\"no-project\">\n    <ion-card-content>\n      No proposition Found\n    </ion-card-content>\n</ion-card>\n\n\n\n</ion-content>"

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

module.exports = "ion-toolbar {\n  --background:#d6b0ff; }\n\n.title {\n  --color:#462373; }\n\n.no-project {\n  font-size: medium;\n  color: #462373; }\n\n.project-name {\n  font-weight: bold; }\n\n.project-description {\n  font-size: 15px;\n  color: #8395a7; }\n\n.buttons {\n  display: -webkit-box;\n  display: flex; }\n\n.accept {\n  color: #2ecc71;\n  width: 25px;\n  text-align: center;\n  font-size: 30px;\n  margin-right: 5px; }\n\n.refuse {\n  color: #e74c3c;\n  width: 25px;\n  text-align: center;\n  font-size: 30px; }\n\nion-badge {\n  margin-left: 20px; }\n\n.card {\n  box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.4);\n  border-radius: 6px;\n  margin: 0 auto;\n  margin-bottom: 10px;\n  height: 75px;\n  width: 90%;\n  display: -webkit-box;\n  display: flex; }\n\n.card .container {\n    width: 75%;\n    padding-left: 5px; }\n\n.card .container h5 {\n      color: #462373; }\n\n.card .container p {\n      color: #8395a7; }\n\n.card .project-info {\n    width: 25%;\n    text-align: center;\n    border-top-left-radius: 6px;\n    border-bottom-left-radius: 6px; }\n\n.card .project-info .icon {\n      font-size: 30px;\n      margin-top: 25%;\n      color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvc3JhZmF0bmFzc2kvQnVyZWF1LzNpbmcvbW9iaWxlL3RlYW1fbWFuYWdlcl9hcHAvc3JjL2FwcC9TY3JlZW5zL2NsaWVudC1wcm9wb3NpdGlvbnMvY2xpZW50LXByb3Bvc2l0aW9ucy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBYSxFQUFBOztBQUdqQjtFQUNJLGVBQVEsRUFBQTs7QUFFWjtFQUNJLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7O0FBRWxCO0VBQ0MsaUJBQWlCLEVBQUE7O0FBRWxCO0VBQ0ksZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFJbEI7RUFDSSxvQkFBYTtFQUFiLGFBQWEsRUFBQTs7QUFFakI7RUFDRyxjQUFjO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0csY0FBYztFQUNiLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFFSixFQUFBOztBQUVBO0VBQ0MsaUJBQWdCLEVBQUE7O0FBRWpCO0VBQ0ksNkNBQTZDO0VBQzdDLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFlBQVc7RUFDWCxVQUFVO0VBQ1Ysb0JBQWE7RUFBYixhQUFhLEVBQUE7O0FBUGpCO0lBU1EsVUFBVTtJQUNWLGlCQUFpQixFQUFBOztBQVZ6QjtNQVlZLGNBQWEsRUFBQTs7QUFaekI7TUFlWSxjQUFjLEVBQUE7O0FBZjFCO0lBNEJVLFVBQVM7SUFDVCxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLDhCQUE4QixFQUFBOztBQS9CeEM7TUF1QmMsZUFBZTtNQUNmLGVBQWU7TUFDZixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9TY3JlZW5zL2NsaWVudC1wcm9wb3NpdGlvbnMvY2xpZW50LXByb3Bvc2l0aW9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6I2Q2YjBmZjtcbn1cblxuLnRpdGxle1xuICAgIC0tY29sb3I6IzQ2MjM3Mztcbn1cbi5uby1wcm9qZWN0e1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIGNvbG9yOiAjNDYyMzczO1xufVxuLnByb2plY3QtbmFtZXtcbiBmb250LXdlaWdodDogYm9sZDtcbn1cbi5wcm9qZWN0LWRlc2NyaXB0aW9ue1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzgzOTVhNztcbiAgLy8gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuXG59XG4uYnV0dG9uc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuLmFjY2VwdHtcbiAgIGNvbG9yOiAjMmVjYzcxO1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG5cbn1cbi5yZWZ1c2V7XG4gICBjb2xvcjogI2U3NGMzYztcbiAgICB3aWR0aDogMjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOjMwcHhcblxufVxuXG5pb24tYmFkZ2V7XG4gbWFyZ2luLWxlZnQ6MjBweDtcbn1cbi5jYXJkIHtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgaGVpZ2h0Ojc1cHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICAgICAgaDV7XG4gICAgICAgICAgICBjb2xvcjojNDYyMzczO1xuICAgICAgICB9XG4gICAgICAgIHB7XG4gICAgICAgICAgICBjb2xvcjogIzgzOTVhNztcbiAgICAgICAgfVxuICAgICAgICAgICAgIFxuIFxuXG4gICAgICB9XG4gICAgICAucHJvamVjdC1pbmZve1xuICAgICAgICAgICAgLmljb257XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjUlO1xuICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2lkdGg6MjUlO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA2cHg7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNnB4O1xuXG5cbiAgICAgIH1cbiAgfSJdfQ== */"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let ClientPropositionsPage = class ClientPropositionsPage {
    constructor(service, alertController, router) {
        this.service = service;
        this.alertController = alertController;
        this.router = router;
        this.propositions = [];
        this.client = [];
    }
    ngOnInit() {
        this.service.AsyncPropositions().subscribe(data => {
            this.propositions = [];
            data.forEach(d => {
                let value = firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser;
                var obj = JSON.parse(JSON.stringify(d.payload.doc.data()));
                if (obj['state'] == "not treated") {
                    var p = {
                        "name": obj.name,
                        "description": obj.description,
                        "client": obj.client,
                        "type": obj.type,
                        "id": d.payload.doc.id
                    };
                    this.propositions.push(p);
                    this.service.getClient(p.client).then(res => {
                        this.client.push(res);
                    });
                }
            });
        });
    }
    open(id) {
        let url = "/client-prop-details/" + id;
        this.router.navigate([url]);
    }
    color(type) {
        if (type == "web") {
            return "#462373";
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
ClientPropositionsPage.ctorParameters = () => [
    { type: _Services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ClientPropositionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-client-propositions',
        template: __webpack_require__(/*! raw-loader!./client-propositions.page.html */ "./node_modules/raw-loader/index.js!./src/app/Screens/client-propositions/client-propositions.page.html"),
        styles: [__webpack_require__(/*! ./client-propositions.page.scss */ "./src/app/Screens/client-propositions/client-propositions.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
], ClientPropositionsPage);



/***/ })

}]);
//# sourceMappingURL=Screens-client-propositions-client-propositions-module-es2015.js.map