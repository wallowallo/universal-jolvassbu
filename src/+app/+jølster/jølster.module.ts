import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { JølsterComponent } from './jølster.component';
import { JølsterRoutingModule } from './jølster-routing.module';

@NgModule({
  imports: [
    SharedModule,
    JølsterRoutingModule
  ],
  declarations: [
    JølsterComponent
  ]
})
export class JølsterModule { }
