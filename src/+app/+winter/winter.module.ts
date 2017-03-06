import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { WinterComponent } from './winter.component';
import { WinterRoutingModule } from './winter-routing.module';

@NgModule({
  imports: [
    SharedModule,
    WinterRoutingModule
  ],
  declarations: [
    WinterComponent
  ]
})
export class WinterModule { }
