import {TabsComponent} from './../tabs/tabs.component';
import {Component} from '@angular/core';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
/**
 * @description Tab Control für eine SPA (Child von Tabs)
 * @author Oliver Karger <kmaster@oliver-karger.de>
 * @date 06/06/2021
 * @export
 * @class TabComponent
 */
export class TabComponent {
  /**
   * Creates an instance of TabComponent.
   * @author Oliver Karger <kmaster@oliver-karger.de>
   * @date 06/06/2021
   * @param {TabsComponent} tabs Für Angular's -Dependency Injection- benötigt
   * @memberof TabComponent
   */
  constructor(tabs: TabsComponent) {}
}
