(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Screens-project-details-project-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Screens/project-details/project-details.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Screens/project-details/project-details.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <div class=\"hello-card\">\n      <ion-list-header>Budget</ion-list-header>\n     <div >\n      <h3>{{project[\"cost\"]}} DT</h3>\n     </div>\n    </div>\n    <ion-card class=\"welcome-card\">\n   \n    <ion-card-content>\n      <canvas #lineChart></canvas>\n\n    </ion-card-content>\n  </ion-card>\n\n  </div>\n<div class=\"header\">\n  <ion-list-header>\n    Project informations\n  </ion-list-header>\n  <ion-item>\n   \n    <ion-icon [name]=\"icon(project['type'])\" class=\"type-icon\" slot=\"start\"></ion-icon>\n    <ion-label> \n      <h3 class=\"name\">{{project['name']}}</h3>\n     <p class=\"description\">{{project['description']}}</p>\n    </ion-label>\n  </ion-item>\n</div>\n<div class=\"tasks\">\n  \n  <div *ngIf=\"tasks.length>0\">\n    <ion-list-header>\n      Done tasks\n    </ion-list-header>\n   <ion-list >\n     <div *ngFor=\"let task of done; let i = index;\">\n      <ion-item *ngIf=\"task['state']=='done'\">\n        <ion-icon name=\"checkmark-circle\" slot=\"start\" class=\"icon\" color=\"warning\"></ion-icon>\n        <ion-badge color=\"tertiary\" slot=\"end\">{{team[i]}}</ion-badge>\n        <ion-label> \n          <h3 class=\"name\">{{task[\"name\"]}}</h3>\n         <p class=\"description\">{{task[\"description\"]}}</p>\n        </ion-label>\n      </ion-item>\n     </div>\n    \n  </ion-list>\n  <ion-list-header>\n      Pending tasks\n    </ion-list-header>\n   <ion-list>\n    <div  *ngFor=\"let task of tasks; let i = index;\">\n      <ion-item *ngIf=\"task['state']=='to do'\">\n        <ion-icon name=\"checkmark-circle\" slot=\"start\" class=\"icon\" color=\"danger\"></ion-icon>\n        <ion-badge color=\"tertiary\" slot=\"end\">{{team[i]}}</ion-badge>\n        <ion-label> \n          <h3 class=\"name\">{{task[\"name\"]}}</h3>\n         <p class=\"description\">{{task[\"description\"]}}</p>\n        </ion-label>\n      </ion-item>\n      <ion-item *ngIf=\"task['state']=='doing'\">\n        <ion-icon name=\"checkmark-circle\" slot=\"start\" class=\"icon\" color=\"tertiary\"></ion-icon>\n        <ion-badge color=\"tertiary\" slot=\"end\">{{team[i]}}</ion-badge>\n        <ion-label> \n          <h3 class=\"name\">{{task[\"name\"]}}</h3>\n         <p class=\"description\">{{task[\"description\"]}}</p>\n        </ion-label>\n      </ion-item>\n    </div>  \n    <div *ngIf=\"this.tasks.length==0\"  class=\"no-project\">\n      <ion-label>No pending tasks found  </ion-label>\n    </div> \n   </ion-list>\n  </div>\n  \n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/Models/Task.ts":
/*!********************************!*\
  !*** ./src/app/Models/Task.ts ***!
  \********************************/
/*! exports provided: Task */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Task", function() { return Task; });
class Task {
}


/***/ }),

/***/ "./src/app/Screens/project-details/project-details.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Screens/project-details/project-details.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProjectDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailsPageModule", function() { return ProjectDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _project_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-details.page */ "./src/app/Screens/project-details/project-details.page.ts");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/index.js");








