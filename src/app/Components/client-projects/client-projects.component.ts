import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {ProjectsService} from '../../Services/projects.service';
import * as firebase from 'firebase/app';
import { AlertController } from '@ionic/angular';
import {Project} from '../../Models/Project';


@Component({
  selector: 'app-client-projects',
  templateUrl: './client-projects.component.html',
  styleUrls: ['./client-projects.component.scss'],
})
export class ClientProjectsComponent implements OnInit {

  projects:any=[];
  propositions:any[];
  isShow=true;

  constructor(public route:Router,private service:ProjectsService,private alertConroller:AlertController) {
   
   
  }

  ngOnInit() {

    this.projects=[];
    this.propositions=[];
    this.isShow=true;
    let value = firebase.auth().currentUser;
    let p=new Project();
    this.service.AsyncPropositions().subscribe(
   
      data => {
        this.propositions=[];
        data.map(d=>{
         
          var obj = JSON.parse(JSON.stringify(d.payload.doc.data()));
          if (obj['client'] == value.uid) {
             p= obj;
             p.id=d.payload.doc.id;
          
            this.propositions.push(p);

          }
        });
        

      }
    );

    this.service.AsyncProjects().subscribe(
      data => {
        data.forEach(d=>{
          let value = firebase.auth().currentUser;
          var obj = JSON.parse(JSON.stringify(d.payload.doc.data()));
          if (obj['client'] == value.uid) {
            var p= {
              "name": obj.name,
              "description": obj.description,
              "manager": obj.manager,
              "client": obj.client,
              "progress": obj.progress,
              "type": obj.type,
              "id": d.payload.doc.id
            };
            this.projects.push(p);

          }
        });
        

      }
    );
   
  }
   getProjects() {
    this.projects=[];
    this.service.getClientProjects() .then(res=>{
     
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
   async deleteAlert(id) {
    const alert = await this.alertConroller.create({
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
  let url='/project-details/'+value
  this.route.navigate([url])
}
active(){
  console.log("ok");
  this.isShow=false;
}
released(){
  this.isShow=true;
}

delete(id){
  this.service.deletePropostion(id).then(res=>{
    console.log(res);
  })
}
icon(type) {
  if (type == "web") {
    return "md-desktop";
  }
  if (type == "mobile") {
    return "md-phone-portrait";
  }
  if (type == "data") {
    return "md-analytics";
  }
}
openProp(id){
  let url="/proposition-details/"+id;
  this.route.navigate([url]);
}
}
