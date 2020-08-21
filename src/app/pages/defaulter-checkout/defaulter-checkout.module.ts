import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefaulterCheckoutPageRoutingModule } from './defaulter-checkout-routing.module';

import { DefaulterCheckoutPage } from './defaulter-checkout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DefaulterCheckoutPageRoutingModule
  ],
  declarations: [DefaulterCheckoutPage]
})
export class DefaulterCheckoutPageModule {}