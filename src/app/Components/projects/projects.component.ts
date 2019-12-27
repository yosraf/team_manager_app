import { Component, OnInit, NgModule } from '@angular/core';
import { Router, NavigationEnd} from "@angular/router";
import {ProjectsService} from '../../Services/projects.service';
import{Observable}from 'rxjs'
import {AngularFirestore,AngularFirestoreDocument ,AngularFirestoreCollection}from '@angular/fire/firestore';
import{Project} from '../../Models/IProjects'

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
   
    this.getProjects();
   
  }
   getProjects() {
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
}
