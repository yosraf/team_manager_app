(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Screens-discussion-discussion-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Screens/discussion/discussion.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Screens/discussion/discussion.page.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>discussion</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n <div class=\"discussion\">\n  <div *ngIf=\"messages.length!=0\">\n    <ion-list >\n      <div *ngFor=\"let msg of messages\" class=\"sender-msg\" >\n        <h6 class=\"date\">{{msg.date}}</h6>\n        <ion-item  lines=\"full\" class=\"send\" >\n          <ion-avatar [slot]=\"slot(msg['sender'])\">\n            <div *ngIf=\"slot(msg['sender'])=='start'\" >\n              <img [src]=\"send_img\" *ngIf=\"send_img!=null\">\n              <img src=\"../../../assets/icon/user.png\" *ngIf=\"send_img==null\">\n            </div>\n            <div *ngIf=\"slot(msg['sender'])=='end'\" >\n              <img [src]=\"rec_img\" *ngIf=\"rec_img!=null\">\n              <img src=\"../../../assets/icon/user.png\" *ngIf=\"rec_img==null\">\n            </div>\n           \n          </ion-avatar>\n          <h5>{{msg.text}}</h5>\n         \n        </ion-item>\n      \n        \n      </div>\n     \n    \n       \n    </ion-list>\n  </div>\n  <ion-card *ngIf=\"this.messages.length==0\" class=\"no-chat\">\n    <ion-card-content>\n        No discussion Found\n     </ion-card-content>\n</ion-card>\n </div>\n\n</ion-content>\n<ion-footer>\n  <div class=\"sender\">\n \n    <ion-item>\n      <ion-input type=\"text\" [(ngModel)]=\"message\"></ion-input>\n      <ion-icon slot=\"end\" name=\"send\"  (click)=\"send()\"></ion-icon>\n    </ion-item>\n  \n  \n</div >\n</ion-footer>\n"

/***/ }),

/***/ "./src/app/Screens/discussion/discussion.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/Screens/discussion/discussion.module.ts ***!
  \*********************************************************/
/*! exports provided: DiscussionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionPageModule", function() { return DiscussionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _discussion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discussion.page */ "./src/app/Screens/discussion/discussion.page.ts");







var routes = [
    {
        path: '',
        component: _discussion_page__WEBPACK_IMPORTED_MODULE_6__["DiscussionPage"]
    }
];
var DiscussionPageModule = /** @class */ (function () {
    function DiscussionPageModule() {
    }
    DiscussionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_discussion_page__WEBPACK_IMPORTED_MODULE_6__["DiscussionPage"]]
        })
    ], DiscussionPageModule);
    return DiscussionPageModule;
}());



/***/ }),

