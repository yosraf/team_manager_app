import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomesPage } from './homes.page';
import { HomeContentComponent } from '../../Components/home-content/home-content.component';
import{HContentComponent} from '../../Components/h-content/h-content.component'
import{ProjectsComponent} from '../../Components/projects/projects.component'
import{ClientHContentComponent} from '../../Components/client-hcontent/client-hcontent.component'
import {ClientProjectsComponent} from '../../Components/client-projects/client-projects.component'
import{ClientHomeContentComponent} from '../../Components/client-home-content/client-home-content.component';
import { LongPressModule } from 'ionic-long-press';

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
    
     /* {
        path: '',
        redirectTo: '/homes/home',
        pathMatch: 'full'
      },*/
      {
        path:'clientProjects',
        component:ClientProjectsComponent
      },
      {
        path:'clientHome',
        component:ClientHContentComponent
      }
    ],
    

  },
  /*{
    path: '',
    redirectTo: '/homes/home',
    pathMatch: 'full'
  }*/
 
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    LongPressModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 50,
      
    }),
  ],
  declarations: [HomesPage,
    HomeContentComponent,
    HContentComponent,
    ProjectsComponent,
    ClientHomeContentComponent,
    ClientHContentComponent,
    ClientProjectsComponent
  ],
  entryComponents:[
  ]
})
export class HomesPageModule {}
