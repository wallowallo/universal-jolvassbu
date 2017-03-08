import { Component, Directive, ElementRef, Renderer, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
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
  * {
    padding:0;
    margin:0;
  }

  #universal {
    text-align:center;
    font-weight:bold;
    padding:15px 0;
  }

  nav {
    position: fixed;
    right: 0;
    left: 0;
    z-index: 999;

    display: flex;
    flex-wrap: wrap;
    background: LightSkyBlue;
    opacity: 0.8;
    min-height:40px;
    align-items: center;
    justify-content: center;
  }

  nav a {
    font-weight:bold;
    text-decoration:none;
    color:#fff;
    padding: 20px;
    display:inline-block;
  }

  .hero-universal {
    min-height:500px;
    display:block;
    padding:20px;
  }

  main {
    padding:20px 0;
  }

  pre {
    font-size:12px;
  }

  .logo {
      width: 90px;
      height: 30px;
    }

  .header {
    width: 100vw;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    background-image: url('./assets/images/bakgrunn.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attatchment: fixed;
  }

  h3 {
    font-size: 2rem;
    padding: 5rem;
    text-shadow: 1px 1px #333;
    color: #fff;
  }

  /* Dropdown Button */
.dropbtn {
    background-color: LightSkyBlue;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
    position: relative;
    display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
    display: none;
    position: absolute;
    background-color: LightSkyBlue;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: DodgerBlue;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
    display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
    background-color: LightSkyBlue;
    opacity: 0.8;
}
  `],
  template:`
    <nav>
      <a routerLinkActive="router-link-active" routerLink="home">
        <img class="logo" src="./assets/images/logo-jølvassbu.gif">
      </a>
      <div class="dropdown">
        <button class="dropbtn">Overnatting</button>
        <div class="dropdown-content">
          <a routerLinkActive="router-link-active" routerLink="cabins">Hytter</a>
          <a routerLinkActive="router-link-active" routerLink="caravan">Bobil & Telt</a>
          <a routerLinkActive="router-link-active" routerLink="facilities">Servicebygg</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Aktiviteter</button>
        <div class="dropdown-content">
          <a routerLinkActive="router-link-active" routerLink="summer">Sommer</a>
          <a routerLinkActive="router-link-active" routerLink="winter">Vinter</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">Info</button>
        <div class="dropdown-content">
          <a routerLinkActive="router-link-active" routerLink="jolster">Jølster</a>
          <a routerLinkActive="router-link-active" routerLink="map">Kart</a>
          <a routerLinkActive="router-link-active" routerLink="contact">Kontakt Oss</a>
        </div>
      </div>
    </nav>
    <div class="header">
    </div>
    <div class="hero-universal">
        <main>
          <router-outlet></router-outlet>
        </main>
    </div>
  `
})
export class AppComponent {
}
