import {Component, Input} from '@angular/core';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
/**
 * @description Tabs Control für eine SPA
 * @author Oliver Karger <kmaster@oliver-karger.de>
 * @date 06/06/2021
 * @export
 * @class TabsComponent
 */
export class TabsComponent {
  /**
   * Creates an instance of TabsComponent.
   * @author Oliver Karger <kmaster@oliver-karger.de>
   * @date 06/06/2021
   * @memberof TabsComponent
   */
  constructor() {}

  // Aktives Tab
  @Input() activeTab: number = 1;
}
