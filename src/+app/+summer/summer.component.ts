import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'summer',
  templateUrl: './summer.component.html',
  styleUrls: ['./summer.component.css']
})
export class SummerComponent {

   public constructor() {}
}
