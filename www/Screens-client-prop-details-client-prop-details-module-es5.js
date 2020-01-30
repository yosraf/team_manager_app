(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Screens-client-prop-details-client-prop-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Screens/client-prop-details/client-prop-details.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Screens/client-prop-details/client-prop-details.page.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title class=\"title\">Details</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button class=\"title\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list >\n   \n    <ion-list-header class=\"ion-title\">\n      Proposiotion informations\n    </ion-list-header>\n      <div class=\"card\">\n        <div class=\"project-info\">\n          <ion-icon  name=\"clipboard\" class=\"icon\"></ion-icon>\n        </div>\n        <div class=\"container\" >\n          <h5 ><b>{{details['name']}}</b></h5>\n          \n    \n        </div>\n      \n    \n        \n      </div>\n      <div class=\"card\">\n        <div class=\"project-info\">\n          <ion-icon   [name]=\"icon(details['type'])\" class=\"icon\"></ion-icon>\n        </div>\n        <div class=\"container\">\n          <h5 ><b>{{details['type']}}</b></h5>\n          \n    \n        </div>\n      \n    \n        \n      </div>\n      <div class=\"card\">\n        <div class=\"project-info\">\n          <ion-icon  name=\"create\" class=\"icon\"></ion-icon>\n        </div>\n        <div class=\"container\">\n          <h5 ><b>{{details['description']}}</b></h5>\n          \n    \n        </div>\n      \n    \n        \n      </div>\n      <div class=\"card\" >\n        <div class=\"project-info\">\n          <ion-icon  name=\"document\" class=\"icon\"></ion-icon>\n        </div>\n        <div class=\"container\">\n          <h5 ><b>Project specifications</b></h5>\n          \n        </div>\n        \n        <div>\n          <ion-icon name=\"download\" (click)=\"download(details['file'])\"></ion-icon>\n        </div>\n     \n    \n        \n      </div>\n      <div class=\"ion-padding\">\n        <ion-button size=\"large\"  expand=\"block\" (click)=\"presentAlertPrompt()\">Reply to this proposition</ion-button>\n    \n      </div>\n   \n  </ion-list>\n \n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Screens/client-prop-details/client-prop-details.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Screens/client-prop-details/client-prop-details.module.ts ***!
  \***************************************************************************/
/*! exports provided: ClientPropDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPropDetailsPageModule", function() { return ClientPropDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _client_prop_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client-prop-details.page */ "./src/app/Screens/client-prop-details/client-prop-details.page.ts");







