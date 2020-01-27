import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import {ProjectsService} from '../../Services/projects.service';
import {Proposition} from '../../Models/Proposition';
import { Downloader, DownloadRequest, NotificationVisibility } from '@ionic-native/downloader/ngx';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-proposition-details',
  templateUrl: './proposition-details.page.html',
  styleUrls: ['./proposition-details.page.scss'],
})
export class PropositionDetailsPage implements OnInit {
  id:any;
  details:any=new Proposition();

  constructor(private route: ActivatedRoute,
    private router:Router,private service:ProjectsService,
    private downloader: Downloader,
    public loadingController: LoadingController,) {
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
   /* this.fileTransfer.download(url, "" + 'file.pdf').then((entry) => {
      console.log('download complete: ' + entry.toURL());
    }, (error) => {
      // handle error

    }); */
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
    openModify(){
      let url="/modify-proposition/"+this.id;
      this.router.navigate([url]);

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
}
