(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Screens-account-account-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Screens/account/account.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Screens/account/account.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-back-button></ion-back-button>\n        </ion-buttons>\n        <ion-title>Account</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"card\">\n        <div class=\"header\">\n          <div class=\"avatar\">\n            <img src=\"../../../assets/icon/user.png\" alt=\"\" *ngIf=\"this.data['img']==null\">\n          </div>\n          <div class=\"update\">\n            <ion-icon name=\"md-create\" (click)=\"selectImage()\"></ion-icon>\n          </div>\n          <div class=\"description\">\n             <h3>{{data[\"name\"]}}</h3>\n          </div>\n          <div class=\"position\">\n              <h4>                \n                  <ion-icon name=\"md-ribbon\" slot=\"start\"></ion-icon>\n                  {{data['position']}}\n              </h4>\n          </div>\n        </div>\n       <ion-card>\n          <ion-item>\n              <ion-icon name=\"mail\" slot=\"start\"></ion-icon>\n\n              <ion-label>\n                  {{data['email']}}\n              </ion-label>\n          </ion-item>\n       </ion-card>\n       <ion-card>\n          <ion-item>\n              <ion-icon name=\"md-lock\" slot=\"start\"></ion-icon>\n\n              <ion-label>\n                  {{data['password']}}\n              </ion-label>\n          </ion-item>\n       </ion-card>\n       <ion-card>\n          <ion-item>\n              <ion-icon name=\"md-call\" slot=\"start\"></ion-icon>\n\n              <ion-label>\n                  {{data['phone']}}\n              </ion-label>\n          </ion-item>\n       </ion-card>\n       \n      </div>\n\n</ion-content>\n"

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

module.exports = "ion-title {\n  color: #462373;\n}\n\n.card {\n  margin: 0 auto;\n}\n\n.card .header {\n  height: 200px;\n}\n\n.card .header .avatar {\n  width: 130px;\n  height: 130px;\n  position: relative;\n  margin: 0 auto;\n}\n\n.card .header .avatar img {\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  bottom: calc(-1*(10px));\n  background-color: #fff;\n}\n\n.card .header .update {\n  position: relative;\n  margin: 0 auto;\n  display: block;\n  right: 9%;\n  text-align: center;\n  bottom: 7%;\n}\n\n.card .header .update ion-icon {\n  font-size: 27px;\n  color: #9980FA;\n}\n\n.card .header .description {\n  bottom: 15%;\n  position: relative;\n}\n\n.card .header .description h3 {\n  text-align: center;\n  font-weight: bold;\n  color: #462373;\n}\n\n.card .header .position {\n  bottom: 25%;\n  position: relative;\n}\n\n.card .header .position h4 {\n  text-align: center;\n  color: #ff7300;\n}\n\n.card .header .position ion-icon {\n  font-size: 25px;\n  color: #ff7300;\n}\n\n.card ion-card {\n  box-shadow: none !important;\n}\n\n.card ion-card ion-icon {\n  color: #ff7300;\n}\n\n.card ion-card ion-label {\n  color: #462373;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvc3JhZmF0bmFzc2kvQnVyZWF1LzNpbmcvbW9iaWxlL3RlYW1fbWFuYWdlcl9hcHAvc3JjL2FwcC9TY3JlZW5zL2FjY291bnQvYWNjb3VudC5wYWdlLnNjc3MiLCJzcmMvYXBwL1NjcmVlbnMvYWNjb3VudC9hY2NvdW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7QUNDSjs7QURDQTtFQUNJLGNBQUE7QUNFSjs7QURBSTtFQUNJLGFBQUE7QUNFUjs7QURBUTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDRVo7O0FEQVk7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUNFaEI7O0FEQ1E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0NaOztBREFZO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUNFaEI7O0FEQ1E7RUFFRyxXQUFBO0VBQ0Esa0JBQUE7QUNBWDs7QURDVztFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDQ2Y7O0FER1E7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7QUNEWjs7QURFWTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQ0FoQjs7QURHZTtFQUNDLGVBQUE7RUFDQSxjQUFBO0FDRGhCOztBRE1JO0VBQ0ksMkJBQUE7QUNKUjs7QURLUTtFQUNJLGNBQUE7QUNIWjs7QURNUTtFQUNJLGNBQUE7QUNKWiIsImZpbGUiOiJzcmMvYXBwL1NjcmVlbnMvYWNjb3VudC9hY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZXtcbiAgICBjb2xvcjojNDYyMzczO1xufVxuLmNhcmQge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgLmhlYWRlciB7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG5cbiAgICAgICAgLmF2YXRhciB7XG4gICAgICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEzMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IGNhbGMoLTEqKDEwcHgpKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC51cGRhdGV7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgcmlnaHQ6IDklO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgYm90dG9tOiA3JTtcbiAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyN3B4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjOTk4MEZBO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5kZXNjcmlwdGlvbntcbiAgICAgICAgICBcbiAgICAgICAgICAgYm90dG9tOiAxNSU7XG4gICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgaDN7XG4gICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgIGNvbG9yOiAjNDYyMzczO1xuICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgLnBvc2l0aW9ue1xuICAgICAgICAgICAgYm90dG9tOiAyNSU7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBoNHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZjczMDA7XG5cbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyNXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmY3MzAwO1xuICAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgXG4gICAgfVxuICAgIGlvbi1jYXJke1xuICAgICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgY29sb3I6ICNmZjczMDA7XG5cbiAgICAgICAgfVxuICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgICBjb2xvcjogIzQ2MjM3MztcblxuXG4gICAgICAgIH1cblxuICAgIH1cbiAgXG59IiwiaW9uLXRpdGxlIHtcbiAgY29sb3I6ICM0NjIzNzM7XG59XG5cbi5jYXJkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uY2FyZCAuaGVhZGVyIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbi5jYXJkIC5oZWFkZXIgLmF2YXRhciB7XG4gIHdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5jYXJkIC5oZWFkZXIgLmF2YXRhciBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogY2FsYygtMSooMTBweCkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmNhcmQgLmhlYWRlciAudXBkYXRlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDAgYXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHJpZ2h0OiA5JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3R0b206IDclO1xufVxuLmNhcmQgLmhlYWRlciAudXBkYXRlIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyN3B4O1xuICBjb2xvcjogIzk5ODBGQTtcbn1cbi5jYXJkIC5oZWFkZXIgLmRlc2NyaXB0aW9uIHtcbiAgYm90dG9tOiAxNSU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jYXJkIC5oZWFkZXIgLmRlc2NyaXB0aW9uIGgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM0NjIzNzM7XG59XG4uY2FyZCAuaGVhZGVyIC5wb3NpdGlvbiB7XG4gIGJvdHRvbTogMjUlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uY2FyZCAuaGVhZGVyIC5wb3NpdGlvbiBoNCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZjczMDA7XG59XG4uY2FyZCAuaGVhZGVyIC5wb3NpdGlvbiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY29sb3I6ICNmZjczMDA7XG59XG4uY2FyZCBpb24tY2FyZCB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5jYXJkIGlvbi1jYXJkIGlvbi1pY29uIHtcbiAgY29sb3I6ICNmZjczMDA7XG59XG4uY2FyZCBpb24tY2FyZCBpb24tbGFiZWwge1xuICBjb2xvcjogIzQ2MjM3Mztcbn0iXX0= */"

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







let AccountPage = class AccountPage {
    constructor(camera, file, webview, actionSheetController, toastController, plateform, loadingController, ref, filePath) {
        this.camera = camera;
        this.file = file;
        this.webview = webview;
        this.actionSheetController = actionSheetController;
        this.toastController = toastController;
        this.plateform = plateform;
        this.loadingController = loadingController;
        this.ref = ref;
        this.filePath = filePath;
    }
    ngOnInit() {
        this.data = {
            "img": null,
            "name": "yosra fatnassi",
            "position": "manager",
            "email": "yosrafatnassi@gmail.com",
            "password": "00000",
            "phone": "58784044"
        };
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
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(imagePath => {
            if (this.plateform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
                this.filePath.resolveNativePath(imagePath)
                    .then(filePath => {
                    let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                    let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    // this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
                });
            }
            else {
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                // this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
            }
        });
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
    { type: _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_6__["FilePath"] }
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ionic_native_file_path_ngx__WEBPACK_IMPORTED_MODULE_6__["FilePath"]])
], AccountPage);



/***/ })

}]);
//# sourceMappingURL=Screens-account-account-module-es2015.js.map