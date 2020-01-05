import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import{ProjectsService} from '../../Services/projects.service';
import { FormGroup, Validators, FormControl,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-modify-project',
  templateUrl: './modify-project.page.html',
  styleUrls: ['./modify-project.page.scss'],
})
export class ModifyProjectPage implements OnInit {
  id:any;
  project:any={};
  client:any="";
  clients:any=[];
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
      
  

    })
    this.service.getClients().then(res=>{
      res.forEach(element => {
        this.clients.push(element);
      });
    })
    this.service.getClient(this.project.client).then(cl=>{
      this.client=cl;
      console.log(cl)
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
    let data={
      "name":value.name,
      "description":value.description,
      "client":value.client,
      "manager":this.project.manager,
      "progress":this.project.progress,
      "type":value.type
    }
    console.log(value);
    this.service.update(data,this.id).then(res=>{
      this.back(this.id);

    })

    
  }
  back(id){
    let url="/task/"+id;
    this.router.navigate([url])
  }

}
