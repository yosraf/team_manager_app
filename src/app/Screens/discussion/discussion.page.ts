import { Component, OnInit } from '@angular/core';
import {Route,ActivatedRoute} from '@angular/router'
import {ChatService} from '../../Services/chat.service';
import {AuthentificationService} from '../../Services/authentification.service';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-discussion',
  templateUrl: './discussion.page.html',
  styleUrls: ['./discussion.page.scss'],
})
export class DiscussionPage implements OnInit {
  id:any;
  message:string;
  messages:any=[];
  myid:string;
  receiverid:string
  sender:boolean=false;
  receiver_image:any=null;
  sender_image:any=null;
  constructor(private route: ActivatedRoute,private service:ChatService,private auth:AuthentificationService) { 
    this.route.params.subscribe( params => {
      console.log(params["id"])
      this.id=params["id"]
  } );
  }

   ngOnInit() {
    
     this.auth.getUsers().subscribe(

      data => {
       
        data.forEach(d=>{
          var obj = JSON.parse(JSON.stringify(d.payload.doc.data()));
          if(obj['uid']==this.myid ){
           
            var p= {
             
              "image": obj.image,
             
            };
            this.sender_image=p.image;
           
  
          }
          if(obj['uid']==this.receiverid ){
           
            var p= {
             
              "image": obj.image,
             
            };
            this.receiver_image=p.image;
            console.log(this.sender_image);
  
          }
        });
  
      }
     )
     /*let ids=this.id.split("_");
     this.myid=ids[0];
     this.receiverid=ids[1];
     if(this.myid==firebase.auth().currentUser.uid){
       this.sender=true;
     }*/
    
       this.service.AsyncMessages(this.id).subscribe((res)=>{
          console.log(res);
          this.messages=[];
           res.map(value=>{
             
            
              var obj = JSON.parse(JSON.stringify(value.payload.doc.data()));
              var now=Date.now();
              var d=obj["created_at"];
              if(new Date(now).getDay>new Date(d).getDay){
                obj["date"]=(new Date(d)).getTime().toLocaleString();
              }else{
                obj["date"]=new Date(d).getHours()+":"+new Date(d).getMinutes()
              }
              this.messages.push(obj);
            
           })
      });
     
  }

   send() {
     this.service.sendMessage(this.message,this.id).then((v)=>{

        this.message="";
     });
  }
  color(sender){
    if(sender==true){
         return '#d6b0ff'
    
    }
    else{
      return '#462373'
    }
  }
  
}
