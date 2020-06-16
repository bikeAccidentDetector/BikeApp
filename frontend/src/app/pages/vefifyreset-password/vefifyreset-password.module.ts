import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VefifyresetPasswordPageRoutingModule } from './vefifyreset-password-routing.module';

import { VefifyresetPasswordPage } from './vefifyreset-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VefifyresetPasswordPageRoutingModule
  ],
  declarations: [VefifyresetPasswordPage]
})
export class VefifyresetPasswordPageModule {}
