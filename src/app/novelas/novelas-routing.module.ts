import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NovelasPage } from './novelas.page';

const routes: Routes = [
  {
    path: '',
    component: NovelasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NovelasPageRoutingModule {}