const routes = [
    {
        path: '',
        component: _project_details_page__WEBPACK_IMPORTED_MODULE_6__["ProjectDetailsPage"]
    }
];
let ProjectDetailsPageModule = class ProjectDetailsPageModule {
};
ProjectDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__["NgCircleProgressModule"].forRoot({
                // set defaults here
                radius: 50,
            }),
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_project_details_page__WEBPACK_IMPORTED_MODULE_6__["ProjectDetailsPage"]]
    })
], ProjectDetailsPageModule);



/***/ }),

/***/ "./src/app/Screens/project-details/project-details.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/Screens/project-details/project-details.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-back-button {\n  --color:#462373; }\n\nion-title {\n  color: #462373; }\n\nion-toolbar {\n  --background:#d6b0ff; }\n\nion-list-header {\n  color: #462373;\n  font-size: medium; }\n\nion-card, .card-ios, .card-md {\n  border: 0 !important;\n  box-shadow: none !important;\n  border: none !important;\n  border-style: none !important;\n  position: relative; }\n\n.welcome-card {\n  margin: 0 auto; }\n\n.name {\n  font-weight: bold;\n  color: #462373; }\n\n.description {\n  font-size: 15px;\n  color: #8395a7; }\n\n.icon {\n  font-size: 25px; }\n\n.no-project {\n  font-size: medium;\n  color: #462373;\n  box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.4);\n  border-radius: 6px;\n  margin: 0 auto;\n  width: 90%;\n  height: 50px; }\n\n.type-icon {\n  font-size: 25px;\n  color: #a55eea; }\n\n.hello-card {\n  box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.4);\n  border-radius: 6px;\n  margin: 0 auto;\n  margin-bottom: 10px;\n  margin-top: 30px;\n  height: 13%;\n  width: 90%;\n  background-color: #462373; }\n\n.hello-card h3 {\n    font-weight: bold;\n    margin: 0 auto;\n    margin-left: 18px;\n    font-size: 35px;\n    color: white; }\n\n.hello-card ion-list-header {\n    color: white;\n    font-size: 18px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvc3JhZmF0bmFzc2kvQnVyZWF1LzNpbmcvbW9iaWxlL3RlYW1fbWFuYWdlcl9hcHAvc3JjL2FwcC9TY3JlZW5zL3Byb2plY3QtZGV0YWlscy9wcm9qZWN0LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBUSxFQUFBOztBQUVSO0VBQ0ksY0FBYSxFQUFBOztBQUdqQjtFQUNJLG9CQUFhLEVBQUE7O0FBSWpCO0VBQ0ksY0FBYTtFQUNiLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLG9CQUFvQjtFQUNwQiwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksaUJBQWlCO0VBQ2pCLGNBQWUsRUFBQTs7QUFHbkI7RUFDSSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLDZDQUE2QztFQUM3QyxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFVBQVU7RUFDVixZQUFXLEVBQUE7O0FBR2Y7RUFDSSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVsQjtFQUNJLDZDQUE2QztFQUM3QyxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsV0FBVTtFQUNWLFVBQVU7RUFDVix5QkFBeUIsRUFBQTs7QUFSN0I7SUFXUSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsWUFBWSxFQUFBOztBQWZwQjtJQWtCUSxZQUFXO0lBQ1gsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvU2NyZWVucy9wcm9qZWN0LWRldGFpbHMvcHJvamVjdC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1iYWNrLWJ1dHRvbntcbiAgICAtLWNvbG9yOiM0NjIzNzM7XG4gICAgfVxuICAgIGlvbi10aXRsZXtcbiAgICAgICAgY29sb3I6IzQ2MjM3MztcbiAgICBcbiAgICB9XG4gICAgaW9uLXRvb2xiYXJ7XG4gICAgICAgIC0tYmFja2dyb3VuZDojZDZiMGZmO1xuICAgIH1cbiAgICBcbiAgIFxuICAgIGlvbi1saXN0LWhlYWRlcntcbiAgICAgICAgY29sb3I6IzQ2MjM3MztcbiAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgfVxuICAgIGlvbi1jYXJkLCAuY2FyZC1pb3MsIC5jYXJkLW1kIHtcbiAgICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlci1zdHlsZTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgLndlbGNvbWUtY2FyZHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuICAgIC5uYW1le1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6ICAjNDYyMzczO1xuXG4gICAgfVxuICAgIC5kZXNjcmlwdGlvbntcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBjb2xvcjogIzgzOTVhNztcbiAgICB9XG4gICAgLmljb257XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICB9XG4gICAgLm5vLXByb2plY3R7XG4gICAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xuICAgICAgICBjb2xvcjogIzQ2MjM3MztcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBoZWlnaHQ6NTBweDtcbiAgICAgICAgXG4gICAgfVxuICAgIC50eXBlLWljb257XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgY29sb3I6I2E1NWVlYSA7XG4gICAgfVxuICAgIC5oZWxsby1jYXJke1xuICAgICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIGhlaWdodDoxMyU7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0NjIzNzM7XG4gICAgXG4gICAgICAgIGgze1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxOHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIGlvbi1saXN0LWhlYWRlcntcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB9XG4gICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/Screens/project-details/project-details.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Screens/project-details/project-details.page.ts ***!
  \*****************************************************************/
