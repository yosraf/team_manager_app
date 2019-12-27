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
  constructor(public route:Router, private formBuilder: FormBuilder,
    private service:ProjectsService) { }

  ngOnInit() {
    
    this.validation =this.formBuilder.group({
     
      Name: new FormControl('', Validators.compose([
        Validators.required,

      ])),
      Description: new FormControl('', Validators.compose([
        Validators.required,

      ])),
      Type: new FormControl('', Validators.compose([
        Validators.required
      ])),
      Client:new FormControl('', Validators.compose([
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
