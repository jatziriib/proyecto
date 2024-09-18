import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EjemploPageRoutingModule } from './ejemplo-routing.module';

import { EjemploPage } from './ejemplo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EjemploPageRoutingModule
  ],
  declarations: [EjemploPage]
})
export class EjemploPageModule {}
