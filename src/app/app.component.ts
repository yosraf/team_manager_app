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
  routenotif:String;
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
  
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    
    this.notificationApp();
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
  private async showNotif(title, message,icon,des) {
    this.localNotifications.on('click').subscribe(data=>{
      this.route.navigate([des]);
  });
    // Schedule a single notification
    this.localNotifications.schedule({
      id:  Math.floor((Math.random()*9999)),
      title: title,
      text: message,
      icon:icon
    });
  }

  private notificationApp() {
    //this.fcm.getToken();
    
    this.fcm.onNotifications().subscribe(
      (msg) => {
        if (this.platform.is('ios')) {
          
          this.showNotif(msg.title, msg.aps.alert,msg.icon,msg.route);
        } else {
          console.log(msg.type);
          
          this.showNotif(msg.title, msg.body,msg.icon,msg.route);
          
          
        }
      });
  }

}
