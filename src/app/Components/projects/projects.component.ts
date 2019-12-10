import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import { from } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  data:any=[];
  constructor(public route:Router) { }

  ngOnInit() {
    this.data=[
      {
        "id":'1',
        "name":"app gestion fichier",
        "description":"create a web app that ...",
        "type":"web",
        "team":"team 1"
      }
    ];
  }
  

}
