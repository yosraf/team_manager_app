(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Screens-account-account-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Screens/account/account.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Screens/account/account.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Account</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"card\">\n        <div class=\"header\">\n          <div class=\"avatar\">\n            <img src=\"../../../assets/icon/user.png\" alt=\"\" *ngIf=\"this.account['img']==null\">\n            <img [src]=\"account['img']\" alt=\"\" *ngIf=\"this.account['img']!=null\">\n          </div>\n          <div class=\"update\">\n            <ion-icon name=\"reverse-camera\" (click)=\"selectImage()\"></ion-icon>\n          </div>\n          <div class=\"description\">\n             <h3>{{account[\"username\"]}}</h3>\n          </div>\n          <div class=\"position\">\n              <h4>                \n                  <ion-icon name=\"md-ribbon\" slot=\"start\"></ion-icon>\n                  {{account['role']}}\n              </h4>\n          </div>\n        </div>\n       <ion-card (click)=\"update('email')\">\n          <ion-item>\n              <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n\n              <ion-label>\n                  {{account['email']}}\n              </ion-label>\n          </ion-item>\n       </ion-card>\n       <ion-card (click)=\"update('password')\">\n          <ion-item>\n              <ion-icon name=\"md-lock\" slot=\"start\"></ion-icon>\n\n              <ion-label>\n                  {{account['password']}}\n              </ion-label>\n          </ion-item>\n       </ion-card >\n       <ion-card (click)=\"update('phone')\"> \n          <ion-item>\n              <ion-icon name=\"md-call\" slot=\"start\"></ion-icon>\n\n              <ion-label *ngIf=\"account['phone']==null\">\n                  no phone number\n              </ion-label>\n              <ion-label>\n                {{account['phone']}}\n            </ion-label>\n          </ion-item>\n       </ion-card>\n       \n      </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Screens/account/account.module.ts":
/*!***************************************************!*\
  !*** ./src/app/Screens/account/account.module.ts ***!
  \***************************************************/
/*! exports provided: AccountPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageModule", function() { return AccountPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account.page */ "./src/app/Screens/account/account.page.ts");







const routes = [
    {
        path: '',
        component: _account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]
    }
];
let AccountPageModule = class AccountPageModule {
};
AccountPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
    })
], AccountPageModule);



/***/ }),