var routes = [
    {
        path: '',
        component: _client_prop_details_page__WEBPACK_IMPORTED_MODULE_6__["ClientPropDetailsPage"]
    }
];
var ClientPropDetailsPageModule = /** @class */ (function () {
    function ClientPropDetailsPageModule() {
    }
    ClientPropDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_client_prop_details_page__WEBPACK_IMPORTED_MODULE_6__["ClientPropDetailsPage"]]
        })
    ], ClientPropDetailsPageModule);
    return ClientPropDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/Screens/client-prop-details/client-prop-details.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/Screens/client-prop-details/client-prop-details.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background:#d6b0ff; }\n\n.title {\n  --color:#462373; }\n\n.ion-title {\n  color: #462373;\n  font-size: 18px; }\n\n.noresp-header {\n  color: white;\n  font-size: 16px;\n  --background:#462373;\n  height: 70px;\n  margin-top: 5px;\n  padding-top: 25px;\n  padding-left: 5px; }\n\n.type-icon {\n  color: #d6b0ff;\n  font-size: 16px; }\n\n.name {\n  color: #462373;\n  font-size: 18px; }\n\n.card {\n  box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.4);\n  border-radius: 6px;\n  margin: 0 auto;\n  margin-bottom: 10px;\n  height: 70px;\n  width: 90%;\n  display: -webkit-box;\n  display: flex; }\n\n.card .container {\n    width: 50%;\n    padding-left: 5px; }\n\n.card .container h5 {\n      color: #462373; }\n\n.card .container p {\n      color: #8395a7; }\n\n.card .project-info {\n    background-color: #d6b0ff;\n    width: 25%;\n    text-align: center;\n    border-top-left-radius: 6px;\n    border-bottom-left-radius: 6px; }\n\n.card .project-info .icon {\n      font-size: 30px;\n      margin-top: 25%;\n      color: #462373; }\n\n.card div {\n    width: 25%;\n    text-align: center; }\n\n.card div ion-icon {\n      margin: 0 auto;\n      margin-top: 50%;\n      color: #d6b0ff;\n      font-size: 18px; }\n\nion-button {\n  --background:#462373;\n  text-transform: none;\n  --background-hover:#462373;\n  --background-activated:#462373;\n  color: white;\n  font-size: 18px; }\n\nion-alert button {\n  background-color: #462373; }\n\nion-alert .alert-button-group {\n  background-color: #462373;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvc3JhZmF0bmFzc2kvQnVyZWF1LzNpbmcvbW9iaWxlL3RlYW1fbWFuYWdlcl9hcHAvc3JjL2FwcC9TY3JlZW5zL2NsaWVudC1wcm9wLWRldGFpbHMvY2xpZW50LXByb3AtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBYSxFQUFBOztBQUdqQjtFQUNJLGVBQVEsRUFBQTs7QUFFWjtFQUNJLGNBQWE7RUFDYixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksWUFBVztFQUNYLGVBQWU7RUFDZixvQkFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGNBQWE7RUFDYixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksY0FBYTtFQUNiLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSw2Q0FBNkM7RUFDN0Msa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsWUFBVztFQUNYLFVBQVU7RUFDVixvQkFBYTtFQUFiLGFBQWEsRUFBQTs7QUFQakI7SUFTUSxVQUFVO0lBQ1YsaUJBQWlCLEVBQUE7O0FBVnpCO01BWVksY0FBYSxFQUFBOztBQVp6QjtNQWVZLGNBQWMsRUFBQTs7QUFmMUI7SUEyQlUseUJBQXlCO0lBQ3pCLFVBQVM7SUFDVCxrQkFBa0I7SUFDbEIsMkJBQTJCO0lBQzNCLDhCQUE4QixFQUFBOztBQS9CeEM7TUF1QmMsZUFBZTtNQUNmLGVBQWU7TUFDZixjQUFhLEVBQUE7O0FBekIzQjtJQW9DUSxVQUFTO0lBQ1Qsa0JBQWtCLEVBQUE7O0FBckMxQjtNQXVDWSxjQUFhO01BQ2IsZUFBZTtNQUNmLGNBQWM7TUFDZCxlQUFlLEVBQUE7O0FBTTNCO0VBQ0ksb0JBQWE7RUFDYixvQkFBb0I7RUFDcEIsMEJBQW1CO0VBQ25CLDhCQUF3QjtFQUV4QixZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUduQjtFQUVRLHlCQUF5QixFQUFBOztBQUZqQztFQUtRLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL1NjcmVlbnMvY2xpZW50LXByb3AtZGV0YWlscy9jbGllbnQtcHJvcC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFye1xuICAgIC0tYmFja2dyb3VuZDojZDZiMGZmO1xufVxuXG4udGl0bGV7XG4gICAgLS1jb2xvcjojNDYyMzczO1xufVxuLmlvbi10aXRsZXtcbiAgICBjb2xvcjojNDYyMzczO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbi5ub3Jlc3AtaGVhZGVye1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAtLWJhY2tncm91bmQ6IzQ2MjM3MztcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuXG59XG4udHlwZS1pY29ue1xuICAgIGNvbG9yOiNkNmIwZmY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuLm5hbWV7XG4gICAgY29sb3I6IzQ2MjM3MztcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG4uY2FyZCB7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGhlaWdodDo3MHB4O1xuICAgIHdpZHRoOiA5MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgIGg1e1xuICAgICAgICAgICAgY29sb3I6IzQ2MjM3MztcbiAgICAgICAgfVxuICAgICAgICBwe1xuICAgICAgICAgICAgY29sb3I6ICM4Mzk1YTc7XG4gICAgICAgIH1cbiAgICAgICAgICAgICBcbiBcblxuICAgICAgfVxuICAgICAgLnByb2plY3QtaW5mb3tcbiAgICAgICAgICAgIC5pY29ue1xuICAgICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1JTtcbiAgICAgICAgICAgICAgY29sb3I6IzQ2MjM3MztcbiAgICAgICAgICB9XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2YjBmZjtcbiAgICAgICAgICB3aWR0aDoyNSU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDZweDtcbiAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2cHg7XG5cblxuICAgICAgfVxuICAgICAgZGl2e1xuICAgICAgICB3aWR0aDoyNSU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBtYXJnaW46MCBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTAlO1xuICAgICAgICAgICAgY29sb3I6ICNkNmIwZmY7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBcbiAgfVxuXG5pb24tYnV0dG9ue1xuICAgIC0tYmFja2dyb3VuZDojNDYyMzczO1xuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgIC0tYmFja2dyb3VuZC1ob3ZlcjojNDYyMzczO1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWRcdDojNDYyMzczO1xuXG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuaW9uLWFsZXJ0e1xuICAgIGJ1dHRvbntcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ2MjM3MztcbiAgICB9XG4gICAgLmFsZXJ0LWJ1dHRvbi1ncm91cHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ2MjM3MztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxufSJdfQ== */"

