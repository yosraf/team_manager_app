import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  data:any=[]
  constructor() { }

  ngOnInit() {
    this.laod();
  }
  laod(){
    this.data=[
      {
        "id":'1',
        "name":"crud project",
        "description":"create a web app that ...",
        "state":"to do"
      },
      {
        "id":'1',
        "name":"crud project",
        "description":"create a web app that ...",
        "state":"doing"
      },
      {
        "id":'1',
        "name":"crud project",
        "description":"create a web app that ...",
        "state":"done"
      }
    ]
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
}
