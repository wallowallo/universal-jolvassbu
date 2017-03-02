import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { CarouselModule } from 'ng2-bootstrap/carousel';

import { HomeModule } from './+home/home.module';
import { AboutModule } from './+about/about.module';
import { TodoModule } from './+todo/todo.module';
import { CabinsModule } from './cabins/cabins.module';

import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, XLargeDirective } from './app.component';


@NgModule({
  declarations: [ AppComponent, XLargeDirective ],
  imports: [
    SharedModule,
    HomeModule,
    AboutModule,
    TodoModule,
    CabinsModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    CarouselModule.forRoot()
  ]
})
export class AppModule {
}

export { AppComponent } from './app.component';