/***/ }),

/***/ "./src/app/Screens/client-prop-details/client-prop-details.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Screens/client-prop-details/client-prop-details.page.ts ***!
  \*************************************************************************/
/*! exports provided: ClientPropDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPropDetailsPage", function() { return ClientPropDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/projects.service */ "./src/app/Services/projects.service.ts");
/* harmony import */ var _Models_Proposition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Models/Proposition */ "./src/app/Models/Proposition.ts");
/* harmony import */ var _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/downloader/ngx */ "./node_modules/@ionic-native/downloader/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");









var ClientPropDetailsPage = /** @class */ (function () {
    function ClientPropDetailsPage(route, router, service, downloader, alertCrtl, loadingController, toast) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.service = service;
        this.downloader = downloader;
        this.alertCrtl = alertCrtl;
        this.loadingController = loadingController;
        this.toast = toast;
        this.details = new _Models_Proposition__WEBPACK_IMPORTED_MODULE_4__["Proposition"]();
        this.route.params.subscribe(function (params) {
            console.log(params["id"]);
            _this.id = params["id"];
        });
    }
    ClientPropDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getPropositionDetail(this.id).subscribe(function (res) {
            _this.details = JSON.parse(JSON.stringify(res.payload.data()));
        });
    };
    ClientPropDetailsPage.prototype.icon = function (type) {
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
    ClientPropDetailsPage.prototype.download = function (url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var date, loading, request, location;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(url);
                        date = Date.now();
                        return [4 /*yield*/, this.presentLoadingWithOptions("Downlaoding...")];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        request = {
                            uri: url,
                            title: 'download proposition file',
                            description: '',
                            mimeType: 'application/pdf',
                            visibleInDownloadsUi: true,
                            notificationVisibility: _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_5__["NotificationVisibility"].VisibleNotifyCompleted,
                            destinationInExternalFilesDir: {
                                dirType: 'Downloads',
                                subPath: "file_" + date + ".pdf"
                            }
                        };
                        return [4 /*yield*/, this.downloader.download(request)];
                    case 2:
                        location = _a.sent();
                        loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    ClientPropDetailsPage.prototype.presentLoadingWithOptions = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loading;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            //   duration: 5000,
                            message: msg,
                            translucent: true,
                            showBackdrop: true,
                            cssClass: 'custom-class custom-loading'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [2 /*return*/, loading];
                }
            });
        });
    };
    ClientPropDetailsPage.prototype.presentAlertPrompt = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast, alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.presentToast()];
                    case 1:
                        toast = _a.sent();
                        return [4 /*yield*/, this.alertCrtl.create({
                                header: 'Provide ',
                                inputs: [
                                    {
                                        name: 'budget',
                                        type: 'number',
                                        min: 0,
                                        placeholder: "this project will costs"
                                    },
                                    {
                                        name: 'duration',
                                        type: 'number',
                                        min: 0,
                                        placeholder: "duration , the unit is month"
                                    }
                                ],
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        cssClass: 'alertButton',
                                        handler: function () {
                                            console.log('Confirm Cancel');
                                        }
                                    }, {
                                        text: 'Confirm',
                                        cssClass: 'alertButton',
                                        handler: function (value) {
                                            _this.service.replyProposition(value, _this.id);
                                            _this.router.navigate(["/client-propositions"]);
                                            toast.present();
                                            console.log('Confirm Ok');
                                        }
                                    }
                                ]
                            })];
                    case 2:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ClientPropDetailsPage.prototype.presentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: 'Successfuly replied',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        return [2 /*return*/, toast];
                }
            });
        });
    };
    ClientPropDetailsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _Services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"] },
        { type: _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_5__["Downloader"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
    ]; };
    ClientPropDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client-prop-details',
            template: __webpack_require__(/*! raw-loader!./client-prop-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/Screens/client-prop-details/client-prop-details.page.html"),
            styles: [__webpack_require__(/*! ./client-prop-details.page.scss */ "./src/app/Screens/client-prop-details/client-prop-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _Services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"],
            _ionic_native_downloader_ngx__WEBPACK_IMPORTED_MODULE_5__["Downloader"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"]])
    ], ClientPropDetailsPage);
    return ClientPropDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=Screens-client-prop-details-client-prop-details-module-es5.js.map