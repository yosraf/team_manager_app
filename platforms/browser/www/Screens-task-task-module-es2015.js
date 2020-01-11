(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Screens-task-task-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Screens/task/task.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Screens/task/task.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>tasks</ion-title>\n    <ion-icon name=\"create\" slot=\"end\" class=\"modify\" (click)=\"openModify(id)\"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"ionRefresh($event)\" (ionPull)=\"ionPull($event)\"\n    (ionStart)=\"ionStart($event)\">\n    <ion-refresher-content pullingIcon=\"arrow-dropdown\" pullingText=\"Pull to refresh\" refreshingSpinner=\"circles\"\n      refreshingText=\"Refreshing...\">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <ion-list *ngIf=\"this.task.length>0\">\n\n\n    <ion-chip color=\"danger\" (click)=\"filter(0)\">\n      <ion-label color=\"danger\">Generals </ion-label>\n    </ion-chip>\n\n    <ion-chip color=\"tertiary\" *ngFor=\"let t of team\">\n      <ion-label color=\"tertiary\" (click)=\"filter(t)\">{{t}}</ion-label>\n    </ion-chip>\n    <div class=\"stats\" *ngIf=\"clicked==true\">\n      <div class=\"income-card\">\n        <ion-list-header class=\"stats\">Budget</ion-list-header>\n        <div>\n          <h3>2000 DT</h3>\n        </div>\n      </div>\n\n    </div>\n    <ion-card class=\"welcome-card\" [hidden]=\"!clicked\">\n\n      <ion-card-content>\n        <canvas #lineChart></canvas>\n      </ion-card-content>\n    </ion-card>\n\n\n    <ion-card class=\"welcome-card\" [hidden]=\"!dev\">\n\n      <ion-card-content>\n        <canvas #dognut></canvas>\n      </ion-card-content>\n    </ion-card>\n\n  \n  </ion-list>\n\n    <ion-list-header>\n      Done tasks\n    </ion-list-header>\n    <ion-list>\n      <div *ngFor=\"let t of task; let i = index;\">\n        <ion-item *ngIf=\"t['state']=='done'\">\n          <ion-icon name=\"checkmark-circle\" slot=\"start\" class=\"icon\" color=\"warning\"></ion-icon>\n          <ion-badge color=\"tertiary\" slot=\"end\">{{t[\"hours\"]}} H</ion-badge>\n          <ion-label>\n            <h3 class=\"name\">{{t[\"name\"]}}</h3>\n            <p class=\"description\">{{t[\"description\"]}}</p>\n          </ion-label>\n        </ion-item>\n       \n      </div>\n      <ion-card *ngIf=\"this.task.length==0\" class=\"no-project\">\n        <ion-card-content>\n          No task done yet\n        </ion-card-content>\n      </ion-card>\n    </ion-list>\n    <ion-list-header>\n      Pending tasks\n    </ion-list-header>\n    <ion-list>\n      <div *ngFor=\"let t of task; let i = index;\">\n        <ion-item *ngIf=\"t['state']=='to do'\">\n          <ion-icon name=\"checkmark-circle\" slot=\"start\" class=\"icon\" color=\"danger\"></ion-icon>\n          <ion-badge color=\"tertiary\" slot=\"end\">{{t[\"hours\"]}} H</ion-badge>\n          <ion-label>\n            <h3 class=\"name\">{{t[\"name\"]}}</h3>\n            <p class=\"description\">{{t[\"description\"]}}</p>\n          </ion-label>\n        </ion-item>\n        <ion-item *ngIf=\"t['state']=='doing'\">\n          <ion-icon name=\"checkmark-circle\" slot=\"start\" class=\"icon\" color=\"tertiary\"></ion-icon>\n          <ion-badge color=\"tertiary\" slot=\"end\">{{t[\"hours\"]}} H</ion-badge>\n          <ion-label>\n            <h3 class=\"name\">{{t[\"name\"]}}</h3>\n            <p class=\"description\">{{t[\"description\"]}}</p>\n          </ion-label>\n        </ion-item>\n      </div>\n      </ion-list>\n\n      <ion-list-header *ngIf=\"this.task.length==0\" class=\"no-project\">\n        No task Found\n      </ion-list-header>\n\n      <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\" #fab>\n        <ion-fab-button>\n          <ion-icon name=\"add\" (click)=\"open()\"></ion-icon>\n        </ion-fab-button>\n\n      </ion-fab>\n\n</ion-content>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _task_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task.page */ "./src/app/Screens/task/task.page.ts");







const routes = [
    {
        path: '',
        component: _task_page__WEBPACK_IMPORTED_MODULE_6__["TaskPage"]
    }
];
let TaskPageModule = class TaskPageModule {
};
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



/***/ }),

