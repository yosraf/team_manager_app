import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../Services/authentification.service'
import * as firebase from 'firebase/app';
import {Router} from '@angular/router'
import {User} from '../../Models/User';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  users:any=[];
  cache:any=[];
  queryText = '';
  constructor(private service:AuthentificationService,private route:Router) { }
  
  ngOnInit() {
    this.cache=[];
    let p=new User();
    this.service.getUsers().subscribe(

      data => {
        this.users=[]
        data.forEach(d=>{
          let value = firebase.auth().currentUser;
          var obj = JSON.parse(JSON.stringify(d.payload.doc.data()));
          if(obj['uid']!=value.uid ){
           
            p=obj;
            this.users.push(p);
  
          }
          this.cache=this.users;
        });
  
      }
     )
  
    
  }
  search(){
    let d=[]
    
    if(this.queryText.length!=0){
    
      this.users.forEach(el => {
        if(el["username"].includes(this.queryText)){
          d.push(el);
        }
        
      });
      this.users=d;
    }
    else{
     this.users=this.cache; 
     
    }
   
    
  }
  open(id){
    let url="/discussion/"+id;
    this.route.navigate([url]);
  
  }


}
