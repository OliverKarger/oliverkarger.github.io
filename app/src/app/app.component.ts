import {Component} from '@angular/core';
import {
  faUserCircle,
  faHome,
  faBlog,
  faIdCard,
  faCog,
  faToggleOff,
  faToggleOn,
  faFlag,
} from '@fortawesome/free-solid-svg-icons';
import {faGitAlt} from '@fortawesome/free-brands-svg-icons';
import * as config from '../config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
/**
 * @description Main App Component
 * @author Oliver Karger <kmaster@oliver-karger.de>
 * @date 09/06/2021
 * @export
 * @class AppComponent
 */
export class AppComponent {
  /** Page Title */
  title = 'Oliver Karger';

  /** Start: Nav / Toggle Symbols */
  navUserCircleSymbol = faUserCircle;
  navProjectSymbol = faGitAlt;
  navHomeIcon = faHome;
  navBlogIcon = faBlog;
  navContactIcon = faIdCard;
  loadingSymbol = faCog;
  toggleNavIcon = faToggleOff;
  toggleLangIcon = faFlag;
  /** End: Nav / Toggle Symbols */

  /** Start: Data */
  langData = config.lang.de;
  underConstruction: boolean = true;
  navAlign: boolean = false; // false = left, true = top
  langMode: boolean = false; // false = DE, true = EN
  bookingsModal: boolean = false;
  /** End: Data */

  /**
   * @description Toggle Nav Position between Left/Tops
   * @author Oliver Karger <kmaster@oliver-karger.de>
   * @date 09/06/2021
   * @memberof AppComponent
   */
  navToggle() {
    const appBodyContainer = document.getElementById('spa-container');
    if (this.navAlign) {
      // Align Left
      this.navAlign = false;
      appBodyContainer?.classList.remove('app-body');
      appBodyContainer?.classList.add('app-body-alt');
      this.toggleNavIcon = faToggleOn;
    } else if (!this.navAlign) {
      // Align Top
      this.navAlign = true;
      appBodyContainer?.classList.remove('app-body-alt');
      appBodyContainer?.classList.add('app-body');
      this.toggleNavIcon = faToggleOff;
    }
  }

  /**
   * @description Toggle Language between DE/EN
   * @author Oliver Karger <kmaster@oliver-karger.de>
   * @date 09/06/2021
   * @memberof AppComponent
   */
  langToggle() {
    if (this.langMode) {
      this.langData = config.lang.en;
      this.langMode = false;
    } else {
      this.langData = config.lang.de;
      this.langMode = true;
    }
  }

  /** Start: Single-Page-Application-Navigation */
  currentSelectedItem: string = 'aboutMe';
  /**
   * @description Navbar 'Click'-Event Handler
   * @author Oliver Karger <kmaster@oliver-karger.de>
   * @date 09/06/2021
   * @param {string} element New SPA Page Element
   * @memberof AppComponent
   */
  navClick(element: string) {
    // Hide old Element
    const oldElements = document.getElementsByClassName('spa-element-active');
    for (let itr = 0; itr < oldElements.length; itr++) {
      oldElements[itr].classList.remove('spa-element-active');
    }
    // Display new Elemenet
    const newElement = document.getElementById(element);
    newElement?.classList.add('spa-element-active');
  }
  /** End: Single-Page-Application-Navigation */

  /** Start: Bookings Modal */
  /**
   * @description Toggle Microsoft Bookings Modal between Display/Hide
   * @author Oliver Karger <kmaster@oliver-karger.de>
   * @date 09/06/2021
   * @memberof AppComponent
   */
  toggleBookingsModal = () => {
    const modal = document.getElementById('bookings-modal'); // Modal Element
    const body = document.getElementsByTagName('main')[0]; // Body
    if (this.bookingsModal) {
      // Modal is currently active
      modal?.classList.add('hidden'); // Add 'hidden' CSS Class
      body?.classList.remove('blur'); // Remove Background Blur
      this.bookingsModal = !this.bookingsModal; // Reverse Variable
      document.removeEventListener('keyup', (e) => {}); // Remove Event Listener for ESC (ESC = hide Modal)
    } else {
      modal?.classList.remove('hidden'); // Remove 'hidden' CSS Class to Show Modal
      this.bookingsModal = !this.bookingsModal; // Reverse Variable
      body?.classList.add('blur'); // Add Background Blur
      document.addEventListener('keyup', (e) => {
        // Add Event Listener so User can close Modal using ESC
        if (e.keyCode === 27) {
          // if ESC is pressed
          modal?.classList.add('hidden'); // Add 'hidden' CSS Class
          body?.classList.remove('blur'); // Remove Background Blur
          this.bookingsModal = !this.bookingsModal; // Reverse Variable
        }
      });
    }
  };
  /** End: Bookings Modal */
}
