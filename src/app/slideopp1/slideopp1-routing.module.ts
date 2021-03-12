import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Slideopp1Page } from './slideopp1.page';

const routes: Routes = [
  {
    path: '',
    component: Slideopp1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Slideopp1PageRoutingModule {}
