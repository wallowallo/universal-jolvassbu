import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'jolster',
  templateUrl: './jølster.component.html',
  styleUrls: ['./jølster.component.css']
})
export class JølsterComponent {

   public constructor() {}
}
