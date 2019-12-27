import { Injectable} from '@angular/core';
import * as firebase from 'firebase/app';
import {AngularFirestore }from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  constructor(private afs: AngularFirestore) { 
     
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
      this.afs.collection('users').add({
        uid:currentUser.uid,
        username: value.username,
        role: value.role,
        image:null,
        phone:null
      })
      .then(
        res => {
          resolve(currentUser.uid)
        },
        err => reject(err)
      )
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
 
}
