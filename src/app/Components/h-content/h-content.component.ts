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
  @ViewChild('dognutChart',{static: false}) dognutChart;
 

  bars: any;
  dognut:any;
  colorArray: any;
  projects:any=[];
  constructor(public route:Router,private service:ProjectsService) { }

  ngOnInit() {
    
    
   this.service.AsyncProjects().subscribe(
    data => {
      this.projects=[];

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
            "id": d.payload.doc.id
          };
          this.projects.push(p);

        }
      });
      

    }
  );

  }
  ionViewDidEnter() {
    this.createDonutsChart();
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
  async createDonutsChart() {
    let web=0;
    let mobile=0;
    let data=0;
    var projs=await this.service.getProjects();
    projs.forEach(element => {
      console.log("fetch projects");
      if(element['type']=="mobile"){
          mobile+=1;
      }
      if(element['type']=="web"){
       web+=1;

     }
     if(element['type']=="data"){
       data+=1;

     }
     
    });

  
    this.dognut = new Chart(this.dognutChart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['Mobile', 'Web', 'Data'],
        datasets: [{
          label: 'Projects types',
          data: [mobile,web,data],
          backgroundColor: ['#e67e22','#a55eea','#8e44ad'], // array should have same number of elements as number of dataset
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
  color(type){
    if(type=="web"){
      return "#e67e22";
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
  //Emitted while the user is pulling down the content and exposing the refresher.
  console.log('ionPull Event Triggered!');
}
ionStart(event){
  //Emitted when the user begins to start pulling down.
  console.log('ionStart Event Triggered!');
}
openProp(){
  this.route.navigate(["/client-propositions"]);
}
}
