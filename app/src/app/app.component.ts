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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('toggleNavButton', {read: ElementRef, static: false})
  toggleNavButton?: ElementRef;

  /** Start: SPA Childs */
  @ViewChild('home', {read: ElementRef, static: false})
  pHome?: ElementRef;
  @ViewChild('aboutMe', {read: ElementRef, static: false})
  pAboutMe?: ElementRef;
  @ViewChild('projects', {read: ElementRef, static: false})
  pProjects?: ElementRef;
  @ViewChild('services', {read: ElementRef, static: false})
  pServices?: ElementRef;
  @ViewChild('blog', {read: ElementRef, static: false})
  pBlog?: ElementRef;
  @ViewChild('contact', {read: ElementRef, static: false})
  pContact?: ElementRef;
  /** End: SPA Childs */

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
  currentSelectedItem: SelectableNavItem = 'aboutMe';
  navClick(element: SelectableNavItem) {
    // Hide current SPA Page
    switch (element) {
      case 'home':
        this.pHome?.nativeElement.classList.remove('spa-element-active');
        break;
      case 'aboutMe':
        this.pAboutMe?.nativeElement.classList.remove('spa-element-active');
        break;
      case 'projects':
        this.pProjects?.nativeElement.classList.remove('spa-element-active');
        break;
      case 'services':
        this.pServices?.nativeElement.classList.remove('spa-element-active');
        break;
      case 'blog':
        this.pBlog?.nativeElement.classList.remove('spa-element-active');
        break;
      case 'contact':
        this.pContact?.nativeElement.classList.remove('spa-element-active');
        break;
    }
    // Show new SPA Page
    switch (element) {
      case 'home':
        this.pHome?.nativeElement.classList.add('spa-element-active');
        break;
      case 'aboutMe':
        this.pAboutMe?.nativeElement.classList.add('spa-element-active');
        break;
      case 'projects':
        this.pProjects?.nativeElement.classList.add('spa-element-active');
        break;
      case 'services':
        this.pServices?.nativeElement.classList.add('spa-element-active');
        break;
      case 'blog':
        this.pBlog?.nativeElement.classList.add('spa-element-active');
        break;
      case 'contact':
        this.pContact?.nativeElement.classList.add('spa-element-active');
        break;
    }
  }
  /** End: Single-Page-Application-Navigation */
}

type SelectableNavItem =
  | 'home'
  | 'aboutMe'
  | 'projects'
  | 'services'
  | 'blog'
  | 'contact';
