import { Component, OnInit, NgModule } from '@angular/core';
import { Router, NavigationEnd} from "@angular/router";
import {ProjectsService} from '../../Services/projects.service';
import {AngularFirestore,AngularFirestoreDocument ,AngularFirestoreCollection}from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { AlertController } from '@ionic/angular';
import {Project} from '../../Models/Project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})

export class ProjectsComponent implements OnInit {
 
  projects:any=[];
  isShow:any;

  constructor(public route:Router,private service:ProjectsService,
    private afs: AngularFirestore,
    public alertController: AlertController) {
  
  }

  ngOnInit() {
    this.isShow=true;
    let p=new Project();
    this.service.AsyncProjects().subscribe(
      data => {
        this.projects=[];

        data.forEach(d=>{
          let value = firebase.auth().currentUser;
          var obj = JSON.parse(JSON.stringify(d.payload.doc.data()));
          if(obj['manager']==value.uid){
             p= obj;
             p.id=d.payload.doc.id;
            this.projects.push(p);
  
          }
        });
        
  
      }
    );
  
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
      return "#462373";
    }
    if(type=="mobile"){
      return "#a55eea";
    }
    if(type=="data"){
      return "#8e44ad";
    }
   }
   active(){
     console.log("ok");
     this.isShow=false;
   }
   released(){
     this.isShow=true;
   }
  
  delete(id){
    this.service.deleteProject(id).then(res=>{
      console.log(res);
    })
  }
  async deleteAlert(id) {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: "Are you sure you want to delete this project?",
      buttons: [
        {text:'Cancel'}
      , {text: 'Delete',
      handler: () => {
               this.delete(id);
      }
        }
    ]
    });

    await alert.present();
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
}
ionStart(event){
}
}
