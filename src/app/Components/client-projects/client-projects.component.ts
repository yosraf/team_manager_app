import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {ProjectsService} from '../../Services/projects.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-client-projects',
  templateUrl: './client-projects.component.html',
  styleUrls: ['./client-projects.component.scss'],
})
export class ClientProjectsComponent implements OnInit {

  projects:any=[];

  constructor(public route:Router,private service:ProjectsService) {
   
   
  }

  ngOnInit() {
   
    this.service.AsyncProjects().subscribe(
      data=>{
        this.projects= data.map(
          e=>{
            let value = firebase.auth().currentUser;
            var obj = JSON.parse(JSON.stringify(e.payload.doc.data()));
            console.log(obj);
          if(obj['client']==value.uid){
            return {
              "name":obj.name,
              "description":obj.description,
              "manager":obj.manager,
              "client":obj.client,
              "progress":obj.progress,
              "type":obj.type,
              "id":e.payload.doc.id
            }
          
            
          }
          }
        );
        
      }
   );
   
  }
   getProjects() {
    this.projects=[];
    this.service.getClientProjects().then(res=>{
      console.log(res);
       res.forEach(element => {
         
       this.projects.push(element);

      });
      
    
    },
    err => { 
       console.log(err);}
    );

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
