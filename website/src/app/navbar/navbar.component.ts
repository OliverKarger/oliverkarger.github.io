import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import {
  faHome,
  faServer,
  faEnvelope,
  faExchangeAlt,
  faCode,
  faArrowCircleRight,
  faUserAstronaut,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent implements OnInit {
  /** Start: Fontawesome Navbar Icons */
  navbarIcons = {
    expand: faArrowCircleRight,
    home: faHome,
    projects: faCode,
    services: faServer,
    contact: faEnvelope,
    resume: faUserAstronaut,
  };
  /** End: Fontawesome Navbar Icons */

  /** Start: Angular Input */
  @Input() onClick!: (element: string) => void;
  /** End: Angular Input */

  constructor() {}

  ngOnInit(): void {}
}
