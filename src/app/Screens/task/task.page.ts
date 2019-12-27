import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import{ProjectsService} from '../../Services/projects.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  data:any=[]
  id:any;
  constructor(private route: ActivatedRoute,private router:Router,private service:ProjectsService) {
    this.route.params.subscribe( params => {
      console.log(params["id"])
      this.id=params["id"]
  } );
}

  ngOnInit() {
    this.laod();
   
  }
  laod(){
    this.data=[];
    this.service.getTasks(this.id).then(res=>{
       res.forEach(element => {
         
       this.data.push(element);

      });
      
    
    },
    err => { 
       console.log(err);}
    );
  
  }
  color(progress){
    if(progress=="to do"){
      return "danger";
    }
    if(progress=="doing"){
      return "tertiary";
    }
    if(progress=="done"){
      return "warning";
    }
   }
   filter(n){
     var fil:any=[];
    if(n==0){
      this.laod();
    }
    if(n==1){
      this.laod();
      this.data.forEach(element => {
        if(element['state']=="to do"){
          fil.push(element);
        }
        
      });
      this.data=fil;
    }
    if(n==2){
      this.laod();
      this.data.forEach(element => {
        if(element['state']=="doing"){
          fil.push(element);
        }
        
      });
      this.data=fil;

    }
    if(n==3){
      this.laod();
      this.data.forEach(element => {
        if(element['state']=="done"){
          fil.push(element);
        }
        
      });
      this.data=fil;

    }

   }
   open(){
    let url="/task-form/"+this.id;
    console.log(url);
    this.router.navigate([url]);
   }
   ionRefresh(event) {
    setTimeout(() => {
     this.laod();
      event.target.complete();
    }, 2000);
}
ionPull(event){
  //Emitted while the user is pulling down the content and exposing the refresher.
  console.log('ionPull Event Triggered!');
}
ionStart(event){
  //Emitted when the user begins to start pulling down.
  console.log('ionStart Event Triggered!');
}
}
