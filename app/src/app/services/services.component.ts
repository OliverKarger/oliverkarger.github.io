import {Component, Input} from '@angular/core';
import {
  faCode,
  faUsersCog,
  faHandshake,
} from '@fortawesome/free-solid-svg-icons';
import {faWindows} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
/**
 * @description Services Page
 * @author Oliver Karger <kmaster@oliver-karger.de>
 * @date 09/06/2021
 * @export
 * @class ServicesComponent
 */
export class ServicesComponent {
  @Input() langData: any;
  @Input() toggleBookingsModal!: () => void;

  /** Start: Fontawesome Icons */
  codeIcon = faCode;
  sysadminIcon = faUsersCog;
  customWindowsImageIcon = faWindows;
  consultIcon = faHandshake;
  /** End: Fontawesome Icons */
}
