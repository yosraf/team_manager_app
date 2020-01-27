import { Component, OnInit } from '@angular/core';
import {Route,ActivatedRoute} from '@angular/router'
import {ChatService} from '../../Services/chat.service';
import {AuthentificationService} from '../../Services/authentification.service';
import { DatePipe } from '@angular/common';
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
  receiverid:string;
  send_img:string;
  rec_img:string;
  constructor(private route: ActivatedRoute,
    private service:ChatService,
    private auth:AuthentificationService,
    private datePipe: DatePipe) { 
    this.route.params.subscribe( params => {
    
      this.id=params["id"]
  } );
  }

  async ngOnInit() {
    
    
 
       ( await this.service.AsyncMessages(this.id)).subscribe((res)=>{
     
          this.messages=[];
           res.map(value=>{
             
              
              var obj = JSON.parse(JSON.stringify(value.payload.doc.data()));
              var now=Date.now();
              var d=obj["created_at"];
              if(new Date(now).getDate() > new Date(d).getDate()){
                obj["date"]=this.datePipe.transform(d,"MMM dd, HH:mm");
              }else{
                obj["date"]=this.datePipe.transform(d,"HH:mm")
              }
              if(obj['sender']==firebase.auth().currentUser.uid){
                this.myid=obj['sender'];
               

              }
              else{
                this.receiverid=obj['sender'];
               
              }
             
              this.messages.push(obj);
           
           })
      });
      this.getImage();
   
     
  }
  getImage(){
    
    this.auth.getUsers().subscribe(

      data => {
       
        data.forEach(d=>{
          var obj = JSON.parse(JSON.stringify(d.payload.doc.data()));
          if(obj['uid']==this.myid ){
           
            var p= {
             
              "image": obj.image,
             
            };
           
           this.send_img=p["image"];
  
          }
          if(obj['uid']==this.receiverid ){
           
            var p= {
             
              "image": obj.image,
             
            };
            this.rec_img=p["image"];
            
  
          }
        });
  
      }
     );
     

  }

   send() {
     this.service.sendMessage(this.message,this.id).then((v)=>{
        this.message="";
     });
  }
  color(id){
    if(this.myid==id){
         return '#d6b0ff'
    
    }
    else{
      return '#462373'
    }
  }
  slot(id){
   
    if(this.myid==id){
      return 'start';
      
 
 }
 else{
   return 'end';
 }
  }
  
}