/***/ "./src/app/Screens/task/task.page.scss":
/*!*********************************************!*\
  !*** ./src/app/Screens/task/task.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-back-button {\n  --color:#462373; }\n\nion-title {\n  color: #462373; }\n\n.welcome-card {\n  margin: 0 auto;\n  border: 0 !important;\n  box-shadow: none !important;\n  border: none !important;\n  border-style: none !important;\n  position: relative; }\n\n.stats .card {\n  box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.4);\n  border-radius: 6px;\n  margin: 0 auto;\n  margin-bottom: 10px;\n  height: 13%;\n  display: -webkit-box;\n  display: flex;\n  width: 80%; }\n\n.stats .card .icon {\n    width: 35%;\n    font-weight: bold;\n    color: #8e44ad; }\n\n.stats .card .value {\n    width: 65%; }\n\n.stats .card .value h1 {\n      font-weight: bold;\n      color: #8e44ad; }\n\n.modify {\n  color: #462373;\n  font-size: 25px;\n  padding-right: 15px; }\n\nion-fab-button {\n  --background: #462373; }\n\nion-list-header {\n  color: #462373;\n  font-size: 18px; }\n\n.no-project {\n  font-size: medium;\n  color: #462373; }\n\nh5 {\n  color: #462373; }\n\np {\n  color: #8395a7; }\n\nion-chip {\n  text-align: center; }\n\nion-chip ion-label {\n    text-align: center;\n    margin: 0 auto; }\n\nion-toolbar {\n  --background:#d6b0ff; }\n\n.income-card {\n  box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.4);\n  border-radius: 6px;\n  margin: 0 auto;\n  margin-bottom: 10px;\n  margin-top: 20px;\n  height: 13%;\n  width: 90%;\n  background-color: #462373; }\n\n.income-card h3 {\n    font-weight: bold;\n    margin: 0 auto;\n    margin-left: 18px;\n    font-size: 25px;\n    color: white; }\n\n.income-card ion-list-header {\n    color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvc3JhZmF0bmFzc2kvQnVyZWF1LzNpbmcvbW9iaWxlL3RlYW1fbWFuYWdlcl9hcHAvc3JjL2FwcC9TY3JlZW5zL3Rhc2svdGFzay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxlQUFRLEVBQUE7O0FBRVI7RUFDSSxjQUFhLEVBQUE7O0FBR2pCO0VBQ0ksY0FBYztFQUVWLG9CQUFvQjtFQUNwQiwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixrQkFBa0IsRUFBQTs7QUFLMUI7RUFHUSw2Q0FBNkM7RUFDN0Msa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsV0FBVTtFQUNWLG9CQUFhO0VBQWIsYUFBYTtFQUNiLFVBQVUsRUFBQTs7QUFUbEI7SUFXWSxVQUFVO0lBQ1QsaUJBQWlCO0lBQ2xCLGNBQWMsRUFBQTs7QUFiMUI7SUFpQlksVUFBVSxFQUFBOztBQWpCdEI7TUFvQmdCLGlCQUFpQjtNQUNqQixjQUFjLEVBQUE7O0FBUzlCO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxxQkFBYSxFQUFBOztBQUdqQjtFQUNJLGNBQWE7RUFDYixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxjQUFhLEVBQUE7O0FBRWpCO0VBQ0ksY0FBYyxFQUFBOztBQUVsQjtFQUVJLGtCQUFrQixFQUFBOztBQUZ0QjtJQUlRLGtCQUFrQjtJQUNsQixjQUFjLEVBQUE7O0FBSXRCO0VBQ0ksb0JBQWEsRUFBQTs7QUFFakI7RUFFSSw2Q0FBNkM7RUFDN0Msa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFdBQVU7RUFDVixVQUFVO0VBQ1YseUJBQXlCLEVBQUE7O0FBVDdCO0lBWVEsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFlBQVksRUFBQTs7QUFoQnBCO0lBbUJRLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL1NjcmVlbnMvdGFzay90YXNrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1iYWNrLWJ1dHRvbntcbi0tY29sb3I6IzQ2MjM3Mztcbn1cbmlvbi10aXRsZXtcbiAgICBjb2xvcjojNDYyMzczO1xuXG59XG4ud2VsY29tZS1jYXJke1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICBcbiAgICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1zdHlsZTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBcbiAgIFxufVxuXG4uc3RhdHN7XG4gIFxuICAgIC5jYXJke1xuICAgICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGhlaWdodDoxMyU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIC5pY29ue1xuICAgICAgICAgICAgd2lkdGg6IDM1JTtcbiAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGNvbG9yOiAjOGU0NGFkOztcblxuICAgICAgICB9XG4gICAgICAgIC52YWx1ZXtcbiAgICAgICAgICAgIHdpZHRoOiA2NSU7XG4gICAgICAgICAgICBoMXtcbiAgICAgICAgICAgICAgICAvL3RleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzhlNDRhZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuICAgXG4gXG5cbn1cbi5tb2RpZnl7XG4gICAgY29sb3I6ICM0NjIzNzM7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG59XG5pb24tZmFiLWJ1dHRvbntcbiAgICAtLWJhY2tncm91bmQ6ICM0NjIzNzM7XG5cbn1cbmlvbi1saXN0LWhlYWRlcntcbiAgICBjb2xvcjojNDYyMzczO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbi5uby1wcm9qZWN0e1xuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgIGNvbG9yOiAjNDYyMzczO1xufVxuaDV7XG4gICAgY29sb3I6IzQ2MjM3Mztcbn1cbnB7XG4gICAgY29sb3I6ICM4Mzk1YTc7XG59XG5pb24tY2hpcHtcbiAgIFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBpb24tbGFiZWx7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG5cbiAgICB9XG59XG5pb24tdG9vbGJhcntcbiAgICAtLWJhY2tncm91bmQ6I2Q2YjBmZjtcbn1cbi5pbmNvbWUtY2FyZHtcblxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGhlaWdodDoxMyU7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDYyMzczO1xuXG4gICAgaDN7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgICBpb24tbGlzdC1oZWFkZXJ7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Services_projects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/projects.service */ "./src/app/Services/projects.service.ts");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_4__);





