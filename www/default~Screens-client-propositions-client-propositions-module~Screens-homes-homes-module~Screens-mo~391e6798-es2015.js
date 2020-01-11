(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Screens-client-propositions-client-propositions-module~Screens-homes-homes-module~Screens-mo~391e6798"],{

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");




let ProjectsService = class ProjectsService {
    constructor(afs) {
        this.afs = afs;
    }
    createProject(value) {
        return new Promise((resolve, reject) => {
            let currentUser = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser;
            this.afs.collection('projects').add({
                manager: currentUser.uid,
                name: value.name,
                description: value.description,
                type: value.type,
                client: value.client,
                progress: 0,
                cost: value.cost
            })
                .then(res => {
                resolve(res);
            }, err => reject(err));
        });
    }
    AsyncProjects() {
        return this.afs.collection('projects').snapshotChanges();
        ;
    }
    AsyncPropositions() {
        return this.afs.collection('propositions').snapshotChanges();
    }
    getProjects() {
        return new Promise((resolve, reject) => {
            let value = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser;
            let projects = [];
            let project = {};
            this.afs.collection('projects').get().forEach(doc => {
                doc.docs.forEach(d => {
                    var obj = JSON.parse(JSON.stringify(d.data()));
                    if (obj['manager'] == value.uid) {
                        project = {
                            "name": obj.name,
                            "description": obj.description,
                            "manager": obj.manager,
                            "client": obj.client,
                            "progress": obj.progress,
                            "type": obj.type,
                            "id": d.id
                        };
                        projects.push(project);
                    }
                });
            })
                .then(res => {
                resolve(projects);
            }, err => reject(err));
        });
    }
    createTask(value, id) {
        return new Promise((resolve, reject) => {
            this.afs.collection('projects').doc(id).collection("tasks").add({
                state: "to do",
                name: value.Name,
                description: value.Description,
                person: value.Person,
                hours: value.Hours
            })
                .then(res => {
                resolve(res);
            }, err => reject(err));
        });
    }
    getTasks(id) {
        return this.afs.collection('projects').doc(id).collection('tasks').snapshotChanges();
    }
    getClients() {
        return new Promise((resolve, reject) => {
            let clients = [];
            this.afs.collection('users').get().forEach(doc => {
                doc.docs.forEach(d => {
                    var obj = JSON.parse(JSON.stringify(d.data()));
                    if (obj['role'] == "client") {
                        clients.push(obj);
                    }
                });
            })
                .then(res => {
                resolve(clients);
            }, err => reject(err));
        });
    }
    getDevs() {
        return new Promise((resolve, reject) => {
            let devs = [];
            this.afs.collection('users').get().forEach(doc => {
                doc.docs.forEach(d => {
                    var obj = JSON.parse(JSON.stringify(d.data()));
                    if (obj['role'] == "developer") {
                        devs.push(obj);
                    }
                });
            })
                .then(res => {
                resolve(devs);
            }, err => reject(err));
        });
    }
    getClientProjects() {
        return new Promise((resolve, reject) => {
            let value = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser;
            let projects = [];
            let project = {};
            this.afs.collection('projects').get().forEach(doc => {
                doc.docs.forEach(d => {
                    var obj = JSON.parse(JSON.stringify(d.data()));
                    if (obj['client'] == value.uid) {
                        project = {
                            "name": obj.name,
                            "description": obj.description,
                            "manager": obj.manager,
                            "client": obj.client,
                            "progress": obj.progress,
                            "type": obj.type,
                            "id": d.id
                        };
                        projects.push(project);
                    }
                });
            })
                .then(res => {
                resolve(projects);
            }, err => reject(err));
        });
    }
    getManagers() {
        return new Promise((resolve, reject) => {
            let managers = [];
            this.afs.collection('users').get().forEach(doc => {
                doc.docs.forEach(d => {
                    var obj = JSON.parse(JSON.stringify(d.data()));
                    if (obj['role'] == "manager") {
                        console.log(obj);
                        managers.push(obj);
                    }
                });
            })
                .then(res => {
                resolve(managers);
            }, err => reject(err));
        });
    }
    createProposition(value, filetoupload) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(filetoupload);
            let uid = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser.uid;
            const storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref(`/pdf/uid/${filetoupload.name}.pdf`);
            var uplaodtask = yield storageRef.put(filetoupload.data, { contentType: `application/pdf` });
            var urlFile = (yield uplaodtask.ref.getDownloadURL());
            return new Promise((resolve, reject) => {
                let currentUser = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser;
                this.afs.collection('propositions').add({
                    name: value.Name,
                    description: value.Description,
                    type: value.Type,
                    state: 'not treated',
                    client: currentUser.uid,
                    file: urlFile
                })
                    .then(res => {
                    resolve(res);
                }, err => reject(err));
            });
        });
    }
    getClient(id) {
        return new Promise((resolve, reject) => {
            let client;
            this.afs.collection('users').get().forEach(doc => {
                doc.docs.forEach(d => {
                    var obj = JSON.parse(JSON.stringify(d.data()));
                    if (obj['uid'] == id) {
                        client = obj['username'];
                    }
                });
            })
                .then(res => {
                resolve(client);
            }, err => reject(err));
        });
    }
    deletePropostion(id) {
        return new Promise((resolve, reject) => {
            this.afs.collection("propositions").doc(id).delete().then((res) => {
                resolve(res);
            });
        });
    }
    deleteProject(id) {
        return new Promise((resolve, reject) => {
            this.afs.collection("projects").doc(id).delete().then((res) => {
                resolve(res);
            });
        });
    }
    declinePropositon(value) {
        let user = firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"]().currentUser;
        return new Promise((resolve, reject) => {
            this.afs.collection("refusedprops").add({
                manager: user.uid,
                name: value.name,
                description: value.description,
                type: value.type,
                client: value.client,
            }).then(res => {
                resolve(res);
            }, err => reject(err));
        });
    }
    getRejections() {
        return this.afs.collection("refusedprops").snapshotChanges();
    }
    getDoneTasks(id) {
        let tasks = [];
        return new Promise((resolve, reject) => {
            this.afs.collection("projects").doc(id).collection("tasks").get().forEach((res) => {
                res.docs.forEach(d => {
                    var obj = JSON.parse(JSON.stringify(d.data()));
                    if (obj['state'] == "done") {
                        tasks.push(obj);
                    }
                });
            })
                .then(res => {
                resolve(tasks);
            }, err => reject(err));
        });
    }
    updateProject(id, progress) {
        return new Promise((resolve, reject) => {
            this.afs.collection("projects").doc(id).update({
                'progress': progress
            })
                .then(res => {
                resolve(res);
            }, err => reject(err));
        });
    }
    getProject(id) {
        let project;
        let result;
        return new Promise((resolve, reject) => {
            this.afs.collection('projects').get().forEach(doc => {
                doc.docs.forEach(d => {
                    if (d.id == id) {
                        var obj = JSON.parse(JSON.stringify(d.data()));
                        project = {
                            "name": obj.name,
                            "description": obj.description,
                            "manager": obj.manager,
                            "client": obj.client,
                            "progress": obj.progress,
                            "type": obj.type,
                            "id": d.id
                        };
                        result = project;
                    }
                });
            })
                .then(res => {
                resolve(result);
            }, err => reject(err));
        });
    }
    update(value, id) {
        return new Promise((resolve, reject) => {
            this.afs.collection('projects').doc(id).update({
                "name": value.name,
                "description": value.description,
                "type": value.type,
                "client": value.client,
                "manager": value.manager,
                "progress": value.progress
            })
                .then(res => {
                resolve(res);
            }, err => reject(err));
        });
    }
    uploadFile(file) {
        let storageRef = firebase_app__WEBPACK_IMPORTED_MODULE_2__["storage"]().ref();
        return new Promise((resolve, reject) => {
            storageRef.put(file).then(function (snapshot) {
                console.log('Uploaded a blob or file!');
            });
        });
    }
};
ProjectsService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"] }
];
ProjectsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
], ProjectsService);



/***/ })

}]);
//# sourceMappingURL=default~Screens-client-propositions-client-propositions-module~Screens-homes-homes-module~Screens-mo~391e6798-es2015.js.map