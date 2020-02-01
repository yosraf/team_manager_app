import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';
import { TaskDevService } from '../../Services/task-dev.service';
import * as firebase from 'firebase/app';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-developer-hcontent',
  templateUrl: './developer-hcontent.component.html',
  styleUrls: ['./developer-hcontent.component.scss'],
})

export class DeveloperHcontentComponent implements OnInit {
  @ViewChild('lineChart', { static: false }) lineChart;

  dognut: any;
  colorArray: any;
  projects: any = [];
  tasks: any = [];
  bars: any;
  names: any = [];
  progress: any = [];
  
  constructor(private route: Router, private service: TaskDevService) { }


  ngOnInit() {
   
   
    let value = firebase.auth().currentUser;

    this.service.getProjects().then(res => {


      this.projects =res;

      this.service.getProjectProgess().then(res => {
        this.progress = res
        console.log(res)
      })
      
      this.service.getProjectNames().then(res => {
        this.names = res
        console.log(res)
        this.createLine();
      })

     
    })


  }
  /*ngAfterViewInit(){
    this.progress=this.service.getProjectProgess();
    this.names=this.service.getProjectNames();
    console.log(this.names)
    this.createLine(this.names,this.progress);

  }*/
  /* ionviewdidenter(){
     this.progress=this.service.getProjectProgess();
     this.names=this.service.getProjectNames();
     console.log(this.names)
     this.createLine(this.names,this.progress);
 
   }*/



  createLine() {
    this.bars = new Chart(this.lineChart.nativeElement, {
      type: 'line',
      data: {
        labels: this.names,
        datasets: [{
          label: 'Projects with their progress',
          data: this.progress,
          borderColor: '#a55eea',
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
  
    openProject(id){
      console.log('i M GOING TO TASK DAHSBOARD');
      
      let url='/task-dashbord/'+id;
      this.route.navigate([url])
    }

   /* openProject(id){
      console.log('i M GOING TO TASK DAHSBOARD');
      
      let url='/new-task-dashbord/'+id;
      this.route.navigate([url])
    }*/
  

    ionRefresh(event) {
      setTimeout(() => {
       this.getProjects();
        event.target.complete();
      }, 2000);
  }

  color(type) {
    if (type == "web") {
      return "#462373";
    }
    if (type == "mobile") {
      return "#a55eea";
    }
    if (type == "data") {
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

}
