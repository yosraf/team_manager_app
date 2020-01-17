import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { PropositionDetailsPage } from './proposition-details.page';

const routes: Routes = [
  {
    path: '',
    component: PropositionDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
 
  declarations: [PropositionDetailsPage]
})
export class PropositionDetailsPageModule {}
