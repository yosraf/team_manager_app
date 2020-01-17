import { Component, OnInit, ViewChild } from '@angular/core';
import {ProjectsService} from '../../Services/projects.service'
import {ActivatedRoute,Router} from "@angular/router";
import { Chart } from 'chart.js';
import {Project} from '../../Models/Project'
import {Task} from '../../Models/Task';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.page.html',
  styleUrls: ['./project-details.page.scss'],
})
export class ProjectDetailsPage implements OnInit {
  chart:any;
  project:any=new Project();
  id:any;
  tasks:any=[];
  team:any=[];
  done:any=[];
  doing:any=[];
  to_do:any=[];
  data:any=[];
  @ViewChild('lineChart', { static: false }) lineChart;

  constructor(private service:ProjectsService,private route: ActivatedRoute,private router:Router) { 
    this.route.params.subscribe( params => {
      console.log(params["id"])
      this.id=params["id"]
  } );
  }
  

  ngOnInit() {
    let p=new Project();
    let t=new Task();
    this.service.getProject(this.id).then(res=>{
       p=res
      this.project=p;


    });
    this.service.getTasks(this.id).forEach(task=>{
     
    task.forEach(
       task=>{
        var obj = JSON.parse(JSON.stringify(task.payload.doc.data()));

      
        t=obj;
        if(t['state']!="done"){
          this.tasks.push(t);
          if(t['state']=='to do'){
            this.to_do.push(t);

          }
          else{
            this.doing.push(t);
            
          }
        }
        else{
          this.done.push(t);
        }
        this.data=[this.to_do.length,this.doing.length,this.done.length]
        this.createLineChart()

       
        this.service.getClient(t.person).then(res=>{
              
          this.team.push(res)
        })

       }
    );
    
     
    })
    
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
   createLineChart(){
     
    this.chart = new Chart(this.lineChart.nativeElement, {
      type: 'line',
      data: {
        
       
        labels: ['to do','doing','done'],
        datasets:[{
          fill	:false,
          borderColor	:'#a55eea',
          data: this.data,
          borderWidth: 2
        }]

      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true,
            stacked: true
          }],
        }
      }
    });
   }
}