/***/ "./src/app/Screens/account/account.page.scss":
/*!***************************************************!*\
  !*** ./src/app/Screens/account/account.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-title {\n  color: #462373; }\n\nion-back-button {\n  --color:#462373; }\n\n.card {\n  margin: 0 auto; }\n\n.card .header {\n    height: 200px; }\n\n.card .header .avatar {\n      width: 130px;\n      height: 130px;\n      position: relative;\n      margin: 0 auto; }\n\n.card .header .avatar img {\n        display: block;\n        border-radius: 50%;\n        height: 130px;\n        width: 130px;\n        position: absolute;\n        bottom: calc(-1*(10px));\n        background-color: #fff; }\n\n.card .header .update {\n      position: relative;\n      margin: 0 auto;\n      display: block;\n      text-align: center;\n      bottom: 3%; }\n\n.card .header .update ion-icon {\n        font-size: 27px;\n        color: #9980FA; }\n\n.card .header .description {\n      bottom: 15%;\n      position: relative; }\n\n.card .header .description h3 {\n        text-align: center;\n        font-weight: bold;\n        color: #462373; }\n\n.card .header .position {\n      bottom: 25%;\n      position: relative; }\n\n.card .header .position h4 {\n        text-align: center;\n        color: #462373; }\n\n.card .header .position ion-icon {\n        font-size: 25px;\n        color: #462373; }\n\n.card ion-card {\n    box-shadow: none !important; }\n\n.card ion-card ion-icon {\n      color: #d6b0ff; }\n\n.card ion-card ion-label {\n      color: #462373; }\n\nion-toolbar {\n  --background:#d6b0ff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvc3JhZmF0bmFzc2kvQnVyZWF1LzNpbmcvbW9iaWxlL3RlYW1fbWFuYWdlcl9hcHAvc3JjL2FwcC9TY3JlZW5zL2FjY291bnQvYWNjb3VudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFhLEVBQUE7O0FBRWpCO0VBQ0ksZUFBUSxFQUFBOztBQUdaO0VBQ0ksY0FBYyxFQUFBOztBQURsQjtJQUlRLGFBQWEsRUFBQTs7QUFKckI7TUFPWSxZQUFZO01BQ1osYUFBYTtNQUNiLGtCQUFrQjtNQUNsQixjQUFjLEVBQUE7O0FBVjFCO1FBYWdCLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsdUJBQXVCO1FBQ3ZCLHNCQUFzQixFQUFBOztBQW5CdEM7TUF1Qlksa0JBQWtCO01BQ2xCLGNBQWM7TUFDZCxjQUFjO01BQ2Qsa0JBQWtCO01BQ2xCLFVBQVUsRUFBQTs7QUEzQnRCO1FBNkJnQixlQUFjO1FBQ2QsY0FBYyxFQUFBOztBQTlCOUI7TUFtQ1csV0FBVztNQUNYLGtCQUFrQixFQUFBOztBQXBDN0I7UUFzQ2Usa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixjQUFjLEVBQUE7O0FBeEM3QjtNQTZDWSxXQUFXO01BQ1gsa0JBQWtCLEVBQUE7O0FBOUM5QjtRQWdEZ0Isa0JBQWtCO1FBQ2xCLGNBQWMsRUFBQTs7QUFqRDlCO1FBcURnQixlQUFjO1FBQ2QsY0FBYyxFQUFBOztBQXREOUI7SUE0RFEsMkJBQTJCLEVBQUE7O0FBNURuQztNQThEWSxjQUFjLEVBQUE7O0FBOUQxQjtNQWtFWSxjQUFjLEVBQUE7O0FBUTFCO0VBQ0ksb0JBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL1NjcmVlbnMvYWNjb3VudC9hY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZXtcbiAgICBjb2xvcjojNDYyMzczO1xufVxuaW9uLWJhY2stYnV0dG9ue1xuICAgIC0tY29sb3I6IzQ2MjM3MztcblxufVxuLmNhcmQge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgLmhlYWRlciB7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG5cbiAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEzMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTMwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEzMHB4O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IGNhbGMoLTEqKDEwcHgpKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC51cGRhdGV7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYm90dG9tOiAzJTtcbiAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyN3B4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk4MEZBO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5kZXNjcmlwdGlvbntcbiAgICAgICAgICBcbiAgICAgICAgICAgYm90dG9tOiAxNSU7XG4gICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgaDN7XG4gICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgIGNvbG9yOiAjNDYyMzczO1xuICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLnBvc2l0aW9ue1xuICAgICAgICAgICAgYm90dG9tOiAyNSU7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBoNHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0NjIzNzM7XG5cbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyNXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNDYyMzczO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgXG4gICAgfVxuICAgIGlvbi1jYXJke1xuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgY29sb3I6ICNkNmIwZmY7XG5cbiAgICAgICAgfVxuICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgICBjb2xvcjogIzQ2MjM3MztcblxuXG4gICAgICAgIH1cblxuICAgIH1cbiAgXG59XG5pb24tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6I2Q2YjBmZjtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/Screens/account/account.page.ts":
/*!*************************************************!*\
  !*** ./src/app/Screens/account/account.page.ts ***!
  \*************************************************/
/*! exports provided: AccountPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPage", function() { return AccountPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/ionic-webview/ngx */ "./node_modules/@ionic-native/ionic-webview/ngx/index.js");
/* harmony import */ var _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/file-path/ngx */ "./node_modules/@ionic-native/file-path/ngx/index.js");
/* harmony import */ var _Services_authentification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Services/authentification.service */ "./src/app/Services/authentification.service.ts");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _Services_account_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../Services/account.service */ "./src/app/Services/account.service.ts");










