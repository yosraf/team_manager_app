import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import {AngularFirestore }from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class TaskDevService {
  
  ids:any=[];
  constructor(private afs: AngularFirestore) { 
  }

  getProjects(){
    let projects_id=[];
   
    let projects=[];
    
    let uid=firebase.auth().currentUser.uid;
    this.afs.collection("projects").get().subscribe(res=>{
     res.forEach(doc=>{
      
       this.afs.collection("projects").doc(doc.id).collection("tasks").get().forEach(res=>{
         
       
        res.docs.forEach(d=>{
          
          
          var obj = JSON.parse(JSON.stringify(d.data()));
          
          if(obj['person']==uid){
            
            projects_id.push(doc.id)
            this.afs.collection("projects").doc(doc.id).get().forEach(e=>{
             
               var obj = JSON.parse(JSON.stringify(e.data()));
              projects.push(obj);
              
            })           
          } 
          

        })
       } )
      
       
     })
    })
   

    
   
    return projects;
    
  }
 
  getTasks(id){
   
    let projects=[]
    let uid=firebase.auth().currentUser.uid;
    this.afs.collection("projects").doc(id).collection("tasks").get().forEach(res=>{
         
      res.docs.forEach(d=>{
        
       
        var obj = JSON.parse(JSON.stringify(d.data()));
        
        if(obj['person']==uid){
          projects.push(obj)
          console.log(obj);
        } 
        
          
        

      })
     } )
    return projects;
    
  }

  
  
}
