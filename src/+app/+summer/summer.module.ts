import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { SummerComponent } from './summer.component';
import { SummerRoutingModule } from './summer-routing.module';

@NgModule({
  imports: [
    SharedModule,
    SummerRoutingModule
  ],
  declarations: [
    SummerComponent
  ]
})
export class SummerModule { }
