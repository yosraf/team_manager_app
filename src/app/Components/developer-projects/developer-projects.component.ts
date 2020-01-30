import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {ProjectsService} from '../../Services/projects.service';
import * as firebase from 'firebase/app';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-developer-projects',
  templateUrl: './developer-projects.component.html',
  styleUrls: ['./developer-projects.component.scss'],
})

export class DeveloperProjectsComponent implements OnInit {

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
    
  

    /*this.service.AsyncProjects().subscribe(
      data => {
        data.forEach(d=>{
          let value = firebase.auth().currentUser;
          var obj = JSON.parse(JSON.stringify(d.payload.doc.data()));
          if (obj['person'] == value.uid) {
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
    );*/
    this.service.getDeveloperProjects().then(res=>{
       res.forEach(element => {
         this.projects.push(element);
         console.log(element);
      });   
  
    
    },
    err => { 
       console.log(err);}
    );
      
    this.initProjects() ;
   
  }

  initProjects(){
  this.projects= [
      {
        'name':'hana',
        'description':'something'

      },
      {
        'name':'hana',
        'description':'something'
      }
    ]
  }
  getProjects() {
 
    this.service.getDeveloperProjects() .then(res=>{
     
   
      res.forEach(element => {
        this.projects.push(element);
        console.log(element);
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
  let url='/task-dashbord/'
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
