import { Injectable } from '@angular/core';
import { FCM } from '@ionic-native/fcm/ngx';
import { Platform } from '@ionic/angular';
import * as firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FcmService {

  constructor(private fcm: FCM,
    ) { }
  

  sendNotif(title,message){
    //this.fcm.onNotification().
  }

  onNotifications() {
    return this.fcm.onNotification();
  }


}
