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
    this.data=[
      {
        "id":'1',
        "name":"crud project",
        "description":"create a web app that ...",
        "state":"to do"
      }]
  }
  color(progress){
    if(progress=="to do"){
      return "#feca57";
    }
    if(progress=="doing"){
      return "#ce82ed";
    }
    if(progress=="done"){
      return "#8e44ad";
    }
   }
}
