import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VefifyresetPasswordPage } from './vefifyreset-password.page';

const routes: Routes = [
  {
    path: '',
    component: VefifyresetPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VefifyresetPasswordPageRoutingModule {}
