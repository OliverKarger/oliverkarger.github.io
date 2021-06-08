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
 * @description Navbar Component
 * @author Oliver Karger <kmaster@oliver-karger.de>
 * @date 05/06/2021
 * @export
 * @class NavbarComponent
 * @implements {OnChanges}
 * @implements {OnInit}
 */
export class NavbarComponent implements OnChanges, OnInit {
  @ViewChild('navbar', {read: ElementRef, static: false})
  navigation?: ElementRef;

  @Input() alignTop: boolean = false;
  @Input() langData: any;

  navUserCircleSymbol = faUserCircle;
  navProjectSymbol = faGitAlt;
  navHomeIcon = faHome;
  navBlogIcon = faBlog;
  navContactIcon = faIdCard;
  loadingSymbol = faCog;
  navServicesSymbol = faGem;

  /**
   * Creates an instance of NavbarComponent.
   * @author Oliver Karger <kmaster@oliver-karger.de>
   * @date 05/06/2021
   * @memberof NavbarComponent
   */
  constructor() {}
  /**
   * @description Gets toggled on Component Change
   * @author Oliver Karger <kmaster@oliver-karger.de>
   * @date 05/06/2021
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
