import { Component, OnInit, Input,ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import {Router} from '@angular/router';
import {ProjectsService} from '../../Services/projects.service';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-h-content',
  templateUrl: './h-content.component.html',
  styleUrls: ['./h-content.component.scss'],
})
export class HContentComponent implements OnInit {
  @ViewChild('lineChart',{static: false}) lineChart;


  bars: any;
  projects:any=[];
  cost:number=0;
  labels:any=[];
  costs:any=[];
  highest_pro:any=[];
  constructor(public route:Router,private service:ProjectsService) { }

  ngOnInit() {
    let cache:any;
   this.service.AsyncProjects().subscribe(
    data => {
      this.projects=[];
      this.costs=[];
      this.labels=[];

      data.forEach(d=>{
        let value = firebase.auth().currentUser;
        var obj = JSON.parse(JSON.stringify(d.payload.doc.data()));

        if(obj['manager']==value.uid){
          var p= {
            "name": obj.name,
            "description": obj.description,
            "manager": obj.manager,
            "client": obj.client,
            "progress": obj.progress,
            "type": obj.type,
            "id": d.payload.doc.id,
            "cost":obj.cost
          };
          if(cache){
            if(cache.cost<p.cost){
              this.highest_pro.push(p)
            }
          }
        
                
          this.cost+=p.cost;
          this.projects.push(p);
          this.labels.push(p.name);
          this.costs.push(p.cost)
          this.createLine();
          cache=p;

        }
      });
   
    }
    
  );


  }
 

  getProjects() {
    this.projects=[];
    this.service.getProjects() .then(res=>{
     
      res.forEach(element => {
        this.projects.push(element);
      
       
      });
    
    },
    err => { 
       console.log(err);}
    );

  }
  createLine(){
    this.bars = new Chart(this.lineChart.nativeElement, {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [{
          label: 'Projects with their costs',
          data:this.costs,
          borderColor	:'#a55eea',
          backgroundColor: '#d6b0ff', 
          borderWidth: 2
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

  color(type){
    if(type=="web"){
      return "#462373";
    }
    if(type=="mobile"){
      return "#a55eea";
    }
    if(type=="data"){
      return "#8e44ad";
    }
   }
   icon(type){
    if(type=="web"){
      return "md-desktop";
    }
    if(type=="mobile"){
      return "md-phone-portrait";
    }
    if(type=="data"){
      return "md-analytics";
    }
   }
   openproject(id){
    let url="/task/"+id;
    this.route.navigate([url])
  }
   ionRefresh(event) {
    setTimeout(() => {
     this.getProjects();
      event.target.complete();
    }, 2000);
}
ionPull(event){
  console.log('ionPull Event Triggered!');
}
ionStart(event){
  console.log('ionStart Event Triggered!');
}
openProp(){
  this.route.navigate(["/client-propositions"]);
}
}
