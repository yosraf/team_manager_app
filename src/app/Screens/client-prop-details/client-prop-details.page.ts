import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import {ProjectsService} from '../../Services/projects.service';
import {Proposition} from '../../Models/Proposition';
import { Downloader, DownloadRequest, NotificationVisibility } from '@ionic-native/downloader/ngx';
import { LoadingController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-client-prop-details',
  templateUrl: './client-prop-details.page.html',
  styleUrls: ['./client-prop-details.page.scss'],
})
export class ClientPropDetailsPage implements OnInit {

  id:any;
  details:any=new Proposition();

  constructor(private route: ActivatedRoute,
    private router:Router,private service:ProjectsService,
    private downloader: Downloader,
    private alertCrtl:AlertController,
    public loadingController: LoadingController,
    private toast:ToastController) {
    this.route.params.subscribe( params => {
      console.log(params["id"])
      this.id=params["id"]
  } );
   }

  ngOnInit() {
    this.service.getPropositionDetail(this.id).subscribe(
      (res)=>{
       this.details=JSON.parse(JSON.stringify(res.payload.data()));
       
      }
    )
  }
  icon(type){
    if(type=="web"){
      return "md-desktop";
    }
    if(type=="mobile"){
      return "md-phone-portrait";
    }
    if(type=="data"){
      return "md-analytics";
    }
   }
   async download(url) {
     console.log(url)
  
    var date= Date.now();// current date
    var loading=await this.presentLoadingWithOptions("Downlaoding...");
    loading.present();
    var request: DownloadRequest = {
      uri: url, // uri downloading
      title: 'download proposition file',
      description: '',
      mimeType: 'application/pdf',
      visibleInDownloadsUi: true,
      notificationVisibility: NotificationVisibility.VisibleNotifyCompleted,
      destinationInExternalFilesDir: {
          dirType: 'Downloads',
          subPath: `file_${date}.pdf`
      }
  };
  var location=await this.downloader.download(request)
  loading.dismiss();
  }
  async presentLoadingWithOptions(msg:string) {
    const loading = await this.loadingController.create({
   //   duration: 5000,
      message: msg,
      translucent: true,
      showBackdrop:true,
      cssClass: 'custom-class custom-loading'
    });
    return  loading;
  }
  async presentAlertPrompt() {
    let toast=await this.presentToast();
    const alert = await this.alertCrtl.create({
      header: 'Provide ',
      inputs: [
       
        
        {
          name: 'budget',
          type: 'number',
          min: 0,
          placeholder: "this project will costs"
        },
        {
          name: 'duration',
          type: 'number',
          min:0,
          placeholder :"duration , the unit is month"

        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'alertButton',
          
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirm',
          cssClass: 'alertButton',
          handler: (value) => {
            this.service.replyProposition(value,this.id);
            this.router.navigate(["/client-propositions"])
            toast.present();
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }
  async presentToast() {
    const toast = await this.toast.create({
      message: 'Successfuly replied',
      duration: 2000
    });
    return toast;
  }

}
