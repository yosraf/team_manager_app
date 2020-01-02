import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProjectDetailsPage } from './project-details.page';
import { NgCircleProgressModule } from 'ng-circle-progress';

const routes: Routes = [
  {
    path: '',
    component: ProjectDetailsPage
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
    RouterModule.forChild(routes)
  ],
  declarations: [ProjectDetailsPage]
})
export class ProjectDetailsPageModule {}
