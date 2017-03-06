import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { JølsterComponent } from './jølster.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'jolster', component: JølsterComponent }
    ])
  ]
})
export class JølsterRoutingModule { }
