import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';
  innerWidth: number = 0;

  /** Start: Navigation Handling */
  currentActiveNavItem: string = 'aboutMe';
  OnNavClick = (item: string) => {
    // Check if same item is clicked
    if (item === this.currentActiveNavItem) {
      return;
    }
    // get currently displayed SPA Object
    const currentElement = document.getElementsByClassName('spa-active-element')[0];
    // get new SPA Object
    const newElement = document.getElementById(item);
    // remove spa-active-element class from current element
    currentElement.classList.remove('spa-active-element');
    // add spa-active-element class to new element
    newElement?.classList.add('spa-active-element');
    // set new Element in Variable
    this.currentActiveNavItem = item;
  };
  /** End: Navigation Handling */

  /** Start: Responsive Design System */
  @HostListener('window:resize', ['$event'])
  onResize = (event: any) => {
    this.innerWidth = window.innerWidth;
    // Switch to 'Mobile' View
    if (this.innerWidth < 692) {
      // toggle Navbar
      document.getElementsByClassName('navbar-nav')[0].classList.add('hidden');
      document.getElementsByClassName('navbar-toggle')[0].classList.remove('hidden');
    } else if(this.innerWidth > 692) {
      document.getElementsByClassName('navbar-nav')[0].classList.remove('hidden');
      document.getElementsByClassName('navbar-toggle')[0].classList.add('hidden');
    }
  };
  /** End: Responsive Design System */
}
