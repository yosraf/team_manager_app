import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import { HomePage } from './home.page';
import{RegisterFormComponent} from '../../Components/register-form/register-form.component';
  import { from } from 'rxjs';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage,RegisterFormComponent  ]
})
export class HomePageModule {

  
}
