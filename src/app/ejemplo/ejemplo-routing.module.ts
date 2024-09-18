import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EjemploPage } from './ejemplo.page';

const routes: Routes = [
  {
    path: '',
    component: EjemploPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjemploPageRoutingModule {}
