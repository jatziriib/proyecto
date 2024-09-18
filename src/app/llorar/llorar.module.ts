import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LlorarPageRoutingModule } from './llorar-routing.module';

import { LlorarPage } from './llorar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LlorarPageRoutingModule
  ],
  declarations: [LlorarPage]
})
export class LlorarPageModule {}
