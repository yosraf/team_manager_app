(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Screens-chat-chat-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Screens/chat/chat.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Screens/chat/chat.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Discussions</ion-title>\n    </ion-toolbar>\n      \n</ion-header>\n\n<ion-content>\n    <ion-searchbar [(ngModel)]=\"queryText\" (ionChange)=\"search()\"></ion-searchbar>\n    <ion-list class=\"list-header\">\n        <ion-list-header class=\"title\">\n            Contacts\n        </ion-list-header>\n        </ion-list>\n    <div class=\"thumnails\">\n        <div class=\"list-thumbnail\">\n          <div class=\"list\" *ngFor=\"let x of data\">\n              <div class=\"img-thumb\" >\n                  <img [src]=\"x['img']\">\n      \n              </div>\n              <ion-label class=\"name\" >{{x[\"name\"]}}</ion-label>\n\n          </div>\n\n        </div>\n\n    </div>\n     \n      <ion-list>\n          <ion-list-header class=\"title\">\n              Last discussions\n          </ion-list-header>\n          <ion-card *ngIf=\"this.discussions.length==0 ; else notempty;\" class=\"no-chat\">\n              <ion-card-content>\n                  No discussion Found\n               </ion-card-content>\n          </ion-card>\n          <ng-template #notempty>\n                  <ion-item *ngFor=\"let x of discussions\">\n                      <ion-avatar slot=\"start\">\n                          <img [src]=\"x['img']\">\n                      </ion-avatar>\n                      <ion-label>\n                        <h2>{{x[\"name\"]}}</h2>\n                        <p>{{x[\"chat\"]}}</p>\n                      </ion-label>\n                  </ion-item>\n          </ng-template>\n      </ion-list>\n      \n  \n</ion-content>\n"

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

module.exports = "ion-back-button, ion-title {\n  color: #462373; }\n\n.thumnails {\n  overflow-x: scroll;\n  overflow-y: hidden; }\n\n.thumnails .list-thumbnail {\n    height: 100%;\n    white-space: nowrap; }\n\n.thumnails .list-thumbnail .img-thumb {\n      box-shadow: 2px 2px 2px #FFFF;\n      display: inline-block;\n      border: 2px solid #462373;\n      border-radius: 50%;\n      width: 65px;\n      height: 65px;\n      margin: 0 5px 0 0;\n      line-height: 60px; }\n\n.thumnails .list-thumbnail .list {\n      display: inline-grid; }\n\n.thumnails .list-thumbnail .list .name {\n        margin: 0 5px 0 0;\n        text-align: center;\n        color: #462373; }\n\n::-webkit-scrollbar {\n  display: none; }\n\n.title {\n  padding: 15px;\n  color: #462373; }\n\n.list-header {\n  padding-top: 0px;\n  padding-bottom: 0px; }\n\n.no-chat {\n  bottom: 3%;\n  font-size: medium;\n  color: #ff7300; }\n\nion-label h2 {\n  font-size: medium;\n  color: #ff7300;\n  font-weight: bold; }\n\nion-label p {\n  font-size: medium;\n  color: #e67e22;\n  font-weight: lighter; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvc3JhZmF0bmFzc2kvQnVyZWF1LzNpbmcvbW9iaWxlL3RlYW1fbWFuYWdlcl9hcHAvc3JjL2FwcC9TY3JlZW5zL2NoYXQvY2hhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhLEVBQUE7O0FBR2pCO0VBQ0ksa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUZ0QjtJQUlNLFlBQVk7SUFDWixtQkFBbUIsRUFBQTs7QUFMekI7TUFPUSw2QkFBNkI7TUFDN0IscUJBQXFCO01BQ3JCLHlCQUF5QjtNQUN6QixrQkFBa0I7TUFDbEIsV0FBVztNQUNYLFlBQVk7TUFDWixpQkFBZ0I7TUFDaEIsaUJBQWlCLEVBQUE7O0FBZHpCO01BaUJRLG9CQUFvQixFQUFBOztBQWpCNUI7UUFtQlksaUJBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixjQUFjLEVBQUE7O0FBT3hCO0VBQ0UsYUFBYSxFQUFBOztBQUVoQjtFQUNJLGFBQWE7RUFDYixjQUFjLEVBQUE7O0FBRW5CO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBRXJCO0VBQ0ksaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL1NjcmVlbnMvY2hhdC9jaGF0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1iYWNrLWJ1dHRvbiAsIGlvbi10aXRsZXtcbiAgICBjb2xvcjojNDYyMzczO1xufVxuXG4udGh1bW5haWxze1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgLmxpc3QtdGh1bWJuYWlse1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIC5pbWctdGh1bWJ7XG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4ICNGRkZGO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICM0NjIzNzM7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgd2lkdGg6IDY1cHg7XG4gICAgICAgIGhlaWdodDogNjVweDtcbiAgICAgICAgbWFyZ2luOjAgNXB4IDAgMDsgXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgICAgfVxuICAgICAgLmxpc3R7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xuICAgICAgICAubmFtZXtcbiAgICAgICAgICAgIG1hcmdpbjowIDVweCAwIDA7IFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgY29sb3I6ICM0NjIzNzM7XG4gICAgICAgIFxuICAgICAgICB9XG4gICAgICB9XG4gICAgIFxuICAgIH1cbiAgfVxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgXG4gICAgZGlzcGxheTogbm9uZTsgXG4gIH1cbiAudGl0bGV7XG4gICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgIGNvbG9yOiAjNDYyMzczO1xufVxuLmxpc3QtaGVhZGVye1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cblxuLm5vLWNoYXR7XG4gICAgYm90dG9tOiAzJTtcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICBjb2xvcjogI2ZmNzMwMDtcbn1cbmlvbi1sYWJlbCBoMntcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICBjb2xvcjogI2ZmNzMwMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbmlvbi1sYWJlbCBwe1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIGNvbG9yOiAjZTY3ZTIyO1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufSJdfQ== */"

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


var ChatPage = /** @class */ (function () {
    function ChatPage() {
        this.data = [];
        this.queryText = '';
    }
    ChatPage.prototype.loadData = function () {
        this.discussions = [
            { "img": "./../../assets/icon/user.png",
                "name": "yosra",
                "chat": "hello world"
            },
            { "img": "./../../assets/icon/user.png",
                "name": "nasus",
                "chat": "hello world"
            }
        ];
    };
    ChatPage.prototype.ngOnInit = function () {
        this.data = [
            { "img": "./../../assets/icon/user.png",
                "name": "yosra"
            },
            { "img": "./../../assets/icon/user.png",
                "name": "yosra"
            }, { "img": "./../../assets/icon/user.png",
                "name": "yosra"
            }, { "img": "./../../assets/icon/user.png",
                "name": "yosra"
            }, { "img": "./../../assets/icon/user.png",
                "name": "yosra"
            },
        ];
        this.loadData();
    };
    ChatPage.prototype.search = function () {
        var _this = this;
        var d = [];
        if (this.queryText.length != 0) {
            this.discussions.forEach(function (el) {
                if (el["name"].includes(_this.queryText)) {
                    d.push(el);
                }
            });
            this.discussions = d;
        }
        else {
            this.loadData();
        }
    };
    ChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! raw-loader!./chat.page.html */ "./node_modules/raw-loader/index.js!./src/app/Screens/chat/chat.page.html"),
            styles: [__webpack_require__(/*! ./chat.page.scss */ "./src/app/Screens/chat/chat.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatPage);
    return ChatPage;
}());



/***/ })

}]);
//# sourceMappingURL=Screens-chat-chat-module-es5.js.map