import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'website';

  navClick = (element: string) => {
    this.itemChangeHandler(element);
  };

  /** Start: All things SPA related */
  itemChangeHandler = (element: string) => {
    // current container
    const cc = document.getElementsByClassName('spa-active')[0];
    // new item
    const nc = document.getElementById(element);
    // remove class from old container
    cc.classList.remove('spa-active');
    // add class to new container
    nc!.classList.add('spa-active');
  };
  /** End: All things SPA related */
}
