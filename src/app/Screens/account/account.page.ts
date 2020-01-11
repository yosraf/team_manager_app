import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { ActionSheetController, ToastController, Platform, LoadingController, AlertController } from '@ionic/angular';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { AuthentificationService } from '../../Services/authentification.service'
import * as firebase from 'firebase/app';
import { AccountService } from '../../Services/account.service'


@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  account = {};

  constructor(
    private camera: Camera, private file: File, private webview: WebView,
    private actionSheetController: ActionSheetController, private toastController: ToastController,
    public plateform: Platform, private loadingController: LoadingController,
    private ref: ChangeDetectorRef, private filePath: FilePath,
    public alertCtr: AlertController,
    private authService: AuthentificationService,
    private service: AccountService

  ) { }

  ngOnInit() {
    this.getUser();

  }
  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }
  async takePicture(sourceType: PictureSourceType) {
    var options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: 0,//data_uri check docs
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

   var imagePath= await this.camera.getPicture(options)
    await this.service.updateImage(imagePath,this.camera.EncodingType);
    /*.then(imagePath => async {
      
      if (this.plateform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath)
          .then(filePath => {
            let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
            let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
            // this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          });
      } else {
        var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
        var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
        // this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    });*/
  }
  async update(type) {
    const alert = await this.alertCtr.create({
      header: 'Change your ' + type,
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (d: any) => {


            if (type == "email") {
              this.account["email"] = d["email"];
              this.service.updateEmail(d["email"]);

            }
            else if (type == "password") {
              this.account["password"] = d["password"];
              this.service.updatePassword(d["password"]);
            }
            else
              if (type == "phone") {
                this.account["phone"] = d["phone"];
                this.service.updatePhone(d["phone"]);
              }


          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: type,
          placeholder: this.account[type]
        }
      ]
    });
    return await alert.present();

  }

  getUser() {
    this.authService.getUser().then(res => {
      this.account = {
        "img": res.image,
        "username": res.username,
        "role": res.role,
        "email": firebase.auth().currentUser.email,
        "password": "*****",
        "phone": res.phone
      }

    });
    console.log(this.account);
  }

}
