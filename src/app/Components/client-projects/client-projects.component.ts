import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-client-projects',
  templateUrl: './client-projects.component.html',
  styleUrls: ['./client-projects.component.scss'],
})
export class ClientProjectsComponent implements OnInit {

  projects:any=[];

  constructor(public route:Router) {
   
   
  }

  ngOnInit() {
   
    this.getProjects();
   
  }
   getProjects() {
    this.projects=[{
      "name":"project",
      "description":"blabla",
      "type":"web",
    

    }]

  }
  color(type){
   if(type=="web"){
     return "#e67e22";
   }
   if(type=="mobile"){
     return "#a55eea";
   }
   if(type=="data"){
     return "#8e44ad";
   }
  }
  
  
  
 
  ionRefresh(event) {
    setTimeout(() => {
     this.getProjects();
      event.target.complete();
    }, 2000);
}
ionPull(event){
  //Emitted while the user is pulling down the content and exposing the refresher.
  console.log('ionPull Event Triggered!');
}
ionStart(event){
  //Emitted when the user begins to start pulling down.
  console.log('ionStart Event Triggered!');
}
open(value){
  this.route.navigate(["/project-details"])
}

}
