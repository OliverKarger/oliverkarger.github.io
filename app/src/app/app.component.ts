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
export class AppComponent {
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
  /** End: Data */

  navToggle() {
    if (this.navAlign) {
      this.navAlign = false;
      this.toggleNavIcon = faToggleOn;
    } else if (!this.navAlign) {
      this.navAlign = true;
      this.toggleNavIcon = faToggleOff;
    }
  }

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
}
