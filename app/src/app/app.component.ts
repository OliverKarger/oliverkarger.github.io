import {Component, ViewChild, ElementRef} from '@angular/core';
import {
  faUserCircle,
  faHome,
  faBlog,
  faIdCard,
  faCog,
  faToggleOff,
  faToggleOn,
} from '@fortawesome/free-solid-svg-icons';
import {faGitAlt} from '@fortawesome/free-brands-svg-icons';

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
  @ViewChild('navbar', {read: ElementRef, static: false})
  navigation?: ElementRef;

  title = 'app';
  navUserCircleSymbol = faUserCircle;
  navProjectSymbol = faGitAlt;
  navHomeIcon = faHome;
  navBlogIcon = faBlog;
  navContactIcon = faIdCard;
  loadingSymbol = faCog;
  toggleNavIcon = faToggleOff;
  navState: navMode = 'navbar-left';

  /**
   * @description Toggle navbar between sidenav and nav
   * @author Oliver Karger <kmaster@oliver-karger.de>
   * @date 04/06/2021
   * @memberof AppComponent
   */
  toggleNav() {
    if (this.navState === 'navbar-top') {
      this.navigation?.nativeElement.classList.remove('navbar-top');
      this.navigation?.nativeElement.classList.add('navbar-left');
      this.navState = 'navbar-left';
      this.toggleNavIcon = faToggleOff;
    } else if (this.navState === 'navbar-left') {
      this.navigation?.nativeElement.classList.remove('navbar-left');
      this.navigation?.nativeElement.classList.add('navbar-top');
      this.navState = 'navbar-top';
      this.toggleNavIcon = faToggleOn;
    }
  }
}

type navMode = 'navbar-top' | 'navbar-left';
