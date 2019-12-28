import { Component, OnInit,ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import {Router} from '@angular/router';
@Component({
  selector: 'app-client-hcontent',
  templateUrl: './client-hcontent.component.html',
  styleUrls: ['./client-hcontent.component.scss'],
})
export class ClientHContentComponent implements OnInit {
  @ViewChild('dognutChart',{static: false}) dognutChart;

  dognut:any;
  colorArray: any;
  projects:any=[];
  web=0;
  mobile=0;
  data=0;

  constructor(private route:Router) { }

  ngOnInit() {
    this.getProjects()
  }
  ionViewDidEnter() {
    this.createDonutsChart();
  }
  

  getProjects() {
    this.projects=[{
      "id":"123",
      "name":"project",
      "description":"blabla",
      "type":"web",
    

    }]
    this.projects.forEach(element => {
      if(element['type']=="web"){
        this.web+=1;
      }
      if(element['type']=="mobile"){
        this.mobile+=1;
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
        labels: ['Done', 'Doing', 'To do'],
        datasets: [{
          label: 'Projects types',
          data: [this.web,this.mobile,this.data],
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
     this.route.navigate(["/project-details"])
  
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
