import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FacilitiesComponent } from './facilities.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'facilities', component: FacilitiesComponent }
    ])
  ]
})
export class FacilitiesRoutingModule { }