let AccountPage = class AccountPage {
    constructor(camera, file, webview, actionSheetController, toastController, plateform, loadingController, ref, filePath, alertCtr, authService, service) {
        this.camera = camera;
        this.file = file;
        this.webview = webview;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        this.plateform = plateform;
        this.loadingController = loadingController;
        this.ref = ref;
        this.filePath = filePath;
        this.alertCtr = alertCtr;
        this.authService = authService;
        this.service = service;
        this.account = {};
    }
    ngOnInit() {
        this.getUser();
    }
    selectImage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: "Select Image source",
                buttons: [{
                        text: 'Load from Library',
                        handler: () => {
                            this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
                        }
                    },
                    {
                        text: 'Use Camera',
                        handler: () => {
                            this.takePicture(this.camera.PictureSourceType.CAMERA);
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    takePicture(sourceType) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            var options = {
                quality: 100,
                sourceType: sourceType,
                destinationType: 0,
                saveToPhotoAlbum: false,
                correctOrientation: true
            };
            var imagePath = yield this.camera.getPicture(options);
            yield this.service.updateImage(imagePath, this.camera.EncodingType);
            /*.then(imagePath => async {
              
              if (this.plateform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
                this.filePath.resolveNativePath(imagePath)
                  .then(filePath => {
                    let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    // this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
                  });
              } else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                // this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
              }
            });*/
        });
    }
    update(type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtr.create({
                header: 'Change your ' + type,
                buttons: [
                    'Cancel',
                    {
                        text: 'Ok',
                        handler: (d) => {
                            if (type == "email") {
                                this.account["email"] = d["email"];
                                this.service.updateEmail(d["email"]);
                            }
                            else if (type == "password") {
                                this.account["password"] = d["password"];
                                this.service.updatePassword(d["password"]);
                            }
                            else if (type == "phone") {
                                this.account["phone"] = d["phone"];
                                this.service.updatePhone(d["phone"]);
                            }
                        }
                    }
                ],
                inputs: [
                    {
                        type: 'text',
                        name: type,
                        placeholder: this.account[type]
                    }
                ]
            });
            return yield alert.present();
        });
    }
    getUser() {
        this.authService.getUser().then(res => {
            this.account = {
                "img": res.image,
                "username": res.username,
                "role": res.role,
                "email": firebase_app__WEBPACK_IMPORTED_MODULE_8__["auth"]().currentUser.email,
                "password": "*****",
                "phone": res.phone
            };
        });
        console.log(this.account);
    }
};
AccountPage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"] },
    { type: _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_5__["WebView"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_6__["FilePath"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _Services_authentification_service__WEBPACK_IMPORTED_MODULE_7__["AuthentificationService"] },
    { type: _Services_account_service__WEBPACK_IMPORTED_MODULE_9__["AccountService"] }
];
AccountPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: __webpack_require__(/*! raw-loader!./account.page.html */ "./node_modules/raw-loader/index.js!./src/app/Screens/account/account.page.html"),
        styles: [__webpack_require__(/*! ./account.page.scss */ "./src/app/Screens/account/account.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__["File"], _ionic_native_ionic_webview_ngx__WEBPACK_IMPORTED_MODULE_5__["WebView"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_6__["FilePath"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _Services_authentification_service__WEBPACK_IMPORTED_MODULE_7__["AuthentificationService"],
        _Services_account_service__WEBPACK_IMPORTED_MODULE_9__["AccountService"]])
], AccountPage);



/***/ }),

/***/ "./src/app/Services/account.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Services/account.service.ts ***!
  \*********************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");




let AccountService = class AccountService {
    constructor(afs) {
        this.afs = afs;
    }
    updateEmail(email) {
        firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.updateEmail(email);
    }
    updatePassword(password) {
        firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.updateEmail(password);
    }
    updatePhone(phone) {
        let value = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
        this.afs.collection('users').get().forEach(doc => {
            doc.docs.forEach(d => {
                var obj = JSON.parse(JSON.stringify(d.data()));
                if (obj['uid'] == value) {
                    d.ref.update({ phone: phone });
                }
            });
        });
    }
    updateImage(image, typeimg) {
        let value = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
        const storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref(`/images-profiles/${value}.${typeimg}`);
        storageRef.putString(image, 'base64', { contentType: `image/${typeimg}` })
            .then(() => {
            return storageRef.getDownloadURL().then(downloadURL => {
                this.afs.collection('users').get().forEach(doc => {
                    doc.docs.forEach(d => {
                        var obj = JSON.parse(JSON.stringify(d.data()));
                        if (obj['uid'] == value) {
                            d.ref.update({ image: downloadURL });
                        }
                    });
                });
            });
        });
    }
};
AccountService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }
];
AccountService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
], AccountService);



/***/ })

}]);
//# sourceMappingURL=Screens-account-account-module-es2015.js.map