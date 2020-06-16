import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroPage } from './intro.page';

const routes: Routes = [

  {
    path: '',
    component: IntroPage,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
      },
      {
        path: 'hospital',
        loadChildren: () => import('../hospital/hospital.module').then(m => m.HospitalPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('../about/about.module').then(m => m.AboutPageModule)
      },
    ]
  },



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntroPageRoutingModule { }
