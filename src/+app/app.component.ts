import { Component, Directive, ElementRef, Renderer, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { MdMenuTrigger } from '@angular/material/menu/menu-trigger';

//
/////////////////////////
// ** Example Directive
// Notice we don't touch the Element directly

@Directive({
  selector: '[xLarge]'
})
export class XLargeDirective {
  constructor(element: ElementRef, renderer: Renderer) {
    // ** IMPORTANT **
    // we must interact with the dom through -Renderer-
    // for webworker/server to see the changes
    renderer.setElementStyle(element.nativeElement, 'fontSize', 'x-large');
    // ^^
  }
}

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'app',
  styles: [`
    * { padding:0; margin:0; font-family: 'Droid Sans', sans-serif; }
    #universal { text-align:center; font-weight:bold; padding:15px 0; }
    nav { background:#158126; min-height:40px; border-bottom:5px #046923 solid; }
    nav a { font-weight:bold; text-decoration:none; color:#fff; padding:20px; display:inline-block; }
    nav a:hover { background:#00AF36; }
    .hero-universal { min-height:500px; display:block; padding:20px; background: url('/assets/logo.png') no-repeat center center; }
    .inner-hero { background: rgba(255, 255, 255, 0.75); border:5px #ccc solid; padding:25px; }
    .router-link-active { background-color: #00AF36; }
    main { padding:20px 0; }
    pre { font-size:12px; }
    .background-image { display: flex; }
  `],
  template: `
  <div class="background-image">
    <img src="./assets/images/bakgrunn.jpg" alt="Bakgrunnsbilde">
  </div>
  <h3 id="universal">Jølvassbu Camping</h3>
  <nav>
    <a routerLinkActive="router-link-active" routerLink="home">Home</a>
    <a routerLinkActive="router-link-active" routerLink="about">About</a>
    <a routerLinkActive="router-link-active" routerLink="todo">Todo</a>
    <a routerLinkActive="router-link-active" routerLink="lazy">Lazy</a>
    <a routerLinkActive="router-link-active" routerLink="cabins">Cabins</a>
  </nav>
  <div class="hero-universal">
      <main>
        <router-outlet></router-outlet>
      </main>
  </div>
  `
})
export class AppComponent {
}