let TaskPage = class TaskPage {
    constructor(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.cachedata = [];
        this.donetask = [];
        this.team = new Set([]);
        this.task = [];
        this.clicked = true;
        this.totalTask = [];
        this.dev = false;
        this.totalhours = 0;
        this.lefthours = 0;
        this.route.params.subscribe(params => {
            console.log(params["id"]);
            this.id = params["id"];
        });
    }
    ngOnInit() {
        this.service.getTasks(this.id).subscribe(doc => {
            let cache;
            this.task = doc.map(element => {
                var obj = JSON.parse(JSON.stringify(element.payload.doc.data()));
                this.service.getClient(obj.person).then(res => {
                    obj.person = res;
                    if (cache) {
                        if (obj.person == cache) {
                            var el = this.totalTask[this.totalTask.length - 1] + 1;
                            this.totalTask.pop(this.totalTask.length - 1);
                            this.totalTask.push(el);
                        }
                        else {
                            this.totalTask.push(1);
                        }
                    }
                    else {
                        this.totalTask.push(1);
                    }
                    this.team.add(res);
                    this.createLine();
                    cache = res;
                });
                return obj;
            });
            this.cachedata = this.task;
        });
        this.service.getDoneTasks(this.id).then(res => {
            this.donetask = res;
            this.calculProgres();
        });
    }
    calculProgres() {
        let progress = 0;
        if (this.task.length != 0) {
            if (this.donetask.length != 0) {
                progress = (this.donetask.length / this.task.length) * 100;
                this.service.updateProject(this.id, progress).then(res => {
                    console.log(res);
                });
            }
        }
    }
    color(progress) {
        if (progress == "to do") {
            return "danger";
        }
        if (progress == "doing") {
            return "tertiary";
        }
        if (progress == "done") {
            return "warning";
        }
    }
    filter(n) {
        var fil = [];
        if (n == 0) {
            this.task = this.cachedata;
            this.clicked = true;
            this.dev = false;
        }
        else {
            fil = [];
            this.clicked = false;
            this.dev = true;
            this.task = this.cachedata;
            this.totalhours = 0;
            this.lefthours = 0;
            this.task.forEach(element => {
                if (element.person == n) {
                    fil.push(element);
                    this.totalhours = Number(this.totalhours) + Number(element.hours);
                    if (element.state != 'done') {
                        this.lefthours = Number(this.lefthours) + Number(element.hours);
                    }
                    console.log(this.lefthours);
                }
            });
            this.task = fil;
            this.creatDognut();
        }
    }
    open() {
        let url = "/task-form/" + this.id;
        console.log(url);
        this.router.navigate([url]);
    }
    ionRefresh(event) {
        setTimeout(() => {
            event.target.complete();
        }, 2000);
    }
    ionPull(event) {
        console.log('ionPull Event Triggered!');
    }
    ionStart(event) {
        console.log('ionStart Event Triggered!');
    }
    openModify(id) {
        let url = "/modify-project/" + id;
        this.router.navigate([url]);
    }
    createLine() {
        this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"](this.lineChart.nativeElement, {
            type: 'line',
            data: {
                labels: Array.from(this.team),
                datasets: [{
                        data: this.totalTask,
                        label: "Number of tasks per developer",
                        borderColor: '#a55eea',
                        borderWidth: 2,
                        fill: false
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
    }
    creatDognut() {
        this.dognut = new chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"](this.dognutChart.nativeElement, {
            type: 'doughnut',
            data: {
                labels: ['Total hours', 'Hours left'],
                datasets: [{
                        label: 'Total tasks hours',
                        data: [this.totalhours, this.lefthours],
                        backgroundColor: ['#a55eea', '#f04141'],
                        borderWidth: 1
                    }]
            },
            options: {
                scales: {
                    yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                }
            }
        });
    }
};
TaskPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _Services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('lineChart', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TaskPage.prototype, "lineChart", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dognut', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], TaskPage.prototype, "dognutChart", void 0);
TaskPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task',
        template: __webpack_require__(/*! raw-loader!./task.page.html */ "./node_modules/raw-loader/index.js!./src/app/Screens/task/task.page.html"),
        styles: [__webpack_require__(/*! ./task.page.scss */ "./src/app/Screens/task/task.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _Services_projects_service__WEBPACK_IMPORTED_MODULE_3__["ProjectsService"]])
], TaskPage);



/***/ })

}]);
//# sourceMappingURL=Screens-task-task-module-es2015.js.map