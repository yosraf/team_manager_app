import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ClientPropDetailsPage } from './client-prop-details.page';

const routes: Routes = [
  {
    path: '',
    component: ClientPropDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ClientPropDetailsPage]
})
export class ClientPropDetailsPageModule {}