/***/ "./src/app/Screens/discussion/discussion.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/Screens/discussion/discussion.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  color: #462373; }\n\nion-back-button {\n  --color:#462373; }\n\nion-toolbar {\n  --background:#d6b0ff; }\n\n.discussion {\n  height: 100%; }\n\n.no-chat {\n  font-size: medium;\n  color: #462373; }\n\n.sender-msg {\n  margin-top: 10px;\n  margin-bottom: 10px; }\n\n.rece {\n  color: white;\n  font-size: 15px;\n  height: 10%;\n  --background: #d6b0ff;\n  width: 90%;\n  margin: 0 auto;\n  --border-radius:25px; }\n\n.send {\n  color: white;\n  font-size: 15px;\n  height: 10%;\n  --background: #462373;\n  width: 90%;\n  margin: 0 auto;\n  --border-radius:25px; }\n\n.date {\n  text-align: center;\n  color: #d6b0ff; }\n\n.sender {\n  height: 10%;\n  width: 100%;\n  background-color: #d6b0ff; }\n\n.sender ion-item {\n    --background:#d6b0ff; }\n\n.sender ion-input {\n    --background:#d6b0ff;\n    --color:#462373; }\n\n.sender ion-icon {\n    color: #462373;\n    font-size: 25px;\n    text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvc3JhZmF0bmFzc2kvQnVyZWF1LzNpbmcvbW9iaWxlL3RlYW1fbWFuYWdlcl9hcHAvc3JjL2FwcC9TY3JlZW5zL2Rpc2N1c3Npb24vZGlzY3Vzc2lvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhLEVBQUE7O0FBRWpCO0VBQ0UsZUFBUSxFQUFBOztBQUdWO0VBQ0Usb0JBQWEsRUFBQTs7QUFFZjtFQUNJLFlBQVksRUFBQTs7QUFFaEI7RUFFSSxpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7RUFDWCxxQkFBYTtFQUNiLFVBQVU7RUFDVixjQUFjO0VBQ2Qsb0JBQWdCLEVBQUE7O0FBSXBCO0VBQ0ksWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gscUJBQWE7RUFDYixVQUFVO0VBQ1YsY0FBYztFQUNkLG9CQUFnQixFQUFBOztBQUlwQjtFQUNJLGtCQUFrQjtFQUNsQixjQUFhLEVBQUE7O0FBRWpCO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFJWCx5QkFBeUIsRUFBQTs7QUFON0I7SUFJUSxvQkFBYSxFQUFBOztBQUpyQjtJQVFRLG9CQUFhO0lBQ2IsZUFBUSxFQUFBOztBQVRoQjtJQVlRLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9TY3JlZW5zL2Rpc2N1c3Npb24vZGlzY3Vzc2lvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGV7XG4gICAgY29sb3I6IzQ2MjM3Mztcbn1cbmlvbi1iYWNrLWJ1dHRvbntcbiAgLS1jb2xvcjojNDYyMzczO1xuXG59XG5pb24tdG9vbGJhcntcbiAgLS1iYWNrZ3JvdW5kOiNkNmIwZmY7XG59XG4uZGlzY3Vzc2lvbntcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4ubm8tY2hhdHtcbiAgICBcbiAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICBjb2xvcjogIzQ2MjM3Mztcbn1cbi5zZW5kZXItbXNne1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDsgIFxuICBcbn1cbi5yZWNle1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZDZiMGZmO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgLS1ib3JkZXItcmFkaXVzOjI1cHg7XG5cbiAgIFxufVxuLnNlbmR7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBoZWlnaHQ6IDEwJTtcbiAgICAtLWJhY2tncm91bmQ6ICM0NjIzNzM7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICAtLWJvcmRlci1yYWRpdXM6MjVweDtcblxuICAgXG59XG4uZGF0ZXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6I2Q2YjBmZjtcbn1cbi5zZW5kZXJ7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaW9uLWl0ZW17XG4gICAgICAgIC0tYmFja2dyb3VuZDojZDZiMGZmO1xuICAgIH1cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZiMGZmO1xuICAgIGlvbi1pbnB1dHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiNkNmIwZmY7XG4gICAgICAgIC0tY29sb3I6IzQ2MjM3MztcdFxuICAgIH1cbiAgICBpb24taWNvbntcbiAgICAgICAgY29sb3I6ICM0NjIzNzM7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgIFxufSJdfQ== */"

/***/ }),

/***/ "./src/app/Screens/discussion/discussion.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/Screens/discussion/discussion.page.ts ***!
  \*******************************************************/
/*! exports provided: DiscussionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionPage", function() { return DiscussionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_chat_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/chat.service */ "./src/app/Services/chat.service.ts");
/* harmony import */ var _Services_authentification_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/authentification.service */ "./src/app/Services/authentification.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);






