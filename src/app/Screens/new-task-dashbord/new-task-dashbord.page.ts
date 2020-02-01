import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskDevService } from 'src/app/task-dev.service';
import { ProjectsService } from 'src/app/Services/projects.service';
import * as firebase from "firebase";
@Component({
  selector: 'app-new-task-dashbord',
  templateUrl: './new-task-dashbord.page.html',
  styleUrls: ['./new-task-dashbord.page.scss'],
})
export class NewTaskDashbordPage implements OnInit {
  toDo = [];
  doing = [];
  done = [];
  id: any;
  tasks: any = []

  constructor(private dragulaService: DragulaService, private route: ActivatedRoute, private service: ProjectsService) {
    this.route.params.subscribe(params => {
      console.log(params["id"])
      this.id = params["id"]
    });
    this.dragulaService.drag('bag')
      .subscribe(({ name, el, source }) => {

        el.setAttribute('color', 'success');
      });

      this.dragulaService.drop('bag')
      .subscribe(({name, el, target, source, sibling}) => {
         
          })
    this.dragulaService.dropModel('bag')
      .subscribe(({ item }) => {
        console.log('=====',item)
        item['color'] = 'primary';
      });

  }

  ngOnInit() {
    this.service.getTasks(this.id).subscribe(element => {
      element.forEach(e => {
        var obj = JSON.parse(JSON.stringify(e.payload.doc.data()));
        if (obj.person == firebase.auth().currentUser.uid) {
          if (obj.state == "to do") {
            this.tasks.push(obj)
          }
          if (obj.state == "doing") {
            this.doing.push(obj)
          }
          if (obj.state == "done") {
            this.done.push(obj)
          }
        }


      })
      console.log(this.tasks)
    })
  }


}
