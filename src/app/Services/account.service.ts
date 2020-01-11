import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import {AngularFirestore }from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private afs: AngularFirestore) { }
  updateEmail(email){
    firebase.auth().currentUser.updateEmail(email);
  }
  updatePassword(password){
    firebase.auth().currentUser.updateEmail(password);

  }
  updatePhone(phone){
    let value= firebase.auth().currentUser.uid;

    this.afs.collection('users').get().forEach(doc=>{
       
      doc.docs.forEach(d=>{
        var obj = JSON.parse(JSON.stringify(d.data()));
        if(obj['uid']==value){
          d.ref.update({phone:phone});
        }

      });

    });
  

  }
  updateImage(image,typeimg){
    let value= firebase.auth().currentUser.uid;
    const storageRef=firebase.storage().ref(`/images-profiles/${value}.${typeimg}`);
    storageRef.putString(image, 'base64', { contentType: `image/${typeimg}` })
    .then(() => {
      return storageRef.getDownloadURL().then(downloadURL => {
        this.afs.collection('users').get().forEach(doc=>{
       
          doc.docs.forEach(d=>{
            var obj = JSON.parse(JSON.stringify(d.data()));
            if(obj['uid']==value){
              d.ref.update({image:downloadURL});
            }
    
          });
    
        });
       
      });
    });

  }
}
