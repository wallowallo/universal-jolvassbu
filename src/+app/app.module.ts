import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HomeModule } from './+home/home.module';
import { CabinsModule } from './+cabins/cabins.module';
import { CaravanModule } from './+caravan/caravan.module';
import { ContactModule } from './+contact/contact.module';
import { FacilitiesModule } from './+facilities/facilities.module';
import { JølsterModule } from './+jølster/jølster.module';
import { MapModule } from './+map/map.module';
import { SummerModule } from './+summer/summer.module';
import { WinterModule } from './+winter/winter.module';

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, XLargeDirective } from './app.component';


@NgModule({
  declarations: [ AppComponent, XLargeDirective ],
  imports: [
    SharedModule,
    HomeModule,
    CabinsModule,
    FacilitiesModule,
    JølsterModule,
    ContactModule,
    SummerModule,
    WinterModule,
    CaravanModule,
    MapModule,
    AppRoutingModule
  ]
})
export class AppModule {
}

export { AppComponent } from './app.component';
