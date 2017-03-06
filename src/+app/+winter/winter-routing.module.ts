import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WinterComponent } from './winter.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'winter', component: WinterComponent }
    ])
  ]
})
export class WinterRoutingModule { }
