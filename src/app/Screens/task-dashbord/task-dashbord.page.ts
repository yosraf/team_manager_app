import { Component, OnInit } from '@angular/core';
import {DragulaService } from 'ng2-dragula';
import { ToastController } from '@ionic/angular';;

@Component({
  selector: 'app-task-dashbord',
  templateUrl: './task-dashbord.page.html',
  styleUrls: ['./task-dashbord.page.scss'],
})
export class TaskDashbordPage implements OnInit {
  toDo = [
    { value: 'Buy Milk', color: 'primary' },
    { value: 'Write new Post', color: 'primary' }
  ];
  doing = [
    { value: 'Schedule newsletter', color: 'secondary' },
    { value: 'Find new Ionic Academy topics', color: 'secondary' }
  ];
  done = [
    { value: 'Improve page performance', color: 'tertiary' },
    { value: 'Clean the house', color: 'tertiary' }
  ];
 
  constructor(private dragulaService: DragulaService, private toastController: ToastController) {
    this.dragulaService.drag('bag')
    .subscribe(({ name, el, source }) => {
      el.setAttribute('color', 'success');
    });
    
    this.dragulaService.dropModel('bag')
      .subscribe(({ item }) => {
        item['color'] = 'primary';
      });

      
  }
  

  ngOnInit() {}
  ionRefresh(event) {
    setTimeout(() => {
  
      event.target.complete();
    }, 2000);
}
ionPull(event){
  console.log('ionPull Event Triggered!');
}

}
