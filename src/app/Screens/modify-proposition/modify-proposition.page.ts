import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import{ProjectsService} from '../../Services/projects.service';
import { FormGroup, Validators, FormControl,FormBuilder } from '@angular/forms';
import {Proposition} from "../../Models/Proposition";
import { Chooser } from '@ionic-native/chooser/ngx';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-modify-proposition',
  templateUrl: './modify-proposition.page.html',
  styleUrls: ['./modify-proposition.page.scss'],
})
export class ModifyPropositionPage implements OnInit {

  id:any;
  proposition:any=new Proposition;
  validation: FormGroup;
  filetoupload:any=null;
  constructor(private route: ActivatedRoute,private router:Router,
    public loadingController: LoadingController,
    private service:ProjectsService,private formBuilder: FormBuilder
    
    
    ,private chooser:Chooser) {
    this.route.params.subscribe( params => {
     
      this.id=params["id"]
  } );   
}

  ngOnInit() {
    this.service.getPropositionDetail(this.id).subscribe(
      (res)=>{
       this.proposition=JSON.parse(JSON.stringify(res.payload.data()));
       
      }
    )
  
    this.validation =this.formBuilder.group({
     
      name: new FormControl('', Validators.compose([
      

      ])),
      description: new FormControl('', Validators.compose([

      ])),
      type: new FormControl('', Validators.compose([
      ])),
     
    
    }); 
  }

  back(id){
    let url="/proposition-details/"+id;
    this.router.navigate([url])
  }
  async modify(value){
    
    let data= new Proposition();
    data.description=value.description;
    data.name=value.name;
    data.type=value.type;
    let file=this.filetoupload;
    console.log(data);
    var load=await this.presentLoadingWithOptions();
    load.present();
    await this.service.updateProposition(data,file,this.id).then(()=>{
      console.log("finishing update");
      load.dismiss();
     
      this.back(this.id);
    })

    
  }
  async presentLoadingWithOptions() {
    const loading = await this.loadingController.create({
   //   duration: 5000,
      message: 'Please wait...',
      translucent: true,
      showBackdrop:true,
      cssClass: 'custom-class custom-loading'
    });
    return  loading;
  }
  async selectfile(){
    this.filetoupload= await this.chooser.getFile("application/pdf");
    console.log(this.filetoupload.name);
  }
}
