import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { TaskDevService } from '../../Services/task-dev.service';
import * as firebase from 'firebase';
import { ProjectsService } from 'src/app/Services/projects.service';
import { AlertController } from '@ionic/angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-task-dashbord',
  templateUrl: './task-dashbord.page.html',
  styleUrls: ['./task-dashbord.page.scss'],
})
export class TaskDashbordPage implements OnInit {
 

  id: any;
  task: any = [];
  value: any; 
  @ViewChild('lineChart', { static: false }) lineChart;
  @ViewChild('dognut', { static: false }) dognutChart;
  chart: any;
  dognut: any;
  cachedata: any = []
  donetask: any = []
  clicked = true;
  totalTask: any = [];
  dev = false;
  data = [213, 546];
  labels = ['Label 1', 'Label 2'];
  totalhours: number = 0;
  lefthours: number = 0;
  constructor(private route: ActivatedRoute, private router: Router, public devService: TaskDevService, public service: ProjectsService , public alertController: AlertController) {
    this.route.params.subscribe(params => {
      console.log(params["id"])
      this.id=params["id"]
    });
  }

  ngOnInit() {
    
  
 

    this.service.getTasks(this.id).subscribe(element => {
      element.forEach(e => {
        var obj = JSON.parse(JSON.stringify(e.payload.doc.data()));
        if (obj.person == firebase.auth().currentUser.uid) {
          
            this.task.push(obj)
         
        }


      })
      this.calculateHours();
      console.log('taskssss====',this.task)
     
    })

      console.log('tot=',this.totalhours);
      console.log('left=',this.lefthours);
      
    this.calculProgres();
    this.calculateHours();
 }
   calculateHours () {
    this.totalhours = 0;
    this.lefthours = 0;
    console.log('tasks====',this.task);
    
    this.task.forEach(element => {
      
        this.totalhours = Number(this.totalhours) + Number(element.hours);

          this.lefthours = Number(this.lefthours) + Number(element.hours);
       
      });
      console.log('hours==,', this.totalhours,this.lefthours);
      
      this.creatDognut();
   }

  calculProgres() {
    let progress = 0;
    if (this.task.length != 0) {
      if (this.donetask.length != 0) {
        progress = (this.donetask.length / this.task.length) * 100;
        this.service.updateProject(this.id, progress).then(res => {
          console.log(res)
        })
      }
    }
  }

  async update(name){
    console.log(name);
    const alert = await this.alertController.create({
      header: 'Update state', buttons: [
        
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            
            console.log('Confirm Cancel');
          }
        }, {
          text: 'doing',
          handler: (value) => {
            this.service.updateTask(this.id , name , "doing").then(res => {})
            //console.log('Confirm Ok');
          }
        },
          {
          text: 'done',
          handler: (value) => {
            this.service.updateTask(this.id ,    name ,  "done").then(res => {})
           // console.log('Confirm Ok');
          }
        
        }
      ]
    });

    await alert.present();
    
  }

  

  

  creatDognut() {


    this.dognut = new Chart('canvas', {
      type: 'doughnut',
      data: {
        labels: ['Total hours', 'Hours left'],
        datasets: [{
          label: 'Total tasks hours',
          data: [this.totalhours, this.lefthours],
          backgroundColor: ['#a55eea', '#f04141'], // array should have same number of elements as number of dataset
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
 

  color(progress) {
    if (progress == "to do") {
      return "danger";
    }
    if (progress == "doing") {
      return "tertiary";
    }
    if (progress == "done") {
      return "warning";
    }
  }
 
}
