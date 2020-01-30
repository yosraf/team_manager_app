import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { AuthentificationService } from './Services/authentification.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {ReactiveFormsModule} from '@angular/forms'

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import * as firebase from 'firebase';
import { from } from 'rxjs';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { FCM } from '@ionic-native/fcm//ngx'

import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import {IonicGestureConfig} from "../app/utils/IonicGestureConfig";
import { Chooser } from '@ionic-native/chooser/ngx';
import { Downloader } from '@ionic-native/downloader/ngx';
import { DatePipe } from '@angular/common';

import { DragulaModule, DragulaService } from 'ng2-dragula';

firebase.initializeApp(environment.firbase);

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(),
     AppRoutingModule,
     AngularFireAuthModule,
     ReactiveFormsModule,
     
     AngularFireModule.initializeApp(environment.firbase),
     AngularFirestoreModule,
    AngularFireDatabaseModule,
    DragulaModule.forRoot(),
   
   


],

  providers: [
    StatusBar,
    SplashScreen,
    AuthentificationService,
    Camera,
    File,
    WebView,    
    FilePath,
    FCM,
    Downloader,
    LocalNotifications,
    DragulaService,
    {
      provide: HAMMER_GESTURE_CONFIG, useClass: IonicGestureConfig,
    }
    ,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy 
      
    },
    Chooser,
    DatePipe
  
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule {}
