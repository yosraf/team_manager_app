import { Component, OnInit } from '@angular/core';
import {ProjectsService} from '../../Services/projects.service';
import * as firebase from 'firebase/app';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-client-propositions',
  templateUrl: './client-propositions.page.html',
  styleUrls: ['./client-propositions.page.scss'],
})
export class ClientPropositionsPage implements OnInit {
  propositions:any=[]
  client:any=[]
  constructor(private service:ProjectsService, public alertController: AlertController) { }

  ngOnInit() {
    this.service.AsyncPropositions().subscribe(
      data => {
        this.propositions=[];
        data.forEach(d=>{
          let value = firebase.auth().currentUser;
          var obj = JSON.parse(JSON.stringify(d.payload.doc.data()));
          if(obj['state']=="not treated"){
           
            var p= {
              "name": obj.name,
              "description": obj.description,
              "client":obj.client,
              "type": obj.type,
              "id": d.payload.doc.id
            };
            this.propositions.push(p);
            this.service.getClient(p.client).then(res=>{
              
              this.client.push(res)
            })
  
          }
        });

  
      }
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
   icon(type){
    if(type=="web"){
      return "md-desktop";
    }
    if(type=="mobile"){
      return "md-phone-portrait";
    }
    if(type=="data"){
      return "md-analytics";
    }
   }
   accept(d){
     this.service.createProject(d).then(res=>{
       console.log(res);
     })
     this.service.deletePropostion(d.id).then(
      res=>{
        console.log(res);

      })
   }
   refuse(d){
    this.service.deletePropostion(d.id).then(
      res=>{
        console.log(res);

      })
      this.service.declinePropositon(d).then(
        res=>{
          console.log(res);
  
        })
   }
   async refuseAlert(d) {
    const alert = await this.alertController.create({
      header: 'Confirm',
      message: "Are you sure you want to delete this project?",
      buttons: [
        {text:'Cancel'}
      , {text: 'Delete',
      handler: () => {
        this.refuse(d);
      }
        }
    ]
    });

    await alert.present();
  }
}
