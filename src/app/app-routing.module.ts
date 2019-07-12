import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'formlayout', loadChildren: () => import('./pages/formlayout/formlayout.module').then(m => m.FormlayoutModule) },
  { path: 'formHorizontal', loadChildren: () => import('./pages/form-horizontal/form-horizontal.module').then(m => m.FormHorizontalModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
