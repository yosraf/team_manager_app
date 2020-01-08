import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl,FormBuilder } from '@angular/forms';
import {ProjectsService} from '../../Services/projects.service';
import { identifierModuleUrl } from '@angular/compiler';
@Component({
  selector: 'app-project',
  templateUrl: './project.page.html',
  styleUrls: ['./project.page.scss'],
})
export class ProjectPage implements OnInit {
  validation: FormGroup;
  clients:any=[];
  constructor(public route:Router, private formBuilder: FormBuilder,
  private service:ProjectsService) { }
 
  ngOnInit() {
   this.service.getClients().then(res=>{
     this.clients=res;
   })
    console.log(this.clients);
    
    this.validation =this.formBuilder.group({
     
      name: new FormControl('', Validators.compose([
        Validators.required,

      ])),
      description: new FormControl('', Validators.compose([
        Validators.required,

      ])),
      cost: new FormControl('', Validators.compose([
        Validators.required,

      ])),
      type: new FormControl('', Validators.compose([
        Validators.required
      ])),
      client:new FormControl('', Validators.compose([
        Validators.required
      ])),
     
    }); 
  }
   add(value){
     this.service.createProject(value).then(res=>{
       if(res){
         console.log(res);
        this.route.navigate(["/homes/projects"]);
       }
        
    },
    err => { 
       console.log(err);}
    );
  }
 
}
