import { Component, OnInit, ViewChild } from '@angular/core';
import {ProjectsService} from '../../Services/projects.service'
import {ActivatedRoute,Router} from "@angular/router";
import { Chart } from 'chart.js';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.page.html',
  styleUrls: ['./project-details.page.scss'],
})
export class ProjectDetailsPage implements OnInit {
  chart:any;
  project:any={};
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
    this.service.getProject(this.id).then(res=>{
      var p={
        "name":res.name,
        "description":res.description,
        "client":res.client,
        "manager":res.manager,
        "type":res.type,
        "progress":res.progress
      }
      this.project=p;


    });
    this.service.getTasks(this.id).forEach(task=>{
     
    task.forEach(
       t=>{
        var obj = JSON.parse(JSON.stringify(t.payload.doc.data()));

        var p= {
          "name": obj.name,
          "description": obj.description,
          "person":obj.person,
          "state":obj.state
        };
        if(p['state']!="done"){
          this.tasks.push(p);
          if(p['state']=='to do'){
            this.to_do.push(p);

          }
          else{
            this.doing.push(p);
            
          }
        }
        else{
          this.done.push(p);
        }
        this.data=[this.to_do.length,this.doing.length,this.done.length]
        this.createLineChart()

       
        this.service.getClient(p.person).then(res=>{
              
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
        
       
        labels: ['to do','doing','doine'],
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