var DiscussionPage = /** @class */ (function () {
    function DiscussionPage(route, service, auth) {
        var _this = this;
        this.route = route;
        this.service = service;
        this.auth = auth;
        this.messages = [];
        this.route.params.subscribe(function (params) {
            _this.id = params["id"];
        });
    }
    DiscussionPage.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.service.AsyncMessages(this.id)];
                    case 1:
                        (_a.sent()).subscribe(function (res) {
                            _this.messages = [];
                            res.map(function (value) {
                                var obj = JSON.parse(JSON.stringify(value.payload.doc.data()));
                                var now = Date.now();
                                var d = obj["created_at"];
                                if (new Date(now).getDay > new Date(d).getDay) {
                                    obj["date"] = (new Date(d)).getTime().toLocaleString();
                                }
                                else {
                                    obj["date"] = new Date(d).getHours() + ":" + new Date(d).getMinutes();
                                }
                                if (obj['sender'] == firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.uid) {
                                    _this.myid = obj['sender'];
                                }
                                else {
                                    _this.receiverid = obj['sender'];
                                }
                                _this.messages.push(obj);
                            });
                        });
                        this.getImage();
                        return [2 /*return*/];
                }
            });
        });
    };
    DiscussionPage.prototype.getImage = function () {
        var _this = this;
        this.auth.getUsers().subscribe(function (data) {
            data.forEach(function (d) {
                var obj = JSON.parse(JSON.stringify(d.payload.doc.data()));
                if (obj['uid'] == _this.myid) {
                    var p = {
                        "image": obj.image,
                    };
                    _this.send_img = p["image"];
                }
                if (obj['uid'] == _this.receiverid) {
                    var p = {
                        "image": obj.image,
                    };
                    _this.rec_img = p["image"];
                }
            });
        });
    };
    DiscussionPage.prototype.send = function () {
        var _this = this;
        this.service.sendMessage(this.message, this.id).then(function (v) {
            _this.message = "";
        });
    };
    DiscussionPage.prototype.color = function (id) {
        if (this.myid == id) {
            return '#d6b0ff';
        }
        else {
            return '#462373';
        }
    };
    DiscussionPage.prototype.slot = function (id) {
        if (this.myid == id) {
            return 'start';
        }
        else {
            return 'end';
        }
    };
    DiscussionPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _Services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"] },
        { type: _Services_authentification_service__WEBPACK_IMPORTED_MODULE_4__["AuthentificationService"] }
    ]; };
    DiscussionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-discussion',
            template: __webpack_require__(/*! raw-loader!./discussion.page.html */ "./node_modules/raw-loader/index.js!./src/app/Screens/discussion/discussion.page.html"),
            styles: [__webpack_require__(/*! ./discussion.page.scss */ "./src/app/Screens/discussion/discussion.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _Services_chat_service__WEBPACK_IMPORTED_MODULE_3__["ChatService"], _Services_authentification_service__WEBPACK_IMPORTED_MODULE_4__["AuthentificationService"]])
    ], DiscussionPage);
    return DiscussionPage;
}());



/***/ }),

/***/ "./src/app/Services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/Services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");




var ChatService = /** @class */ (function () {
    function ChatService(afs) {
        this.afs = afs;
        this.COLLECTIONMESSAGE = "messagerie";
        this.MESSAGES = "messages";
    }
    ChatService.prototype.AsyncMessages = function (user2) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var currentUser, iddoc_1, iddoc_2, bool, iddoc, doc, doc2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentUser = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser;
                        iddoc_1 = currentUser.uid + "_" + user2;
                        iddoc_2 = user2 + "_" + currentUser.uid;
                        bool = false;
                        iddoc = iddoc_1;
                        return [4 /*yield*/, this.afs.collection(this.COLLECTIONMESSAGE).doc(iddoc).ref.get()];
                    case 1:
                        doc = _a.sent();
                        if (!!doc.exists) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.afs.collection(this.COLLECTIONMESSAGE).doc(iddoc_2).ref.get()];
                    case 2:
                        doc2 = _a.sent();
                        if (!doc2.exists) {
                            this.afs.collection(this.COLLECTIONMESSAGE).doc(iddoc).set({ users: [currentUser.uid, user2] });
                        }
                        else
                            iddoc = iddoc_2;
                        _a.label = 3;
                    case 3: return [2 /*return*/, this.afs.collection(this.COLLECTIONMESSAGE).doc(iddoc).collection(this.MESSAGES, function (ref) { return ref.orderBy("created_at", 'asc'); }).snapshotChanges()
                        //return  this.afs.collection(this.COLLECTIONMESSAGE).doc(iddoc_2).collection(this.MESSAGES,ref=>ref.orderBy("created_at",'asc')).snapshotChanges();
                    ];
                }
            });
        });
    };
    ChatService.prototype.sendMessage = function (text, user2) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var currentUser, iddoc, docSnap, now;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        currentUser = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser;
                        iddoc = currentUser.uid + "_" + user2;
                        return [4 /*yield*/, this.afs.collection(this.COLLECTIONMESSAGE).doc(iddoc).ref.get()];
                    case 1:
                        docSnap = _a.sent();
                        if (!docSnap.exists) {
                            iddoc = user2 + "_" + currentUser.uid;
                        }
                        now = Date.now();
                        return [4 /*yield*/, this.afs.collection(this.COLLECTIONMESSAGE).doc(iddoc).
                                collection(this.MESSAGES).add({ "sender": currentUser.uid, "text": text, "created_at": now })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }
    ]; };
    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], ChatService);
    return ChatService;
}());



/***/ })

}]);
//# sourceMappingURL=Screens-discussion-discussion-module-es5.js.map