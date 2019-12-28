import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Router} from '@angular/router';
import { from } from 'rxjs';
import { ToastController } from '@ionic/angular';
import {FcmService} from '../app/Services/fcm.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate : any;

  constructor(
    private platform: Platform,
    public toastController: ToastController,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public route:Router,
    private fcm:FcmService,
  ) {
    this.initializeApp();
    this.sideMenu();
  }
  private async presentToast(message) {
    const toast = await this.toastController.create({
      message,
      duration: 3000
    });
    toast.present();
  }
  private notificationSetup() {
    //this.fcm.getToken();
    this.fcm.onNotifications().subscribe(
      (msg) => {
        if (this.platform.is('ios')) {
          this.presentToast(msg.aps.alert);
        } else {
          this.presentToast(msg.body);
        }
      });
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.notificationSetup();
  }
  sideMenu()
  {
    this.navigate =
    [
      {
        title : "Acount",
        url   : "/account",
        icon  : "person"
      },
      {
        title : "Chat",
        url   : "/chat",
        icon  : "chatboxes"
      },
      {
        title : "Settings",
        url   : "/settings",
        icon  : "settings"
      },
     
    ]
  }
  logout(){
    this.route.navigate(["/login-page"]);
    
  }
}
