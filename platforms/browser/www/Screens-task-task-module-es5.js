(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Screens-task-task-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Screens/task/task.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Screens/task/task.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>    \n    <ion-title>tasks</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-chip (click)=\"filter(0)\">\n    <ion-label color=\"default\">All </ion-label>\n  </ion-chip>\n\n  <ion-chip  color=\"danger\" (click)=\"filter(1)\"> \n    <ion-label color=\"danger\">To do</ion-label>\n  </ion-chip>\n\n  <ion-chip color=\"tertiary\" (click)=\"filter(2)\">\n    <ion-label color=\"tertiary\">Doing</ion-label>\n  </ion-chip>\n  <ion-chip color=\"warning\" (click)=\"filter(3)\">\n    <ion-label color=\"warning\">Done</ion-label>\n  </ion-chip>\n        <ion-refresher slot=\"fixed\" \n        (ionRefresh)=\"ionRefresh($event)\" \n        (ionPull)=\"ionPull($event)\" \n        (ionStart)=\"ionStart($event)\">\n          <ion-refresher-content\n            pullingIcon=\"arrow-dropdown\"\n            pullingText=\"Pull to refresh\"\n            refreshingSpinner=\"circles\"\n            refreshingText=\"Refreshing...\">\n          </ion-refresher-content>\n        </ion-refresher>\n        <ion-list *ngIf=\"this.data.length>0\">\n          \n       \n\n    <ion-item *ngFor=\"let d of data\">\n      <ion-avatar slot=\"start\">\n        <img src=\"./../../assets/icon/user.png\">\n\n      </ion-avatar>\n      <ion-badge  color=\"{{color(d['state'])}}\" slot=\"end\">{{d['state']}}</ion-badge>\n\n      <ion-label>\n        <h5 ><b>{{d['name']}}</b></h5>\n        <p>{{d['description']}}</p>\n       \n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-list-header *ngIf=\"this.data.length==0\" class=\"no-project\">\n    No task Found\n  </ion-list-header>\n\n<ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\" #fab>\n    <ion-fab-button>\n      <ion-icon name=\"add\" (click)=\"open()\"></ion-icon>\n    </ion-fab-button>\n  \n  </ion-fab>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Screens/task/task.module.ts":
/*!*********************************************!*\
  !*** ./src/app/Screens/task/task.module.ts ***!
  \*********************************************/
/*! exports provided: TaskPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskPageModule", function() { return TaskPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _task_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task.page */ "./src/app/Screens/task/task.page.ts");







var routes = [
    {
        path: '',
        component: _task_page__WEBPACK_IMPORTED_MODULE_6__["TaskPage"]
    }
];
var TaskPageModule = /** @class */ (function () {
    function TaskPageModule() {
    }
    TaskPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_task_page__WEBPACK_IMPORTED_MODULE_6__["TaskPage"]]
        })
    ], TaskPageModule);
    return TaskPageModule;
}());



/***/ }),

/***/ "./src/app/Screens/task/task.page.scss":
/*!*********************************************!*\
  !*** ./src/app/Screens/task/task.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-back-button {\n  color: #462373; }\n\nion-title {\n  color: #462373; }\n\nion-fab-button {\n  --background: #ff7300; }\n\n.no-project {\n  font-size: medium;\n  color: #ff7300; }\n\nh5 {\n  color: #462373; }\n\np {\n  color: #8395a7; }\n\nion-chip {\n  width: 20%;\n  text-align: center; }\n\nion-chip ion-label {\n    text-align: center;\n    margin: 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvc3JhZmF0bmFzc2kvQnVyZWF1LzNpbmcvbW9iaWxlL3RlYW1fbWFuYWdlcl9hcHAvc3JjL2FwcC9TY3JlZW5zL3Rhc2svdGFzay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxjQUFhLEVBQUE7O0FBRWI7RUFDSSxjQUFhLEVBQUE7O0FBR2pCO0VBQ0kscUJBQWEsRUFBQTs7QUFHakI7RUFDSSxpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGNBQWEsRUFBQTs7QUFFakI7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksVUFBUztFQUNULGtCQUFrQixFQUFBOztBQUZ0QjtJQUlRLGtCQUFrQjtJQUNsQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9TY3JlZW5zL3Rhc2svdGFzay5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYmFjay1idXR0b257XG5jb2xvcjojNDYyMzczO1xufVxuaW9uLXRpdGxle1xuICAgIGNvbG9yOiM0NjIzNzM7XG5cbn1cbmlvbi1mYWItYnV0dG9ue1xuICAgIC0tYmFja2dyb3VuZDogI2ZmNzMwMDtcblxufVxuLm5vLXByb2plY3R7XG4gICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgY29sb3I6ICNmZjczMDA7XG59XG5oNXtcbiAgICBjb2xvcjojNDYyMzczO1xufVxucHtcbiAgICBjb2xvcjogIzgzOTVhNztcbn1cbmlvbi1jaGlwe1xuICAgIHdpZHRoOjIwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaW9uLWxhYmVse1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/Screens/task/task.page.ts":
/*!*******************************************!*\
  !*** ./src/app/Screens/task/task.page.ts ***!
  \*******************************************/
