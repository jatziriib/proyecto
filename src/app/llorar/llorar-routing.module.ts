import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LlorarPage } from './llorar.page';

const routes: Routes = [
  {
    path: '',
    component: LlorarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LlorarPageRoutingModule {}
