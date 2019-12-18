import { Component, OnInit, NgModule } from '@angular/core';
import { Router} from "@angular/router";
import { from } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})


export class ProjectsComponent implements OnInit {
  data:any=[];
  constructor(public route:Router) { }

  ngOnInit() {
    this.data=[
      {
        "id":'1',
        "name":"app gestion fichier",
        "description":"create a web app that ...",
        "type":"web",
        "progress":"20"
      },
      {
        "id":'1',
        "name":"app gestion fichier",
        "description":"create a web app that ...",
        "type":"data",
        "progess":"0"
      },
      {
        "id":'1',
        "name":"app gestion fichier",
        "description":"create a web app that ...",
        "type":"mobile",
        "progess":"55"
      }
    ];
  }
  color(type){
   if(type=="web"){
     return "#feca57";
   }
   if(type=="mobile"){
     return "#ce82ed";
   }
   if(type=="data"){
     return "#8e44ad";
   }
  }
  
  
  openTask(){
     this.route.navigate(["/task"])
  }
}
