(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Screens-client-propositions-client-propositions-module~Screens-homes-homes-module~Screens-mo~a4fb3311"],{

/***/ "./src/app/Models/Project.ts":
/*!***********************************!*\
  !*** ./src/app/Models/Project.ts ***!
  \***********************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
var Project = /** @class */ (function () {
    function Project() {
    }
    return Project;
}());



/***/ }),

/***/ "./src/app/Services/projects.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Services/projects.service.ts ***!
  \**********************************************/
/*! exports provided: ProjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsService", function() { return ProjectsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _app_Models_Project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/Models/Project */ "./src/app/Models/Project.ts");





var ProjectsService = /** @class */ (function () {
    function ProjectsService(afs) {
        this.afs = afs;
    }
    ProjectsService.prototype.createProject = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var currentUser = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser;
            _this.afs.collection('projects').add({
                manager: currentUser.uid,
                name: value.name,
                description: value.description,
                type: value.type,
                client: value.client,
                progress: 0,
                cost: value.cost
            })
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    ProjectsService.prototype.AsyncProjects = function () {
        return this.afs.collection('projects').snapshotChanges();
    };
    ProjectsService.prototype.AsyncPropositions = function () {
        return this.afs.collection('propositions').snapshotChanges();
    };
    ProjectsService.prototype.getProjects = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var value = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser;
            var projects = [];
            var project = new _app_Models_Project__WEBPACK_IMPORTED_MODULE_4__["Project"]();
            _this.afs.collection('projects').get().forEach(function (doc) {
                doc.docs.forEach(function (d) {
                    var obj = JSON.parse(JSON.stringify(d.data()));
                    if (obj['manager'] == value.uid) {
                        project = obj;
                        projects.push(project);
                    }
                });
            })
                .then(function (res) {
                resolve(projects);
            }, function (err) { return reject(err); });
        });
    };
    ProjectsService.prototype.createTask = function (value, id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afs.collection('projects').doc(id).collection("tasks").add({
                state: "to do",
                name: value.Name,
                description: value.Description,
                person: value.Person,
                hours: value.Hours
            })
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    ProjectsService.prototype.getTasks = function (id) {
        return this.afs.collection('projects').doc(id).collection('tasks').snapshotChanges();
    };
    ProjectsService.prototype.getClients = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var clients = [];
            _this.afs.collection('users').get().forEach(function (doc) {
                doc.docs.forEach(function (d) {
                    var obj = JSON.parse(JSON.stringify(d.data()));
                    if (obj['role'] == "client") {
                        clients.push(obj);
                    }
                });
            })
                .then(function (res) {
                resolve(clients);
            }, function (err) { return reject(err); });
        });
    };
    ProjectsService.prototype.getDevs = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var devs = [];
            _this.afs.collection('users').get().forEach(function (doc) {
                doc.docs.forEach(function (d) {
                    var obj = JSON.parse(JSON.stringify(d.data()));
                    if (obj['role'] == "developer") {
                        devs.push(obj);
                    }
                });
            })
                .then(function (res) {
                resolve(devs);
            }, function (err) { return reject(err); });
        });
    };
    ProjectsService.prototype.getClientProjects = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var value = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser;
            var projects = [];
            var project = new _app_Models_Project__WEBPACK_IMPORTED_MODULE_4__["Project"]();
            _this.afs.collection('projects').get().forEach(function (doc) {
                doc.docs.forEach(function (d) {
                    var obj = JSON.parse(JSON.stringify(d.data()));
                    if (obj['client'] == value.uid) {
                        project = obj;
                        project.id = d.id;
                        projects.push(project);
                    }
                });
            })
                .then(function (res) {
                resolve(projects);
            }, function (err) { return reject(err); });
        });
    };
    ProjectsService.prototype.getManagers = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var managers = [];
            _this.afs.collection('users').get().forEach(function (doc) {
                doc.docs.forEach(function (d) {
                    var obj = JSON.parse(JSON.stringify(d.data()));
                    if (obj['role'] == "manager") {
                        console.log(obj);
                        managers.push(obj);
                    }
                });
            })
                .then(function (res) {
                resolve(managers);
            }, function (err) { return reject(err); });
        });
    };
    ProjectsService.prototype.createProposition = function (value, filetoupload) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var uid, storageRef, uplaodtask, urlFile;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log(filetoupload);
                        uid = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
                        storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref("/pdf/uid/" + filetoupload.name + ".pdf");
                        return [4 /*yield*/, storageRef.put(filetoupload.data, { contentType: "application/pdf" })];
                    case 1:
                        uplaodtask = _a.sent();
                        return [4 /*yield*/, uplaodtask.ref.getDownloadURL()];
                    case 2:
                        urlFile = (_a.sent());
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                var currentUser = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser;
                                _this.afs.collection('propositions').add({
                                    name: value.Name,
                                    description: value.Description,
                                    type: value.Type,
                                    state: 'not treated',
                                    client: currentUser.uid,
                                    file: urlFile
                                })
                                    .then(function (res) {
                                    resolve(res);
                                }, function (err) { return reject(err); });
                            })];
                }
            });
        });
    };
    ProjectsService.prototype.getClient = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var client;
            _this.afs.collection('users').get().forEach(function (doc) {
                doc.docs.forEach(function (d) {
                    var obj = JSON.parse(JSON.stringify(d.data()));
                    if (obj['uid'] == id) {
                        client = obj['username'];
                    }
                });
            })
                .then(function (res) {
                resolve(client);
            }, function (err) { return reject(err); });
        });
    };
    ProjectsService.prototype.deletePropostion = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afs.collection("propositions").doc(id).delete().then(function (res) {
                resolve(res);
            });
        });
    };
    ProjectsService.prototype.deleteProject = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afs.collection("projects").doc(id).delete().then(function (res) {
                resolve(res);
            });
        });
    };
    ProjectsService.prototype.declinePropositon = function (value) {
        var _this = this;
        var user = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser;
        return new Promise(function (resolve, reject) {
            _this.afs.collection("refusedprops").add({
                manager: user.uid,
                name: value.name,
                description: value.description,
                type: value.type,
                client: value.client,
            }).then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    ProjectsService.prototype.getRejections = function () {
        return this.afs.collection("refusedprops").snapshotChanges();
    };
    ProjectsService.prototype.getDoneTasks = function (id) {
        var _this = this;
        var tasks = [];
        return new Promise(function (resolve, reject) {
            _this.afs.collection("projects").doc(id).collection("tasks").get().forEach(function (res) {
                res.docs.forEach(function (d) {
                    var obj = JSON.parse(JSON.stringify(d.data()));
                    if (obj['state'] == "done") {
                        tasks.push(obj);
                    }
                });
            })
                .then(function (res) {
                resolve(tasks);
            }, function (err) { return reject(err); });
        });
    };
    ProjectsService.prototype.updateProject = function (id, progress) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afs.collection("projects").doc(id).update({
                'progress': progress
            })
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    ProjectsService.prototype.getProject = function (id) {
        var _this = this;
        var project = new _app_Models_Project__WEBPACK_IMPORTED_MODULE_4__["Project"]();
        var result;
        return new Promise(function (resolve, reject) {
            _this.afs.collection('projects').get().forEach(function (doc) {
                doc.docs.forEach(function (d) {
                    if (d.id == id) {
                        var obj = JSON.parse(JSON.stringify(d.data()));
                        project = obj;
                        project.id = d.id;
                        result = project;
                    }
                });
            })
                .then(function (res) {
                resolve(result);
            }, function (err) { return reject(err); });
        });
    };
    ProjectsService.prototype.update = function (value, id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.afs.collection('projects').doc(id).update({
                "name": value.name,
                "description": value.description,
                "type": value.type,
                "client": value.client,
                "manager": value.manager,
                "progress": value.progress
            })
                .then(function (res) {
                resolve(res);
            }, function (err) { return reject(err); });
        });
    };
    ProjectsService.prototype.updateProposition = function (value, file, id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var uid, storageRef, uplaodtask, urlFile;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        uid = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
                        storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref("/pdf/uid/" + file.name + ".pdf");
                        return [4 /*yield*/, storageRef.put(file.data, { contentType: "application/pdf" })];
                    case 1:
                        uplaodtask = _a.sent();
                        return [4 /*yield*/, uplaodtask.ref.getDownloadURL()];
                    case 2:
                        urlFile = (_a.sent());
                        return [2 /*return*/, new Promise(function (resolve, reject) {
                                _this.afs.collection('propositions').doc(id).update({
                                    "name": value.name,
                                    "description": value.description,
                                    "type": value.type,
                                    "file": urlFile
                                })
                                    .then(function (res) {
                                    resolve(res);
                                }, function (err) { return reject(err); });
                            })];
                }
            });
        });
    };
    ProjectsService.prototype.uploadFile = function (file) {
        var storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref();
        return new Promise(function (resolve, reject) {
            storageRef.put(file).then(function (snapshot) {
                console.log('Uploaded a blob or file!');
            });
        });
    };
    ProjectsService.prototype.getPropositionDetail = function (id) {
        return this.afs.collection('propositions').doc(id).snapshotChanges();
    };
    ProjectsService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }
    ]; };
    ProjectsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], ProjectsService);
    return ProjectsService;
}());



/***/ })

}]);
//# sourceMappingURL=default~Screens-client-propositions-client-propositions-module~Screens-homes-homes-module~Screens-mo~a4fb3311-es5.js.map