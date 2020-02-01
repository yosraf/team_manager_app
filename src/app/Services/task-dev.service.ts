import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TaskDevService {

  ids: any = [];
  constructor(private afs: AngularFirestore) {
  }

  AsyncProjects() {

    return this.afs.collection('projects').snapshotChanges();;
  }

  getProjects() {
    let projects_id = [];

    let projects = [];
    let cache = "";

    let uid = firebase.auth().currentUser.uid;
    return new Promise<any>((resolve, reject) => {
      this.afs.collection("projects").get().subscribe(res => {
        res.forEach(doc => {

          this.afs.collection("projects").doc(doc.id).collection("tasks").get().forEach(res => {


            res.docs.forEach(d => {


              var obj = JSON.parse(JSON.stringify(d.data()));

              if (obj['person'] == uid) {

                projects_id.push(doc.id)
                this.afs.collection("projects").doc(doc.id).get().forEach(e => {

                  var obj = JSON.parse(JSON.stringify(e.data()));
                  var p = {
                    "name": obj.name,
                    "description": obj.description,
                    "type": obj.type,
                    "id": doc.id,
                    "cost": obj.cost,
                    "manager": obj.manager,
                    "progress": obj.progress
                  }


                  if (cache == "") {
                    projects.push(p);
                    console.log("ok")
                  }
                  else if (cache != p.id) {
                    projects.push(p);
                    console.log(cache)
                  }



                  cache = p.id;




                })


              }



            })
          });

        })
      })

      resolve(projects)
    });


  }

  getTasks(id) {

    return this.afs.collection('projects').doc(id).collection('tasks').snapshotChanges();




  }

  getClient(id) {
    return new Promise<any>((resolve, reject) => {
      let client: any;

      this.afs.collection('users').get().forEach(doc => {

        doc.docs.forEach(d => {

          var obj = JSON.parse(JSON.stringify(d.data()));
          if (obj['uid'] == id) {

            client = obj['username'];

          }

        })

      })

        .then(
          res => {
            resolve(client)
          },
          err => reject(err)
        )
    })

  }
  getProjectNames() {
    let projects_names = [];
    let uid = firebase.auth().currentUser.uid;

    this.afs.collection("projects").get().subscribe(res => {
      res.forEach(doc => {

        this.afs.collection("projects").doc(doc.id).collection("tasks").get().forEach(res => {
          res.docs.forEach(d => {

            var obj = JSON.parse(JSON.stringify(d.data()));

            if (obj['person'] == uid) {

              this.afs.collection("projects").doc(doc.id).get().forEach(e => {

                var obj = JSON.parse(JSON.stringify(e.data()));
                var p = {
                  "name": obj.name,

                }
                projects_names.push(p["name"]);

              })

            }


          })
        })


      })
    })

    return new Promise<any>((resolve, reject) => {
      resolve(projects_names)
    });

  }

  getProjectProgess() {
    let projects_progress = [];
    let uid = firebase.auth().currentUser.uid;
    this.afs.collection("projects").get().subscribe(res => {
      res.forEach(doc => {

        this.afs.collection("projects").doc(doc.id).collection("tasks").get().forEach(res => {

          res.docs.forEach(d => {

            var obj = JSON.parse(JSON.stringify(d.data()));

            if (obj['person'] == uid) {

              this.afs.collection("projects").doc(doc.id).get().forEach(e => {

                var obj = JSON.parse(JSON.stringify(e.data()));
                var p = {

                  "progress": obj.progress
                }
                projects_progress.push(p["progress"]);




              })

            }


          })
        })


      })
    })



    return new Promise<any>((resolve, reject) => {
      resolve(projects_progress)
    });

  }

  update(id, state) {
    return new Promise<any>((resolve, reject) => {
      this.afs.collection("projects").doc(id).collection("tasks").doc(id).update({
        "state": state
      })
        .then(
          res => {
            resolve(res)
          },
          err => reject(err)
        )
    })
  }

}
