import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./Screens/home/home.module').then( m => m.HomePageModule)},
  { path: 'login-page', loadChildren: './Screens/login-page/login-page.module#LoginPagePageModule' },
  { path: 'homes', loadChildren: './Screens/homes/homes.module#HomesPageModule' },
  { path: 'modal', loadChildren: './Screens/modal/modal.module#ModalPageModule' },
  { path: 'settings', loadChildren: './Screens/settings/settings.module#SettingsPageModule' },
  { path: 'account', loadChildren: './Screens/account/account.module#AccountPageModule' },
  { path: 'chat', loadChildren: './Screens/chat/chat.module#ChatPageModule' },
  { path: 'project', loadChildren: './Screens/project/project.module#ProjectPageModule' },
  { path: 'task', loadChildren: './Screens/task/task.module#TaskPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
