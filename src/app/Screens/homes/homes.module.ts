import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomesPage } from './homes.page';
import { HomeContentComponent } from '../../Components/home-content/home-content.component';
import{HContentComponent} from '../../Components/h-content/h-content.component'
import{ProjectsComponent} from '../../Components/projects/projects.component'
import{TeamComponent} from '../../Components/team/team.component';
import { NgCircleProgressModule } from 'ng-circle-progress';


  import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    component: HomesPage,
    children:[
      {
        path:'home',
        component:HContentComponent,

        
      },
      {
        path:'projects',
        component:ProjectsComponent,
      },
      {
        path:'teams',
        component:TeamComponent,
      },
      {
        path: '',
        redirectTo: '/homes/home',
        pathMatch: 'full'
      }
    ],
    

  },
  {
    path: '',
    redirectTo: '/homes/home',
    pathMatch: 'full'
  }
 
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 50,
      
    }),
  ],
  declarations: [HomesPage,
    HomeContentComponent,
    HContentComponent,
    ProjectsComponent,
    TeamComponent,
  ],
  entryComponents:[
  ]
})
export class HomesPageModule {}
