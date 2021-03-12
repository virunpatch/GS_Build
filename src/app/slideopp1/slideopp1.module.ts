import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Slideopp1PageRoutingModule } from './slideopp1-routing.module';

import { Slideopp1Page } from './slideopp1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Slideopp1PageRoutingModule
  ],
  declarations: [Slideopp1Page]
})
export class Slideopp1PageModule {}
