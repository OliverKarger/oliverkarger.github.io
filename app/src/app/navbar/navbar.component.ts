import { Component, Input } from '@angular/core';

import {faSlidersH} from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{
  @Input() callback!: (item: string) => void;
  /** Start: Fontawesome Icons */
  navToggleIcon = faSlidersH;
  /** End: Fontawesome Icons */

  /** Start: Responsive Design System */
  navbarState: boolean = true; // true = displayed, false = hidden
  clickToggle = () => {
    const navbarNav = document.getElementsByClassName('navbar-nav')[0];
    if (this.navbarState) {
      navbarNav.classList.add('hidden');
    } else {
      navbarNav.classList.remove('hidden');
    }
    this.navbarState = !this.navbarState;
  }
  /** End: Responsive Design System */
}
