import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl,FormBuilder } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import {ProjectsService} from '../../Services/projects.service';
import { Chooser } from '@ionic-native/chooser/ngx';
@Component({
  selector: 'app-project-proposition',
  templateUrl: './project-proposition.page.html',
  styleUrls: ['./project-proposition.page.scss'],
})
export class ProjectPropositionPage implements OnInit {
  managers:any=[]
  validation: FormGroup;
  filetoupload:any=null;
  constructor(public route:Router, private formBuilder: FormBuilder,private service:ProjectsService,private chooser:Chooser) { }

  ngOnInit() {
      
    this.service.getManagers().then(res=>{
      this.managers=res;
    })
      this.validation =this.formBuilder.group({
     
        Name: new FormControl('', Validators.compose([
          Validators.required,
  
        ])),
        Description: new FormControl('', Validators.compose([
          Validators.required,
  
        ])),

        Type: new FormControl('', Validators.compose([
          Validators.required
        ]))
      }); 
      
  }

   async selectfile(){
    this.filetoupload= await this.chooser.getFile("application/pdf");
    console.log(this.filetoupload.name);
  }
  add(value){
   
   this.service.createProposition(value,this.filetoupload).then(res=>{
      this.route.navigate(["/homes/clientProjects"])
   })
  }

}
