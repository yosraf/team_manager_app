import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormControl,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-project',
  templateUrl: './project.page.html',
  styleUrls: ['./project.page.scss'],
})
export class ProjectPage implements OnInit {
  team:any[];
  validation: FormGroup;

  constructor(public route:Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.team=[
      { 
        "id":"123",
         "name":"team_1"
      },
      { 
        "id":"124",
         "name":"team_2"
      }

    ];
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
      Team: new FormControl('', Validators.compose([
        Validators.required
      ]))
    }); 
  }
  add(value){
    console.log(value);
    this.route.navigate(["/homes/projects"]);
  }

}
