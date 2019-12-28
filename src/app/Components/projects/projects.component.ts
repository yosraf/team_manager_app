import { Component, OnInit, NgModule } from '@angular/core';
import { Router, NavigationEnd} from "@angular/router";
import {ProjectsService} from '../../Services/projects.service';
import{Observable}from 'rxjs'
import {AngularFirestore,AngularFirestoreDocument ,AngularFirestoreCollection}from '@angular/fire/firestore';
import{Project} from '../../Models/IProjects'
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})

export class ProjectsComponent implements OnInit {
 
  projects:any=[];

  constructor(public route:Router,private service:ProjectsService,private afs: AngularFirestore) {
   
   
  }

  ngOnInit() {
   
     this.service.AsyncProjects().subscribe(
      data=>{
        this.projects= data.map(
          e=>{
            let value = firebase.auth().currentUser;
            var obj = JSON.parse(JSON.stringify(e.payload.doc.data()));
            console.log(obj);
          if(obj['manager']==value.uid){
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
    console.log(this.projects);
   
  }
   getProjectsOnce() {
    this.projects=[];

     this.service.getProjects().then(res=>{
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
  
  
  
  openTask(id){
    let url="/task/"+id;
     this.route.navigate([url])
  }
  ionRefresh(event) {
    setTimeout(() => {
     this.getProjectsOnce();
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
}
