import { Component, OnInit, Input,ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import {Router} from '@angular/router';
import {ProjectsService} from '../../Services/projects.service';

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
  mobile=0;
  web=0;
  data=0;
  constructor(public route:Router,private service:ProjectsService) { }

  ngOnInit() {
    
      this.getProjects();
     

  }
  ionViewDidEnter() {
    this.createDonutsChart();
  }
  

  getProjects() {
    this.service.getProjects().then(res=>{
     
      res.forEach(element => {
        this.projects.push(element);
        if(element['type']=="mobile"){
          this.mobile+=1;
          console.log(this.mobile);
        }
        if(element['type']=="web"){
         this.web+=1;
         console.log(this.web);
  
       }
       if(element['type']=="data"){
         this.data+=1;
         console.log("data")
  
       }
       
      });
      
    
    },
    err => { 
       console.log(err);}
    );
    this.projects.forEach(element => {
      if(element['type']=="mobile"){
        this.mobile+=1;
      }
      if(element['type']=="web"){
       this.web+=1;

     }
     if(element['type']=="data"){
       this.data+=1;

     }
     
    });

  }
  createDonutsChart() {
    this.dognut = new Chart(this.dognutChart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['mobile', 'web', 'data'],
        datasets: [{
          label: 'Projects types',
          data: [this.mobile,this.web,this.data],
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
}
