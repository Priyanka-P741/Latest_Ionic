import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaulterCheckoutPage } from './defaulter-checkout.page';

const routes: Routes = [
  {
    path: '',
    component: DefaulterCheckoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefaulterCheckoutPageRoutingModule {}
