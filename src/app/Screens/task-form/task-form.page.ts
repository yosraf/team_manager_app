import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl,FormBuilder } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import{ProjectsService } from '../../Services/projects.service';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.page.html',
  styleUrls: ['./task-form.page.scss'],
})
export class TaskFormPage implements OnInit {
  team:any[];
  validation: FormGroup;
  id:any;
  constructor(public route:Router, private formBuilder: FormBuilder,private active: ActivatedRoute,
    private service:ProjectsService) {
    this.active.params.subscribe( params => {
      this.id=params["id"]

      console.log(params["id"])} 
      );

   }

  ngOnInit() {
    this.service.getDevs().then(res=>{
      this.team=res;
    });
    this.validation =this.formBuilder.group({
     
      Name: new FormControl('', Validators.compose([
        Validators.required,

      ])),
      Description: new FormControl('', Validators.compose([
        Validators.required,

      ])),
     
      Person: new FormControl('', Validators.compose([
        Validators.required
      ])),
      Hours: new FormControl('', Validators.compose([
        Validators.required
      ]))
    }); 
  }
  add(value){
    let url="/task/"+this.id;
    this.service.createTask(value,this.id);
    this.route.navigate([url]);
  }
  open(){
    let url="/task/"+this.id;
    this.route.navigate([url]);
  }


}
