import { Component, OnInit } from '@angular/core';
import {ProjectsService} from '../../Services/projects.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-client-propositions',
  templateUrl: './client-propositions.page.html',
  styleUrls: ['./client-propositions.page.scss'],
})
export class ClientPropositionsPage implements OnInit {
  propositions:any=[]
  constructor(private service:ProjectsService) { }

  ngOnInit() {
    this.service.AsyncPropositions().subscribe(
      data => {
        this.propositions=[];
        data.forEach(d=>{
          let value = firebase.auth().currentUser;
          var obj = JSON.parse(JSON.stringify(d.payload.doc.data()));
          if(obj['manager']==value.uid){
            let name:any;
            name=Promise.resolve(this.service.getClient(obj.client).then(res=>{
              console.log(res)
              return res;
            }));
            var p= {
              "name": obj.name,
              "description": obj.description,
              "client":obj.client,
              "type": obj.type,
              "id": d.payload.doc.id
            };
            this.propositions.push(p);
  
          }
        });
        
  
      }
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

}
