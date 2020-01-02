import { Component, OnInit } from '@angular/core';
import {ProjectsService} from '../../Services/projects.service'
import {ActivatedRoute,Router} from "@angular/router";

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.page.html',
  styleUrls: ['./project-details.page.scss'],
})
export class ProjectDetailsPage implements OnInit {
  project:any;
  id:any;
  tasks:any=[];
  team:any=[];
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
      console.log(this.project)


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
        this.tasks.push(p);
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
}
