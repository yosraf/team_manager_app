(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Screens-project-details-project-details-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Screens/project-details/project-details.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Screens/project-details/project-details.page.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <ion-list-header>Statistics</ion-list-header>\n    <ion-card class=\"welcome-card\">\n   \n    <ion-card-content>\n      <canvas #lineChart></canvas>\n\n    </ion-card-content>\n  </ion-card>\n\n  </div>\n<div class=\"header\">\n  <ion-list-header>\n    Project informations\n  </ion-list-header>\n  <ion-item>\n   \n    <ion-icon [name]=\"icon(project['type'])\" class=\"type-icon\" slot=\"start\"></ion-icon>\n    <ion-label> \n      <h3 class=\"name\">{{project['name']}}</h3>\n     <p class=\"description\">{{project['description']}}</p>\n    </ion-label>\n  </ion-item>\n</div>\n<div class=\"tasks\">\n  \n  <div *ngIf=\"tasks.length>0\">\n    <ion-list-header>\n      Done tasks\n    </ion-list-header>\n   <ion-list >\n     <div *ngFor=\"let task of done; let i = index;\">\n      <ion-item *ngIf=\"task['state']=='done'\">\n        <ion-icon name=\"checkmark-circle\" slot=\"start\" class=\"icon\" color=\"warning\"></ion-icon>\n        <ion-badge color=\"tertiary\" slot=\"end\">{{team[i]}}</ion-badge>\n        <ion-label> \n          <h3 class=\"name\">{{task[\"name\"]}}</h3>\n         <p class=\"description\">{{task[\"description\"]}}</p>\n        </ion-label>\n      </ion-item>\n     </div>\n     <ion-card *ngIf=\"this.done.length==0\"  class=\"no-project\">\n      <ion-card-content>\n        No task done yet\n      </ion-card-content>\n  </ion-card>\n  </ion-list>\n  <ion-list-header>\n      Pending tasks\n    </ion-list-header>\n   <ion-list>\n    <div  *ngFor=\"let task of tasks; let i = index;\">\n      <ion-item *ngIf=\"task['state']=='to do'\">\n        <ion-icon name=\"checkmark-circle\" slot=\"start\" class=\"icon\" color=\"danger\"></ion-icon>\n        <ion-badge color=\"tertiary\" slot=\"end\">{{team[i]}}</ion-badge>\n        <ion-label> \n          <h3 class=\"name\">{{task[\"name\"]}}</h3>\n         <p class=\"description\">{{task[\"description\"]}}</p>\n        </ion-label>\n      </ion-item>\n      <ion-item *ngIf=\"task['state']=='doing'\">\n        <ion-icon name=\"checkmark-circle\" slot=\"start\" class=\"icon\" color=\"tertiary\"></ion-icon>\n        <ion-badge color=\"tertiary\" slot=\"end\">{{team[i]}}</ion-badge>\n        <ion-label> \n          <h3 class=\"name\">{{task[\"name\"]}}</h3>\n         <p class=\"description\">{{task[\"description\"]}}</p>\n        </ion-label>\n      </ion-item>\n    </div>  \n    <ion-card *ngIf=\"this.tasks.length==0\"  class=\"no-project\">\n      <ion-card-content>\n        No tasks Found\n      </ion-card-content>\n  </ion-card> \n   </ion-list>\n  </div>\n  \n</div>\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _project_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./project-details.page */ "./src/app/Screens/project-details/project-details.page.ts");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/index.js");








