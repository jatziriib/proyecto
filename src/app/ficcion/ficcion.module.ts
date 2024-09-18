import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiccionPageRoutingModule } from './ficcion-routing.module';

import { FiccionPage } from './ficcion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiccionPageRoutingModule
  ],
  declarations: [FiccionPage]
})
export class FiccionPageModule {}
