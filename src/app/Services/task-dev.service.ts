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
               var p={
                "name":obj.name,
                "description":obj.description,
                "type":obj.type,
                "id":doc.id,
                "cost":obj.cost,
                "manager":obj.manager,
                "progress":obj.progress
              }
                projects.push(p);
              
              
              
              
            })           
          } 
          

        })
       } )
      
       
     })
    })
   

    
   
 
    return new Promise<any>((resolve, reject) => {
      resolve(projects)
    });    
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

  getProjectNames(){
    let projects_names=[];
   
    
    
    let uid=firebase.auth().currentUser.uid;
    this.afs.collection("projects").get().subscribe(res=>{
     res.forEach(doc=>{
      
       this.afs.collection("projects").doc(doc.id).collection("tasks").get().forEach(res=>{
         
       
        res.docs.forEach(d=>{
          
          
          var obj = JSON.parse(JSON.stringify(d.data()));
          
          if(obj['person']==uid){
            
            this.afs.collection("projects").doc(doc.id).get().forEach(e=>{
             
              var obj = JSON.parse(JSON.stringify(e.data()));
              var p={
               "name":obj.name,
             
             }
               projects_names.push(p["name"]);
             
             
             
             
           })   
               
          } 
          

        })
       } )
      
       
     })
    })
   

    
   
    return new Promise<any>((resolve, reject) => {
      resolve(projects_names)
    });
    
  }
  getProjectProgess(){
    let projects_progress=[];
   
    
    
    let uid=firebase.auth().currentUser.uid;
    this.afs.collection("projects").get().subscribe(res=>{
     res.forEach(doc=>{
      
       this.afs.collection("projects").doc(doc.id).collection("tasks").get().forEach(res=>{
         
       
        res.docs.forEach(d=>{
          
          
          var obj = JSON.parse(JSON.stringify(d.data()));
          
          if(obj['person']==uid){
            
            this.afs.collection("projects").doc(doc.id).get().forEach(e=>{
             
              var obj = JSON.parse(JSON.stringify(e.data()));
              var p={
              
               "progress":obj.progress
             }
             projects_progress.push(p["progress"]);
             
             
             
             
           })   
               
          } 
          

        })
       } )
      
       
     })
    })
   

    
    return new Promise<any>((resolve, reject) => {
      resolve(projects_progress)
    });
    
  }
  
}
