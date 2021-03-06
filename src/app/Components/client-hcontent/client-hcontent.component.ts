import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';
import { ProjectsService } from '../../Services/projects.service';
import * as firebase from 'firebase/app';
import {Project} from '../../Models/Project';



@Component({
  selector: 'app-client-hcontent',
  templateUrl: './client-hcontent.component.html',
  styleUrls: ['./client-hcontent.component.scss'],
})
export class ClientHContentComponent implements OnInit {
  @ViewChild('dognutChart', { static: false }) dognutChart;

  dognut: any;
  colorArray: any;
  projects: any = [];
  finished:any=[];
  doing:any=[];
  spent:number=0;
  constructor(private route: Router, private service: ProjectsService) { }

  ngOnInit() {
    
    let p=new Project();
    this.service.AsyncProjects().subscribe(
      data => {
        this.projects=[];
        data.forEach(d=>{
          let value = firebase.auth().currentUser;
          var obj = JSON.parse(JSON.stringify(d.payload.doc.data()));
          if (obj['client'] == value.uid) {
             p= obj;
             p.id= d.payload.doc.id;
           
            this.spent=this.spent+p.cost;
            console.log(this.spent)
            this.projects.push(p);
            if(p.progress==100){
              this.finished.push(p)
            }
            else{
              this.doing.push(p)
            }

          }
        });
        this.createDonutsChart();


      }
    );
  }


  getProjects() {

    this.projects = [];
    this.service.getClientProjects().then(res => {

      res.forEach(element => {
        this.projects.push(element);


      });

    },
      err => {
        console.log(err);
      }
    );

  }
  async createDonutsChart() {
   
    this.dognut = new Chart(this.dognutChart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ['finished projects', 'upgoing projects'],
        datasets: [{
          label: 'Projects',
          data: [this.finished.length,this.doing.length],
          backgroundColor: [ '#a55eea', '#8e44ad'], // array should have same number of elements as number of dataset
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
      return "#462373";
    }
    if(type=="mobile"){
      return "#a55eea";
    }
    if(type=="data"){
      return "#8e44ad";
    }
   }
  icon(type) {
    if (type == "web") {
      return "md-desktop";
    }
    if (type == "mobile") {
      return "md-phone-portrait";
    }
    if (type == "data") {
      return "md-analytics";
    }
  }
  openproject(id) {
    this.route.navigate(["/project-details"])

  }
  ionRefresh(event) {
    setTimeout(() => {
      this.getProjects();
      event.target.complete();
    }, 2000);
  }
  ionPull(event) {
    console.log('ionPull Event Triggered!');
  }
  ionStart(event) {
    console.log('ionStart Event Triggered!');
  }
  openRejected(){
    this.route.navigate(["/rejected-propositions"]);
  }
  openProject(value){
    let url='/project-details/'+value
    this.route.navigate([url])
  }
}
