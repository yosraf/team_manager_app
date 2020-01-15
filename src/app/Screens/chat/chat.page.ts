import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../Services/authentification.service'
import * as firebase from 'firebase/app';
import {Router} from '@angular/router'
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  users:any=[];
  discussions:any[];
  queryText = '';
  constructor(private service:AuthentificationService,private route:Router) { }
  
  ngOnInit() {
    this.discussions=[]
    this.service.getUsers().subscribe(

      data => {
        this.users=[]
        data.forEach(d=>{
          let value = firebase.auth().currentUser;
          var obj = JSON.parse(JSON.stringify(d.payload.doc.data()));
          if(obj['uid']!=value.uid ){
           
            var p= {
              "username": obj.username,
              "image": obj.image,
               "role":obj.role,
               "uid":obj.uid
            };
            this.users.push(p);
  
          }
        });
  
      }
     )
  
    
  }
  search(){
    var d=[]
    if(this.queryText.length!=0){
    
      this.discussions.forEach(el => {
        if(el["name"].includes(this.queryText)){
          d.push(el);
        }
        
      });
      this.discussions=d;
    }
    else{
      
     
    }
   
    
  }
  open(id){
    let url="/discussion/"+id;
    this.route.navigate([url]);
  
  }


}
