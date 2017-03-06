import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SummerComponent } from './summer.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'summer', component: SummerComponent }
    ])
  ]
})
export class SummerRoutingModule { }
