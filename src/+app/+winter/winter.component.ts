import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'winter',
  templateUrl: './winter.component.html',
  styleUrls: ['./winter.component.css']
})
export class WinterComponent {

   public constructor() {}
}
