import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfantilesPageRoutingModule } from './infantiles-routing.module';

import { InfantilesPage } from './infantiles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfantilesPageRoutingModule
  ],
  declarations: [InfantilesPage]
})
export class InfantilesPageModule {}
