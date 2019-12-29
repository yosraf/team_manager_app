import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { FcmService } from '../app/Services/fcm.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: any;

  constructor(
    private platform: Platform,
    public toastController: ToastController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public route: Router,
    private fcm: FcmService,
    private localNotifications: LocalNotifications
  ) {
    this.initializeApp();
    this.sideMenu();
  }
  private async presentToast(title, message) {
    // Schedule a single notification
    this.localNotifications.schedule({
      id: 1,
      title: title,
      text: message,
    });
  }
  private notificationSetup() {
    //this.fcm.getToken();
    this.localNotifications.on('click').subscribe(data=>{
        this.route.navigate(["/homes/clientHome"]);
    });
    this.fcm.onNotifications().subscribe(
      (msg) => {
        if (this.platform.is('ios')) {
          this.presentToast(msg.title, msg.aps.alert);
        } else {
          this.presentToast(msg.title, msg.body);
        }
      });
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.notificationSetup();
    this.notifmanager();
  }
  sideMenu() {
    this.navigate =
      [
        {
          title: "Acount",
          url: "/account",
          icon: "person"
        },
        {
          title: "Chat",
          url: "/chat",
          icon: "chatboxes"
        },
       

      ]
  }
  logout() {
    this.route.navigate(["/login-page"]);

  }
  private async sendNotifManager(title, message) {
    // Schedule a single notification
    this.localNotifications.schedule({
      id: 1,
      title: title,
      text: message,
    });
  }
  private notifmanager() {
    //this.fcm.getToken();
    this.localNotifications.on('click').subscribe(data=>{
        this.route.navigate(["/client-propositions"]);
    });
    this.fcm.onNotifications().subscribe(
      (msg) => {
        if (this.platform.is('ios')) {
          this.sendNotifManager(msg.title, msg.aps.alert);
        } else {
          this.sendNotifManager(msg.title, msg.body);
        }
      });
  }
}
