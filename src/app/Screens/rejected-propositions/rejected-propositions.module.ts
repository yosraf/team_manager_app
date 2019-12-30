import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RejectedPropositionsPage } from './rejected-propositions.page';

const routes: Routes = [
  {
    path: '',
    component: RejectedPropositionsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RejectedPropositionsPage]
})
export class RejectedPropositionsPageModule {}
