import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import{ProjectsService} from '../../Services/projects.service';
import { FormGroup, Validators, FormControl,FormBuilder } from '@angular/forms';
import {Proposition} from "../../Models/Proposition";
import { Chooser } from '@ionic-native/chooser/ngx';

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
  modify(value){
    
    let data= new Proposition();
    data.description=value.description;
    data.name=value.name;
    data.type=value.type;
    let file=this.filetoupload;
    this.service.updateProposition(data,file,this.id).then(res=>{
      console.log(res);
      this.back(this.id);

    })

    
  }
  async selectfile(){
    this.filetoupload= await this.chooser.getFile("application/pdf");
    console.log(this.filetoupload.name);
  }
}
