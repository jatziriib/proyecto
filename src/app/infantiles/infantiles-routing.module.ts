import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfantilesPage } from './infantiles.page';

const routes: Routes = [
  {
    path: '',
    component: InfantilesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfantilesPageRoutingModule {}
