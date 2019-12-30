import { Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
import {AngularFirestore }from '@angular/fire/firestore';
import { FCM } from '@ionic-native/fcm/ngx';
import { Platform } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  constructor(private afs: AngularFirestore,private fcm: FCM,
    private platform: Platform) { 
     
  }
  async getToken() {
    let token;

    if (this.platform.is('android')) {
      token = await this.fcm.getToken();
    }

    if (this.platform.is('ios')) {
      token = await this.fcm.getToken();
      await this.fcm.hasPermission();
    }

    return token;
  }

  registerUser(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().
      createUserWithEmailAndPassword(value.email, value.password)
      .then(
        
        res => resolve(res),
        err => reject(err))
    })
   }
   createUser(value){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.getToken().then(
        token=>{
          this.afs.collection('users').add({
            uid:currentUser.uid,
            username: value.username,
            role: value.role,
            image:null,
            phone:null,
            token:token
          })
          .then(
            res => {
              resolve(currentUser.uid)
            },
            err => reject(err)
          )
        }
      );
      
    })
     
   }
   loginUser(value){
    return new Promise<any>((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(value.email, value.password)
      .then(
        res => {
          resolve(res)
        },
        err => reject(err))
    })
   }
   getUser(){
     let value= firebase.auth().currentUser.uid;

    return new Promise<any>((resolve, reject) => {
      this.afs.collection('users').get().forEach(doc=>{
       
        doc.docs.forEach(d=>{
          var obj = JSON.parse(JSON.stringify(d.data()));
          if(obj['uid']==value){
            resolve(obj);
          }

        })

      });
    })
   }
   getUsers(){
    return this.afs.collection("users").snapshotChanges();
  }
}
