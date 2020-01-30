import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path: '', redirectTo: 'login-page', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./Screens/home/home.module').then( m => m.HomePageModule)},
  { path: 'login-page', loadChildren: './Screens/login-page/login-page.module#LoginPagePageModule' },
  { path: 'homes', loadChildren: './Screens/homes/homes.module#HomesPageModule' },
  { path: 'account', loadChildren: './Screens/account/account.module#AccountPageModule' },
  { path: 'chat', loadChildren: './Screens/chat/chat.module#ChatPageModule' },
  { path: 'project', loadChildren: './Screens/project/project.module#ProjectPageModule' },
  { path: 'task/:id', loadChildren: './Screens/task/task.module#TaskPageModule' },
  { path: 'task-form/:id', loadChildren: './Screens/task-form/task-form.module#TaskFormPageModule' },
  { path: 'project-proposition', loadChildren: './Screens/project-proposition/project-proposition.module#ProjectPropositionPageModule' },
  { path: 'project-details/:id', loadChildren: './Screens/project-details/project-details.module#ProjectDetailsPageModule' },
  { path: 'client-propositions', loadChildren: './Screens/client-propositions/client-propositions.module#ClientPropositionsPageModule' },
  { path: 'modify-project/:id', loadChildren: './Screens/modify-project/modify-project.module#ModifyProjectPageModule' },
  { path: 'proposition-details/:id', loadChildren: './Screens/proposition-details/proposition-details.module#PropositionDetailsPageModule' },
<<<<<<< HEAD
  { path: 'discussion/:id', loadChildren: './Screens/discussion/discussion.module#DiscussionPageModule' },
  { path: 'modify-proposition/:id', loadChildren: './Screens/modify-proposition/modify-proposition.module#ModifyPropositionPageModule' },
  { path: 'client-prop-details/:id', loadChildren: './Screens/client-prop-details/client-prop-details.module#ClientPropDetailsPageModule' },
];
=======
  { path: 'task-dashbord', loadChildren: './Screens/task-dashbord/task-dashbord.module#TaskDashbordPageModule' },

  ];
>>>>>>> d3f0a41ce3c227ecb71860135958e52acd949237

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
