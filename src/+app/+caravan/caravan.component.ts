import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'caravan',
  templateUrl: './caravan.component.html',
  styleUrls: ['./caravan.component.css']
})
export class CaravanComponent {

   public constructor() {}
}