var routes = [
    {
        path: '',
        component: _project_details_page__WEBPACK_IMPORTED_MODULE_6__["ProjectDetailsPage"]
    }
];
var ProjectDetailsPageModule = /** @class */ (function () {
    function ProjectDetailsPageModule() {
    }
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
    return ProjectDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/Screens/project-details/project-details.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/Screens/project-details/project-details.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-back-button {\n  --color:#462373; }\n\nion-title {\n  color: #462373; }\n\nion-toolbar {\n  --background:#d6b0ff; }\n\nion-list-header {\n  color: #462373;\n  font-size: medium; }\n\nion-card, .card-ios, .card-md {\n  border: 0 !important;\n  box-shadow: none !important;\n  border: none !important;\n  border-style: none !important;\n  position: relative; }\n\n.welcome-card {\n  margin: 0 auto; }\n\n.name {\n  font-weight: bold;\n  color: #462373; }\n\n.description {\n  font-size: 15px;\n  color: #8395a7; }\n\n.icon {\n  font-size: 25px; }\n\n.no-project {\n  font-size: medium;\n  color: #462373; }\n\n.type-icon {\n  font-size: 25px;\n  color: #a55eea; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3lvc3JhZmF0bmFzc2kvQnVyZWF1LzNpbmcvbW9iaWxlL3RlYW1fbWFuYWdlcl9hcHAvc3JjL2FwcC9TY3JlZW5zL3Byb2plY3QtZGV0YWlscy9wcm9qZWN0LWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBUSxFQUFBOztBQUVSO0VBQ0ksY0FBYSxFQUFBOztBQUdqQjtFQUNJLG9CQUFhLEVBQUE7O0FBSWpCO0VBQ0ksY0FBYTtFQUNiLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLG9CQUFvQjtFQUNwQiwyQkFBMkI7RUFDM0IsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksaUJBQWlCO0VBQ2pCLGNBQWUsRUFBQTs7QUFHbkI7RUFDSSxlQUFlO0VBQ2YsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUVsQjtFQUNJLGVBQWU7RUFDZixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9TY3JlZW5zL3Byb2plY3QtZGV0YWlscy9wcm9qZWN0LWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJhY2stYnV0dG9ue1xuICAgIC0tY29sb3I6IzQ2MjM3MztcbiAgICB9XG4gICAgaW9uLXRpdGxle1xuICAgICAgICBjb2xvcjojNDYyMzczO1xuICAgIFxuICAgIH1cbiAgICBpb24tdG9vbGJhcntcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiNkNmIwZmY7XG4gICAgfVxuICAgIFxuICAgXG4gICAgaW9uLWxpc3QtaGVhZGVye1xuICAgICAgICBjb2xvcjojNDYyMzczO1xuICAgICAgICBmb250LXNpemU6IG1lZGl1bTtcbiAgICB9XG4gICAgaW9uLWNhcmQsIC5jYXJkLWlvcywgLmNhcmQtbWQge1xuICAgICAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cbiAgICAud2VsY29tZS1jYXJke1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgLm5hbWV7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogICM0NjIzNzM7XG5cbiAgICB9XG4gICAgLmRlc2NyaXB0aW9ue1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIGNvbG9yOiAjODM5NWE3O1xuICAgIH1cbiAgICAuaWNvbntcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgIH1cbiAgICAubm8tcHJvamVjdHtcbiAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgICAgIGNvbG9yOiAjNDYyMzczO1xuICAgIH1cbiAgICAudHlwZS1pY29ue1xuICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgIGNvbG9yOiNhNTVlZWEgO1xuICAgIH0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_projects_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Services/projects.service */ "./src/app/Services/projects.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_4__);





var ProjectDetailsPage = /** @class */ (function () {
    function ProjectDetailsPage(service, route, router) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.router = router;
        this.project = {};
        this.tasks = [];
        this.team = [];
        this.done = [];
        this.doing = [];
        this.to_do = [];
        this.data = [];
        this.route.params.subscribe(function (params) {
            console.log(params["id"]);
            _this.id = params["id"];
        });
    }
    ProjectDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getProject(this.id).then(function (res) {
            var p = {
                "name": res.name,
                "description": res.description,
                "client": res.client,
                "manager": res.manager,
                "type": res.type,
                "progress": res.progress
            };
            _this.project = p;
        });
        this.service.getTasks(this.id).forEach(function (task) {
            task.forEach(function (t) {
                var obj = JSON.parse(JSON.stringify(t.payload.doc.data()));
                var p = {
                    "name": obj.name,
                    "description": obj.description,
                    "person": obj.person,
                    "state": obj.state
                };
                if (p['state'] != "done") {
                    _this.tasks.push(p);
                    if (p['state'] == 'to do') {
                        _this.to_do.push(p);
                    }
                    else {
                        _this.doing.push(p);
                    }
                }
                else {
                    _this.done.push(p);
                }
                _this.data = [_this.to_do.length, _this.doing.length, _this.done.length];
                _this.createLineChart();
                _this.service.getClient(p.person).then(function (res) {
                    _this.team.push(res);
                });
            });
        });
    };
    ProjectDetailsPage.prototype.icon = function (type) {
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
    ProjectDetailsPage.prototype.createLineChart = function () {
        this.chart = new chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"](this.lineChart.nativeElement, {
            type: 'line',
            data: {
                labels: ['to do', 'doing', 'doine'],
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
    };
    ProjectDetailsPage.ctorParameters = function () { return [
        { type: _Services_projects_service__WEBPACK_IMPORTED_MODULE_2__["ProjectsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
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
    return ProjectDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=Screens-project-details-project-details-module-es5.js.map