import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MapComponent } from './map.component';
import { MapRoutingModule } from './map-routing.module';

@NgModule({
  imports: [
    SharedModule,
    MapRoutingModule
  ],
  declarations: [
    MapComponent
  ]
})
export class MapModule { }
