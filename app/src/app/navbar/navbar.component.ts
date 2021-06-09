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
export class NavbarComponent implements OnChanges, OnInit {
  @ViewChild('navbar', {read: ElementRef, static: false})
  navigation?: ElementRef;

  @Input() alignTop: boolean = false;
  @Input() langData: any;

  @Input()
  navClick!: (element: string) => void;

  navUserCircleSymbol = faUserCircle;
  navProjectSymbol = faGitAlt;
  navHomeIcon = faHome;
  navBlogIcon = faBlog;
  navContactIcon = faIdCard;
  loadingSymbol = faCog;
  navServicesSymbol = faGem;

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
