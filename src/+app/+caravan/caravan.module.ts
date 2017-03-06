import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CaravanComponent } from './caravan.component';
import { CaravanRoutingModule } from './caravan-routing.module';

@NgModule({
  imports: [
    SharedModule,
    CaravanRoutingModule
  ],
  declarations: [
    CaravanComponent
  ]
})
export class CaravanModule { }
