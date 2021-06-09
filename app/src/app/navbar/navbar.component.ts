import {
  Component,
  ViewChild,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import {
  faUserCircle,
  faHome,
  faBlog,
  faIdCard,
  faCog,
  faGem,
} from '@fortawesome/free-solid-svg-icons';
import {faGitAlt} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
/**
 * @description Navbar
 * @author Oliver Karger <kmaster@oliver-karger.de>
 * @date 09/06/2021
 * @class NavbarComponent
 * @implements {OnChanges}
 * @implements {OnInit}
 */
export class NavbarComponent implements OnChanges, OnInit {
  /** Start: HTML References */
  @ViewChild('navbar', {read: ElementRef, static: false})
  navigation?: ElementRef;
  /** End: HTML References */

  /** Start: Angular Input */
  @Input() alignTop: boolean = false;
  @Input() langData: any;
  @Input()
  navClick!: (element: string) => void;
  /** End: Angular Input */

  /** Start: Fontawesome Icons */
  navUserCircleSymbol = faUserCircle;
  navProjectSymbol = faGitAlt;
  navHomeIcon = faHome;
  navBlogIcon = faBlog;
  navContactIcon = faIdCard;
  loadingSymbol = faCog;
  navServicesSymbol = faGem;
  /** End: Fontawesome Icons */

  /**
   * @description Angular's OnChanges Implementation
   * @author Oliver Karger <kmaster@oliver-karger.de>
   * @date 09/06/2021
   * @memberof NavbarComponent
   */
  ngOnChanges() {
    if (this.alignTop) {
      this.navigation?.nativeElement.classList.remove('navbar-top');
      this.navigation?.nativeElement.classList.add('navbar-left');
      this.alignTop = true;
    } else {
      this.navigation?.nativeElement.classList.remove('navbar-left');
      this.navigation?.nativeElement.classList.add('navbar-top');
      this.alignTop = false;
    }
  }

  /**
   * @description Angular's OnInit Implementation
   * @author Oliver Karger <kmaster@oliver-karger.de>
   * @date 09/06/2021
   * @memberof NavbarComponent
   */
  ngOnInit() {
    if (this.alignTop) {
      this.navigation?.nativeElement.classList.remove('navbar-top');
      this.navigation?.nativeElement.classList.add('navbar-left');
      this.alignTop = true;
    } else {
      this.navigation?.nativeElement.classList.remove('navbar-left');
      this.navigation?.nativeElement.classList.add('navbar-top');
      this.alignTop = false;
    }
  }
}
