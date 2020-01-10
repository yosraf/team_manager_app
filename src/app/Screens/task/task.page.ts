import { Component, OnInit, ViewChild } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import{ProjectsService} from '../../Services/projects.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage implements OnInit {
  @ViewChild('lineChart',{static: false}) lineChart;
  @ViewChild('dognut',{static: false}) dognutChart;
  chart:any;
  dognut:any;
  cachedata:any=[]
  donetask:any=[]
  id:any;
  team:any=new Set([]);
  task:any=[];
  clicked=true;
  totalTask:any=[];
  dev=false;
  totalhours:number=0;
  lefthours:number=0;
  constructor(private route: ActivatedRoute,private router:Router,private service:ProjectsService) {
    this.route.params.subscribe( params => {
      console.log(params["id"])
      this.id=params["id"]
  } );
}

  ngOnInit() {
    this.service.getTasks(this.id).subscribe(
    
      doc=>{
        let cache;
        this.task=doc.map(
            element=>{
            
              var obj = JSON.parse(JSON.stringify(element.payload.doc.data()));
              this.service.getClient(obj.person).then(res=>{
                obj.person=res;
               
                if(cache){
                  if(obj.person==cache){
                    var el=this.totalTask[this.totalTask.length-1]+1;
                    this.totalTask.pop(this.totalTask.length-1);
                    this.totalTask.push(el);
                   
                  }
                  else{
                    this.totalTask.push(1);
                  }
                }
                else{
                  this.totalTask.push(1);
                }
                this.team.add(res);
                this.createLine();
               
                cache=res;
                
               
              })
            
             
              return obj;
            },
        );
        
       
        this.cachedata=this.task;
      }
    );
    this.service.getDoneTasks(this.id).then(res=>{
      this.donetask=res;
      this.calculProgres()

    })
    
   
 
  }

  calculProgres(){
    let progress=0;
    if(this.task.length!=0){
      if(this.donetask.length!=0){
        progress=(this.donetask.length/this.task.length)*100;
        this.service.updateProject(this.id,progress).then(res=>{
          console.log(res)
        })
      }
    }
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
      this.task=this.cachedata;
      this.clicked=true;
     this.dev=false;
      
    }
    else{
      fil=[];
      this.clicked=false;
      this.dev=true;
      this.task=this.cachedata;
      this.totalhours=0;
      this.lefthours=0;
      this.task.forEach(element => {
        if(element.person==n){
          fil.push(element);
          this.totalhours=Number(this.totalhours)+Number(element.hours);
       
          if(element.state!='done'){
            this.lefthours=Number(this.lefthours)+Number(element.hours);
          }
          console.log(this.lefthours)
        }
       
      });
    
      this.task=fil;
      this.creatDognut();

    }
    
 

   }
   open(){
    let url="/task-form/"+this.id;
    console.log(url);
    this.router.navigate([url]);
   }
   ionRefresh(event) {
    setTimeout(() => {
  
      event.target.complete();
    }, 2000);
}
ionPull(event){
  console.log('ionPull Event Triggered!');
}
ionStart(event){
  console.log('ionStart Event Triggered!');
}
openModify(id){
  let url="/modify-project/"+id;
   this.router.navigate([url])
}

 createLine(){
  this.chart = new Chart(this.lineChart.nativeElement, {
    type: 'line',

    data: {
      labels:Array.from(this.team),
      datasets: [{
        data:this.totalTask,
        label:"Number of tasks per developer",
        borderColor	:'#a55eea',
        borderWidth: 2,
        fill:false
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
creatDognut(){
  this.dognut = new Chart(this.dognutChart.nativeElement, {
    type: 'doughnut',
    data: {
      labels: ['Total hours', 'Hours left'],
      datasets: [{
        label: 'Total tasks hours',
        data: [this.totalhours, this.lefthours],
        backgroundColor: [ '#a55eea', '#f04141'], // array should have same number of elements as number of dataset
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}
}