/*! exports provided: ProjectDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailsPage", function() { return ProjectDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Services_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/projects.service */ "./src/app/Services/projects.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Models_Project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Models/Project */ "./src/app/Models/Project.ts");
/* harmony import */ var _Models_Task__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Models/Task */ "./src/app/Models/Task.ts");







let ProjectDetailsPage = class ProjectDetailsPage {
    constructor(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.project = new _Models_Project__WEBPACK_IMPORTED_MODULE_5__["Project"]();
        this.tasks = [];
        this.team = [];
        this.done = [];
        this.doing = [];
        this.to_do = [];
        this.data = [];
        this.route.params.subscribe(params => {
            console.log(params["id"]);
            this.id = params["id"];
        });
    }
    ngOnInit() {
        let p = new _Models_Project__WEBPACK_IMPORTED_MODULE_5__["Project"]();
        let t = new _Models_Task__WEBPACK_IMPORTED_MODULE_6__["Task"]();
        this.service.getProject(this.id).then(res => {
            p = res;
            this.project = p;
        });
        this.service.getTasks(this.id).forEach(task => {
            task.forEach(task => {
                var obj = JSON.parse(JSON.stringify(task.payload.doc.data()));
                t = obj;
                if (t['state'] != "done") {
                    this.tasks.push(t);
                    if (t['state'] == 'to do') {
                        this.to_do.push(t);
                    }
                    else {
                        this.doing.push(t);
                    }
                }
                else {
                    this.done.push(t);
                }
                this.data = [this.to_do.length, this.doing.length, this.done.length];
                this.createLineChart();
                this.service.getClient(t.person).then(res => {
                    this.team.push(res);
                });
            });
        });
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
    createLineChart() {
        this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"](this.lineChart.nativeElement, {
            type: 'line',
            data: {
                labels: ['to do', 'doing', 'done'],
                datasets: [{
                        fill: false,
                        borderColor: '#a55eea',
                        data: this.data,
                        borderWidth: 2
                    }]
            },
            options: {
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                            display: true
                        }],
                    yAxes: [{
                            display: true,
                            stacked: true
                        }],
                }
            }
        });
    }
};
ProjectDetailsPage.ctorParameters = () => [
    { type: _Services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('lineChart', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ProjectDetailsPage.prototype, "lineChart", void 0);
ProjectDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project-details',
        template: __webpack_require__(/*! raw-loader!./project-details.page.html */ "./node_modules/raw-loader/index.js!./src/app/Screens/project-details/project-details.page.html"),
        styles: [__webpack_require__(/*! ./project-details.page.scss */ "./src/app/Screens/project-details/project-details.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_Services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], ProjectDetailsPage);



/***/ })

}]);
//# sourceMappingURL=Screens-project-details-project-details-module-es2015.js.map