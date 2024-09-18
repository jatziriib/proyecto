import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NovelasPageRoutingModule } from './novelas-routing.module';

import { NovelasPage } from './novelas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NovelasPageRoutingModule
  ],
  declarations: [NovelasPage]
})
export class NovelasPageModule {}
