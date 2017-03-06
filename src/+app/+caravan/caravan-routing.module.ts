import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CaravanComponent } from './caravan.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'caravan', component: CaravanComponent }
    ])
  ]
})
export class CaravanRoutingModule { }
