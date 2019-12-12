import { Component, OnInit ,ChangeDetectorRef} from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { ActionSheetController, ToastController, Platform, LoadingController ,AlertController} from '@ionic/angular';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  data:any;


  constructor(
    private camera:Camera, private file: File,private webview: WebView,
    private actionSheetController: ActionSheetController, private toastController: ToastController,
    public plateform: Platform, private loadingController: LoadingController,
    private ref: ChangeDetectorRef, private filePath: FilePath,
    public alertCtr:AlertController
    ) { }

  ngOnInit() {
    this.data={
      "img":null,
      "name":"yosra fatnassi",
      "position":"manager",
      "email":"yosrafatnassi@gmail.com",
      "password":"00000",
      "phone":"58784044"
    }
   
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
takePicture(sourceType: PictureSourceType) {
  var options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
  };

  this.camera.getPicture(options).then(imagePath => {
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
  });}
  async update(type){
    const alert=await this.alertCtr.create({
      header: 'Change your '+type,
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (d: any) => {
            console.log(type);


              if(type=="email"){
                this.data["email"]=d["email"];
              }
              else if(type=="password"){
                this.data["password"]=d["password"];
              }
              else
              if(type=="phone"){
                this.data["phone"]=d["phone"];
              }
            
            
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: type,
          placeholder: this.data[type]
        }
      ]
    });
    return await alert.present();

  }
 

}
