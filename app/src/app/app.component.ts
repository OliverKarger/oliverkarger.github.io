import {Component, ViewChild, ElementRef} from '@angular/core';
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
import {ServicesComponent} from './services/services.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('toggleNavButton', {read: ElementRef, static: false})
  toggleNavButton?: ElementRef;

  title = 'Oliver Karger';
  navUserCircleSymbol = faUserCircle;
  navProjectSymbol = faGitAlt;
  navHomeIcon = faHome;
  navBlogIcon = faBlog;
  navContactIcon = faIdCard;
  loadingSymbol = faCog;
  toggleNavIcon = faToggleOff;
  toggleLangIcon = faFlag;
  langData = config.lang.de;
  underConstruction: boolean = true;
  navAlign: boolean = false; // false = left, true = top
  langMode: boolean = false; // false = DE, true = EN

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
}
