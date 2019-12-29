import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClientPropositionsPage } from './client-propositions.page';

const routes: Routes = [
  {
    path: '',
    component: ClientPropositionsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClientPropositionsPage]
})
export class ClientPropositionsPageModule {}
