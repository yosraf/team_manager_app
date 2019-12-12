import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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

import { Camera } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
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
    AngularFireDatabaseModule


],
  providers: [
    StatusBar,
    SplashScreen,
    AuthentificationService,
    Camera,
    File,
    WebView,    
    FilePath,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
