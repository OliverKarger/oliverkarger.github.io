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
import {lang} from '../lang';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
/**
 * @description Main App Component Class
 * @author Oliver Karger <kmaster@oliver-karger.de>
 * @date 04/06/2021
 * @export
 * @class AppComponent
 */
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
  langData = lang.de;

  underConstruction: boolean = true;
  navAlign: boolean = false; // false = left, true = top
  langMode: boolean = false; // false = DE, true = EN
  /**
   * @description Toggles Nav Display
   * @author Oliver Karger <kmaster@oliver-karger.de>
   * @date 05/06/2021
   * @memberof AppComponent
   */
  navToggle() {
    if (this.navAlign) {
      this.navAlign = false;
      this.toggleNavIcon = faToggleOn;
    } else if (!this.navAlign) {
      this.navAlign = true;
      this.toggleNavIcon = faToggleOff;
    }
  }
  /**
   * @description Switch Language between EN and DE
   * @author Oliver Karger <kmaster@oliver-karger.de>
   * @date 05/06/2021
   * @memberof AppComponent
   */
  langToggle() {
    if (this.langMode) {
      this.langData = lang.en;
      this.langMode = false;
    } else {
      this.langData = lang.de;
      this.langMode = true;
    }
  }
}
