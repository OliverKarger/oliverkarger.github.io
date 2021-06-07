import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
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
import {GoogleAnalyticsService} from '../services/google-analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
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

  private appendGaTrackingCode() {
    try {
      const script = document.createElement('script');
      script.innerHTML =
        `
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
       
        ga('create', '` +
        config.GoogleAnalytics.key +
        `', 'auto');
      `;
      document.head.appendChild(script);
    } catch (ex) {
      console.error('Error appending google analytics');
      console.error(ex);
    }
  }

  constructor(private googleAnalyticsService: GoogleAnalyticsService) {
    this.appendGaTrackingCode();
  }

  ngOnInit() {}
}
