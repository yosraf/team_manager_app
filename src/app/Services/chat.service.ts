import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  COLLECTIONMESSAGE: string = "messagerie";
  MESSAGES: string = "messages";

  constructor(private afs: AngularFirestore) {

  }

  AsyncMessages(user2: string) {
    let currentUser = firebase.auth().currentUser;
    var iddoc = `${currentUser.uid}_${user2}`;
    return this.afs.collection(this.COLLECTIONMESSAGE).doc(iddoc).collection(this.MESSAGES,ref=>ref.orderBy("created_at",'asc')).snapshotChanges();
  }

  async sendMessage(text: string, user2: string) {//uiduser1_uiduser2
    let currentUser = firebase.auth().currentUser;
    var iddoc = `${currentUser.uid}_${user2}`;
    var docSnap = await this.afs.collection(this.COLLECTIONMESSAGE).doc(iddoc).ref.get();//.collection(this.MESSAGES).doc().set({})
    if (!docSnap.exists) {
      this.afs.collection(this.COLLECTIONMESSAGE).doc(iddoc).set({ users: [currentUser.uid, user2] })
    }
    var now = Date.now();
    await this.afs.collection(this.COLLECTIONMESSAGE).doc(iddoc).
    collection(this.MESSAGES).add({ "sender": currentUser.uid, "text": text, "created_at": now });

  }

}
