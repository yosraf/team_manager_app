import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl,FormBuilder } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-project-proposition',
  templateUrl: './project-proposition.page.html',
  styleUrls: ['./project-proposition.page.scss'],
})
export class ProjectPropositionPage implements OnInit {
  team:any=[]
  validation: FormGroup;

  constructor(public route:Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.team=[
      { 
        "id":"123",
         "name":"yosrf"
      },
      { 
        "id":"124",
         "name":"sirine"
      }]
      this.validation =this.formBuilder.group({
     
        Name: new FormControl('', Validators.compose([
          Validators.required,
  
        ])),
        Description: new FormControl('', Validators.compose([
          Validators.required,
  
        ])),
       
        Person: new FormControl('', Validators.compose([
          Validators.required
        ]))
      }); 
  }
  add(value){
    console.log(value)
  }

}
