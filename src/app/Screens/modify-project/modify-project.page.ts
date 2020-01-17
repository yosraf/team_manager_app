import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import{ProjectsService} from '../../Services/projects.service';
import { FormGroup, Validators, FormControl,FormBuilder } from '@angular/forms';
import {Project} from '../../Models/Project';

@Component({
  selector: 'app-modify-project',
  templateUrl: './modify-project.page.html',
  styleUrls: ['./modify-project.page.scss'],
})
export class ModifyProjectPage implements OnInit {
  id:any;
  project:any={};
  owner:any="";
  clients:any=[];
  uid:any="";
  validation: FormGroup;
  constructor(private route: ActivatedRoute,private router:Router,
    private service:ProjectsService,private formBuilder: FormBuilder) {
    this.route.params.subscribe( params => {
     
      this.id=params["id"]
  } );   
}
  ngOnInit() {
    this.service.getProject(this.id).then(res=>{
      this.project=res;
      this.uid=this.project.client;
       console.log(this.project.client)
      this.service.getClient(this.uid).then(cl=>{
        this.owner=cl;
        console.log(this.owner)
        console.log(cl)
      })

    })
    this.service.getClients().then(res=>{
      res.forEach(element => {
        this.clients.push(element);
      });
    })
    
    this.validation =this.formBuilder.group({
     
      name: new FormControl('', Validators.compose([
      

      ])),
      description: new FormControl('', Validators.compose([

      ])),
      type: new FormControl('', Validators.compose([
      ])),
     
     
      client: new FormControl('', Validators.compose([
      ]))
    }); 
   
  }
  modify(value){
    let client;
    if(value.client==undefined){
      client=this.project.client;
    }
    else{
      this.clients.forEach(element => {
        if(element.username==value.client){
          client=element.uid;
        }
        
      });
    }
    let data= new Project();
    data.name=value.name;
    data.description=value.description;
    data.client=client;
    data.manager=this.project.manager;
    data.progress=this.project.progress;
    data.type=this.project.type;
    /*let data={
      "name":value.name,
      "description":value.description,
      "client":client,
      "manager":this.project.manager,
      "progress":this.project.progress,
      "type":value.type
    }*/
    this.service.update(data,this.id).then(res=>{
      this.back(this.id);

    })

    
  }
  back(id){
    let url="/task/"+id;
    this.router.navigate([url])
  }
  

}
