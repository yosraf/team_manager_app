import { Component, OnInit } from '@angular/core';
import {ProjectsService} from '../../Services/projects.service'
import * as firebase from 'firebase/app';
@Component({
  selector: 'app-rejected-propositions',
  templateUrl: './rejected-propositions.page.html',
  styleUrls: ['./rejected-propositions.page.scss'],
})
export class RejectedPropositionsPage implements OnInit {
  rejections:any=[];
  managers:any=[];
  constructor(private service:ProjectsService) { }

  ngOnInit() {
   this.service.getRejections().subscribe(

    data => {
      this.rejections=[]
      data.forEach(d=>{
        let value = firebase.auth().currentUser;
        var obj = JSON.parse(JSON.stringify(d.payload.doc.data()));
        if(obj['client']==value.uid){
         
          var p= {
            "name": obj.name,
            "description": obj.description,
            "client":obj.client,
            "type": obj.type,
            "id": d.payload.doc.id,
            "manager":obj.manager
          };
          this.rejections.push(p);
          this.service.getClient(p.manager).then(res=>{
              
            this.managers.push(res)
          })
        }
      });

    }
   )

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

}
