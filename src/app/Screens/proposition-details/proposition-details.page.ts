import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import {ProjectsService} from '../../Services/projects.service';
import {Proposition} from '../../Models/Proposition';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file';

@Component({
  selector: 'app-proposition-details',
  templateUrl: './proposition-details.page.html',
  styleUrls: ['./proposition-details.page.scss'],
})
export class PropositionDetailsPage implements OnInit {
  id:any;
  details:any=new Proposition();
  fileTransfer: FileTransferObject = this.transfer.create();

  constructor(private route: ActivatedRoute,
    private router:Router,private service:ProjectsService,
    private transfer: FileTransfer) {
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
   download(url) {
     console.log(url)
    this.fileTransfer.download(url, "" + 'file.pdf').then((entry) => {
      console.log('download complete: ' + entry.toURL());
    }, (error) => {
      // handle error
    }); }
    openModify(){
      let url="/modify-proposition/"+this.id;
      this.router.navigate([url]);

    }
}
