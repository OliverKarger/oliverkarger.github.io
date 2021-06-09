import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
/**
 * @description Home Page
 * @author Oliver Karger <kmaster@oliver-karger.de>
 * @date 09/06/2021
 * @export
 * @class HomeComponent
 */
export class HomeComponent {
  /** Start: Angular Input */
  @Input() langData: any;
  /** End: Angular Input */
}
