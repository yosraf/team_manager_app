(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Screens-chat-chat-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Screens/chat/chat.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Screens/chat/chat.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Chat</ion-title>\n    </ion-toolbar>\n      \n</ion-header>\n\n<ion-content>\n    <ion-searchbar [(ngModel)]=\"queryText\" (ionChange)=\"search()\"></ion-searchbar>\n \n     \n      <ion-list>\n          <ion-list-header class=\"title\">\n             Current users\n          </ion-list-header>\n           \n            <ion-item  *ngFor=\"let x of users\"  (click)=\"open(x['uid'])\">\n                <ion-avatar slot=\"start\">\n                    <img  *ngIf=\"x['image']!=null else notnull\" [src]=\"x['image']\">\n                    <ng-template #notnull>\n                      <img   src=\"../../../assets/icon/user.png\"  (click)=\"open(x['uid'])\">\n    \n                    </ng-template>\n                </ion-avatar>\n                <ion-label  >\n                   <h3 class=\"name\"> {{x[\"username\"]}} </h3> \n                  \n                </ion-label>\n                <ion-badge color=\"danger\" class=\"subtitle\" slot=\"end\">{{x[\"role\"]}}</ion-badge>\n              </ion-item>\n      \n        \n      </ion-list>\n      \n  \n</ion-content>\n"

/***/ }),

/***/ "./src/app/Models/User.ts":
/*!********************************!*\
  !*** ./src/app/Models/User.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/Screens/chat/chat.module.ts":
/*!*********************************************!*\
  !*** ./src/app/Screens/chat/chat.module.ts ***!
  \*********************************************/
/*! exports provided: ChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.page */ "./src/app/Screens/chat/chat.page.ts");







var routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]
    }
];
var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
    ChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]]
        })
    ], ChatPageModule);
    return ChatPageModule;
}());



/***/ }),

/***/ "./src/app/Screens/chat/chat.page.scss":
/*!*********************************************!*\
  !*** ./src/app/Screens/chat/chat.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  color: #462373;\n  font-size: 16px; }\n\nion-back-button {\n  --color:#462373; }\n\nion-toolbar {\n  --background:#d6b0ff; }\n\nion-item ion-label {\n  font-size: medium;\n  color: #462373; }\n\nion-avatar {\n  border: 2px solid #462373; }\n\n.title {\n  color: #462373;\n  font-size: 17px;\n  font-weight: bold; }\n\n.subtitle {\n  font-size: 12px; }\n\n.list-header {\n  padding-top: 0px;\n  padding-bottom: 0px; }\n\n.no-chat {\n  bottom: 3%;\n  font-size: medium;\n  color: #462373; }\n\nion-label h2 {\n  font-size: medium;\n  color: #462373;\n  font-weight: bold; }\n\nion-label p {\n  font-size: medium;\n  color: #462373;\n  font-weight: lighter; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvc3JhZmF0bmFzc2kvQnVyZWF1LzNpbmcvbW9iaWxlL3RlYW1fbWFuYWdlcl9hcHAvc3JjL2FwcC9TY3JlZW5zL2NoYXQvY2hhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDRyxjQUFhO0VBQ2IsZUFBZSxFQUFBOztBQUVuQjtFQUNFLGVBQVEsRUFBQTs7QUFHVjtFQUNFLG9CQUFhLEVBQUE7O0FBRWY7RUFFSSxpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUdsQjtFQUNFLHlCQUF5QixFQUFBOztBQUkxQjtFQUVJLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7O0FBRXRCO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsb0JBQW9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9TY3JlZW5zL2NoYXQvY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgaW9uLXRpdGxle1xuICAgIGNvbG9yOiM0NjIzNzM7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuaW9uLWJhY2stYnV0dG9ue1xuICAtLWNvbG9yOiM0NjIzNzM7XG5cbn1cbmlvbi10b29sYmFye1xuICAtLWJhY2tncm91bmQ6I2Q2YjBmZjtcbn1cbmlvbi1pdGVte1xuICBpb24tbGFiZWx7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgY29sb3I6ICM0NjIzNzM7XG4gIH1cbn1cbmlvbi1hdmF0YXJ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM0NjIzNzM7XG59XG5cbiAgXG4gLnRpdGxle1xuICAgICBcbiAgICAgY29sb3I6ICM0NjIzNzM7XG4gICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uc3VidGl0bGV7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbi5saXN0LWhlYWRlcntcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG5cbi5uby1jaGF0e1xuICAgIGJvdHRvbTogMyU7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgY29sb3I6ICM0NjIzNzM7XG59XG5pb24tbGFiZWwgaDJ7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgY29sb3I6ICM0NjIzNzM7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5pb24tbGFiZWwgcHtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICBjb2xvcjogIzQ2MjM3MztcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Screens/chat/chat.page.ts":
/*!*******************************************!*\
  !*** ./src/app/Screens/chat/chat.page.ts ***!
  \*******************************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_authentification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/authentification.service */ "./src/app/Services/authentification.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Models_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Models/User */ "./src/app/Models/User.ts");






var ChatPage = /** @class */ (function () {
    function ChatPage(service, route) {
        this.service = service;
        this.route = route;
        this.users = [];
        this.cache = [];
        this.queryText = '';
    }
    ChatPage.prototype.ngOnInit = function () {
        var _this = this;
        this.cache = [];
        var p = new _Models_User__WEBPACK_IMPORTED_MODULE_5__["User"]();
        this.service.getUsers().subscribe(function (data) {
            _this.users = [];
            data.forEach(function (d) {
                var value = firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"]().currentUser;
                var obj = JSON.parse(JSON.stringify(d.payload.doc.data()));
                if (obj['uid'] != value.uid) {
                    p = obj;
                    _this.users.push(p);
                }
                _this.cache = _this.users;
            });
        });
    };
    ChatPage.prototype.search = function () {
        var _this = this;
        var d = [];
        if (this.queryText.length != 0) {
            this.users.forEach(function (el) {
                if (el["username"].includes(_this.queryText)) {
                    d.push(el);
                }
            });
            this.users = d;
        }
        else {
            this.users = this.cache;
        }
    };
    ChatPage.prototype.open = function (id) {
        var url = "/discussion/" + id;
        this.route.navigate([url]);
    };
    ChatPage.ctorParameters = function () { return [
        { type: _Services_authentification_service__WEBPACK_IMPORTED_MODULE_2__["AuthentificationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    ChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! raw-loader!./chat.page.html */ "./node_modules/raw-loader/index.js!./src/app/Screens/chat/chat.page.html"),
            styles: [__webpack_require__(/*! ./chat.page.scss */ "./src/app/Screens/chat/chat.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_authentification_service__WEBPACK_IMPORTED_MODULE_2__["AuthentificationService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ChatPage);
    return ChatPage;
}());



/***/ })

}]);
//# sourceMappingURL=Screens-chat-chat-module-es5.js.map