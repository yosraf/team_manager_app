import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NewTaskDashbordPage } from './new-task-dashbord.page';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { DragulaModule } from 'ng2-dragula';

const routes: Routes = [
  {
    path: '',
    component: NewTaskDashbordPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 50,
      
    }),
    RouterModule.forChild(routes),
    DragulaModule
  ],
  declarations: [NewTaskDashbordPage]
})
export class NewTaskDashbordPageModule {}


