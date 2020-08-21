import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';


import { IonicModule } from '@ionic/angular';

import { DefaulterReasonPageRoutingModule } from './defaulter-reason-routing.module';

import { DefaulterReasonPage } from './defaulter-reason.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DefaulterReasonPageRoutingModule
  ],
  declarations: [DefaulterReasonPage]
})
export class DefaulterReasonPageModule {}
