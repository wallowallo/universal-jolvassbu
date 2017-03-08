import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
declare var google: any;

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

   ngOnInit() {
			 const uluru = {lat: 61.491440, lng: 6.1128300};
			 const map = new google.maps.Map(document.getElementById('map'), {
				zoom: 13,
				center: uluru
			 });
			 const marker = new google.maps.Marker({
				 position: uluru,
				 map: map
			 });
   }
}
