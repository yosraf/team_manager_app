import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import {AngularFirestore }from '@angular/fire/firestore';
import {Project} from '../../app/Models/Project';

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
        name: value.name,
        description: value.description,
        type:value.type,
        client:value.client,
        progress:0,
        cost:value.cost
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
  
   return  this.afs.collection('projects').snapshotChanges();
   }
   AsyncPropositions(){    
    
    return  this.afs.collection('propositions').snapshotChanges();
    }

  getProjects() {
    return new Promise<any>((resolve, reject) => {
      let value = firebase.auth().currentUser;
      let projects:any=[]; 
      let project=new Project();
      
      this.afs.collection('projects').get().forEach(doc=>{
        
        doc.docs.forEach(d=>{

          var obj = JSON.parse(JSON.stringify(d.data()));
          if(obj['manager']==value.uid){
           
            project=obj;
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
        person:value.Person,
        hours:value.Hours
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
      
      this.afs.collection('users').get().forEach(doc=>{
        
        doc.docs.forEach(d=>{

          var obj = JSON.parse(JSON.stringify(d.data()));
          if(obj['role']=="client"){
         
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
      let project=new Project();
      
      this.afs.collection('projects').get().forEach(doc=>{
        
        doc.docs.forEach(d=>{

          var obj = JSON.parse(JSON.stringify(d.data()));
          if(obj['client']==value.uid){
            project=obj;
            project.id=d.id;
           
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
  getManagers(){
    return new Promise<any>((resolve, reject) => {
      let managers:any=[]; 
      
      this.afs.collection('users').get().forEach(doc=>{
        
        doc.docs.forEach(d=>{

          var obj = JSON.parse(JSON.stringify(d.data()));
          if(obj['role']=="manager"){
            console.log(obj);
            managers.push(obj);
            
          }

        })
     
    })
     
      .then(
        res => {
        
          resolve(managers)
        },
        err => reject(err)
      )
    })

  }
  async createProposition(value,filetoupload){
    console.log(filetoupload)
    let uid= firebase.auth().currentUser.uid;
    const storageRef=firebase.storage().ref(`/pdf/uid/${filetoupload.name}.pdf`);
    var uplaodtask=await storageRef.put(filetoupload.data, { contentType: `application/pdf` });
    var urlFile= (await  uplaodtask.ref.getDownloadURL())
    return new Promise<any>((resolve, reject) => {
      let currentUser = firebase.auth().currentUser;
      this.afs.collection('propositions').add({
    
        name: value.Name,
        description: value.Description,
        type:value.Type,
        state:'not treated',
        client:currentUser.uid,
        file:urlFile
       
      })
      .then(
        res => {
        
          resolve(res)
        },
        err => reject(err)
      )
    })
   }
   getClient(id){
    return new Promise<any>((resolve, reject) => {
      let client:any;
      
      this.afs.collection('users').get().forEach(doc=>{
        
        doc.docs.forEach(d=>{

          var obj = JSON.parse(JSON.stringify(d.data()));
          if(obj['uid']==id){
            
           client=obj['username'];
            
          }

        })
     
    })
     
      .then(
        res => {
          resolve(client)
        },
        err => reject(err)
      )
    })

  }
  deletePropostion(id){
    return new Promise<any>((resolve,reject)=>{
      this.afs.collection("propositions").doc(id).delete().then((res)=>{
        resolve(res);
      });

    })

  }
  deleteProject(id){
    return new Promise<any>((resolve,reject)=>{
      this.afs.collection("projects").doc(id).delete().then((res)=>{
        resolve(res);
      });

    })

  }
  

  getDoneTasks(id){
    let tasks=[];
    return new Promise<any>((resolve,reject)=>{
      this.afs.collection("projects").doc(id).collection("tasks").get().forEach((res)=>{
        res.docs.forEach(d=>{

          var obj = JSON.parse(JSON.stringify(d.data()));
          if(obj['state']=="done"){
            tasks.push(obj)
            
          }

        })
     
    })
     
      .then(
        res => {
        
          resolve(tasks)
        },
        err => reject(err)
      )
    })
  }
  updateTask(id,state){
    return new Promise<any>((resolve,reject)=>{
      this.afs.collection("projects").doc(id).collection("tasks").doc(id).update({
        
          "state":state
        
      })
     
      .then(
        res => {
        
          resolve(res)
        },
        err => reject(err)
      )
    })
  }
 updateProject(id,progress){
  return new Promise<any>((resolve,reject)=>{
    this.afs.collection("projects").doc(id).update(
      {
        'progress':progress
      }
    )
   
    .then(
      res => {
      
        resolve(res)
      },
      err => reject(err)
    )
  })

 }
 getProject(id){
   let project=new Project();
   let result:any;
   return new Promise<any>((resolve,reject)=>{
    this.afs.collection('projects').get().forEach(doc=>{
        
      doc.docs.forEach(d=>{
  
        if(d.id==id){
          var obj = JSON.parse(JSON.stringify(d.data()));
          project=obj;
          project.id=d.id;
          result=project;
          
        }
        
  
      })
   
  })
   
    .then(
      res => {
      
        resolve(result)
      },
      err => reject(err)
    )
  })

   }
   update(value,id){
    return new Promise<any>((resolve,reject)=>{
      this.afs.collection('projects').doc(id).update({
        "name":value.name,
        "description":value.description,
        "type":value.type,
        "client":value.client,
        "manager":value.manager,
        "progress":value.progress

      })
     
      .then(
        res => {
        
          resolve(res)
        },
        err => reject(err)
      )
    })
   }
  async updateProposition(value,file,id){
    let uid= firebase.auth().currentUser.uid;
    
    var obj={
      "name":value.name,
      "description":value.description,
      "type":value.type
    }
    if(file!=null){
      const storageRef=firebase.storage().ref(`/pdf/uid/${file.name}.pdf`);
      var uplaodtask=await storageRef.put(file.data, { contentType: `application/pdf` });
      var urlFile= (await  uplaodtask.ref.getDownloadURL())
      obj ["file"]=urlFile
    }
    
    
    await this.afs.collection('propositions').doc(id).update(obj);
    
      
     
   }
   uploadFile(file){
     let storageRef= firebase.storage().ref();
    return new Promise<any>((resolve, reject) => {
      storageRef.put(file).then(function(snapshot) {
        console.log('Uploaded a blob or file!');
      });

    })
  }
 
   getPropositionDetail(id){
    
  
    return this.afs.collection('propositions').doc(id).snapshotChanges();

   }
   replyProposition(value,id){
    return new Promise<any>((resolve,reject)=>{
      this.afs.collection("propositions").doc(id).update(
        {
          'state':"treated",
          'duration':value.duration,
           'budget':value.budget

        }
      )
     
      .then(
        res => {
        
          resolve(res)
        },
        err => reject(err)
      )
    })

   }
  
  
}
