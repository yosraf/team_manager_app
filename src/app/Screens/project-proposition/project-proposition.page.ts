import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl,FormBuilder } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import {ProjectsService} from '../../Services/projects.service'
@Component({
  selector: 'app-project-proposition',
  templateUrl: './project-proposition.page.html',
  styleUrls: ['./project-proposition.page.scss'],
})
export class ProjectPropositionPage implements OnInit {
  managers:any=[]
  validation: FormGroup;

  constructor(public route:Router, private formBuilder: FormBuilder,private service:ProjectsService) { }

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

       
        Specifications: new FormControl('', Validators.compose([
          Validators.required
        ])),
        Type: new FormControl('', Validators.compose([
          Validators.required
        ]))
      }); 
      
  }
  add(value){
   
   this.service.createProposition(value).then(res=>{
      this.route.navigate(["/homes/clientProjects"])
   })
  }

}
