import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import {AngularFirestore }from '@angular/fire/firestore';
import{Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  

  constructor(private afs: AngularFirestore) { 
     
  }
  createProject(value){
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('projects').add({
        manager:currentUser.uid,
        name: value.Name,
        description: value.Description,
        type:value.Type,
        client:value.Client,
        progress:0
      })
      .then(
        res => {
        
          resolve(res)
        },
        err => reject(err)
      )
    })
   }

   AsyncProjects(){    
  
   return  this.afs.collection('projects').snapshotChanges();;
   }

  getProjects() {
    return new Promise<any>((resolve, reject) => {
      let value = firebase.auth().currentUser;
      let projects:any=[]; 
      let project={};
      
      this.afs.collection('projects').get().forEach(doc=>{
        
        doc.docs.forEach(d=>{

          var obj = JSON.parse(JSON.stringify(d.data()));
          if(obj['manager']==value.uid){
            project={
              "name":obj.name,
              "description":obj.description,
              "manager":obj.manager,
              "client":obj.client,
              "progress":obj.progress,
              "type":obj.type,
              "id":d.id
            }
            projects.push(project);
            
          }

        })
     
    })
     
      .then(
        res => {
        
          resolve(projects)
        },
        err => reject(err)
      )
    })
    
  }
  createTask(value,id){
    return new Promise<any>((resolve, reject) => {
      this.afs.collection('projects').doc(id).collection("tasks").add({
        state:"to do",
        name:value.Name,
        description:value.Description,
        person:value.Person
      })
      .then(
        res => {
        
          resolve(res)
        },
        err => reject(err)
      )
    })

  }
  getTasks(id){

    return this.afs.collection('projects').doc(id).collection('tasks').snapshotChanges();
    
   
    

  }
  getClients(){
    return new Promise<any>((resolve, reject) => {
      let clients:any=[]; 
      
      this.afs.collection('users').get(   ).forEach(doc=>{
        
        doc.docs.forEach(d=>{

          var obj = JSON.parse(JSON.stringify(d.data()));
          if(obj['role']=="client"){
            console.log(obj);
            clients.push(obj);
            
          }

        })
     
    })
     
      .then(
        res => {
        
          resolve(clients)
        },
        err => reject(err)
      )
    })

  }
  getDevs(){
    return new Promise<any>((resolve, reject) => {
      let devs:any=[]; 
      
      this.afs.collection('users').get().forEach(doc=>{
        
        doc.docs.forEach(d=>{

          var obj = JSON.parse(JSON.stringify(d.data()));
          if(obj['role']=="developer"){
           
            devs.push(obj);
            
          }

        })
     
    })
     
      .then(
        res => {
        
          resolve(devs)
        },
        err => reject(err)
      )
    })

  }
  getClientProjects() {
    return new Promise<any>((resolve, reject) => {
      let value = firebase.auth().currentUser;
      let projects:any=[]; 
      let project={};
      
      this.afs.collection('projects').get().forEach(doc=>{
        
        doc.docs.forEach(d=>{

          var obj = JSON.parse(JSON.stringify(d.data()));
          if(obj['client']==value.uid){
            project={
              "name":obj.name,
              "description":obj.description,
              "manager":obj.manager,
              "client":obj.client,
              "progress":obj.progress,
              "type":obj.type,
              "id":d.id
            }
            projects.push(project);
            
          }

        })
     
    })
     
      .then(
        res => {
        
          resolve(projects)
        },
        err => reject(err)
      )
    })
    
  }
  
}
