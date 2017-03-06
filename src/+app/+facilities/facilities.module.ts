import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { FacilitiesComponent } from './facilities.component';
import { FacilitiesRoutingModule } from './facilities-routing.module';

@NgModule({
  imports: [
    SharedModule,
    FacilitiesRoutingModule
  ],
  declarations: [
    FacilitiesComponent
  ]
})
export class FacilitiesModule { }
