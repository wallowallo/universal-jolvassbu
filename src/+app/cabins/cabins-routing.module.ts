import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CabinsComponent } from './cabins.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'cabins', component: CabinsComponent }
    ])
  ]
})
export class CabinsRoutingModule { }
