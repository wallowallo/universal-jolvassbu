import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CabinsComponent } from './cabins.component';
import { CabinsRoutingModule } from './cabins-routing.module';

@NgModule({
  imports: [
    SharedModule,
    CabinsRoutingModule
  ],
  declarations: [
    CabinsComponent
  ]
})
export class CabinsModule { }