/*! exports provided: TaskPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskPage", function() { return TaskPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/projects.service */ "./src/app/Services/projects.service.ts");




var TaskPage = /** @class */ (function () {
    function TaskPage(route, router, service) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.service = service;
        this.data = [];
        this.cachedata = [];
        this.route.params.subscribe(function (params) {
            console.log(params["id"]);
            _this.id = params["id"];
        });
    }
    TaskPage.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getTasks(this.id).subscribe(function (doc) {
            _this.data = doc.map(function (element) {
                var obj = JSON.parse(JSON.stringify(element.payload.doc.data()));
                return obj;
            });
            _this.cachedata = _this.data;
        });
    };
    /*laod(){
      this.data=[];
      this.service.getTasks(this.id).then(res=>{
         res.forEach(element => {
           
         this.data.push(element);
  
        });
        
      
      },
      err => {
         console.log(err);}
      );
    
    }*/
    TaskPage.prototype.color = function (progress) {
        if (progress == "to do") {
            return "danger";
        }
        if (progress == "doing") {
            return "tertiary";
        }
        if (progress == "done") {
            return "warning";
        }
    };
    TaskPage.prototype.filter = function (n) {
        var fil = [];
        if (n == 0) {
            //this.laod();
            this.data = this.cachedata;
        }
        if (n == 1) {
            this.data = this.cachedata;
            this.data.forEach(function (element) {
                if (element['state'] == "to do") {
                    fil.push(element);
                }
            });
            this.data = fil;
        }
        if (n == 2) {
            this.data = this.cachedata;
            this.data.forEach(function (element) {
                if (element['state'] == "doing") {
                    fil.push(element);
                }
            });
            this.data = fil;
        }
        if (n == 3) {
            this.data = this.cachedata;
            this.data.forEach(function (element) {
                if (element['state'] == "done") {
                    fil.push(element);
                }
            });
            this.data = fil;
        }
    };
    TaskPage.prototype.open = function () {
        var url = "/task-form/" + this.id;
        console.log(url);
        this.router.navigate([url]);
    };
    TaskPage.prototype.ionRefresh = function (event) {
        setTimeout(function () {
            // this.laod();
            event.target.complete();
        }, 2000);
    };
    TaskPage.prototype.ionPull = function (event) {
        //Emitted while the user is pulling down the content and exposing the refresher.
        console.log('ionPull Event Triggered!');
    };
    TaskPage.prototype.ionStart = function (event) {
        //Emitted when the user begins to start pulling down.
        console.log('ionStart Event Triggered!');
    };
    TaskPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _Services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"] }
    ]; };
    TaskPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(/*! raw-loader!./task.page.html */ "./node_modules/raw-loader/index.js!./src/app/Screens/task/task.page.html"),
            styles: [__webpack_require__(/*! ./task.page.scss */ "./src/app/Screens/task/task.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _Services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"]])
    ], TaskPage);
    return TaskPage;
}());



/***/ })

}]);
//# sourceMappingURL=Screens-task-task-module-es5.js.map