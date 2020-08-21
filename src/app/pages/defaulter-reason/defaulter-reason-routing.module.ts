import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaulterReasonPage } from './defaulter-reason.page';

const routes: Routes = [
  {
    path: '',
    component: DefaulterReasonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefaulterReasonPageRoutingModule {}
