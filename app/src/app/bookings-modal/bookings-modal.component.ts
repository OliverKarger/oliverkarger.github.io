import {Component, Input} from '@angular/core';
import {faWindowClose} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-bookings-modal',
  templateUrl: './bookings-modal.component.html',
  styleUrls: ['./bookings-modal.component.scss'],
})
/**
 * @description Microsoft Bookings Modal
 * @author Oliver Karger <kmaster@oliver-karger.de>
 * @date 09/06/2021
 * @export
 * @class BookingsModalComponent
 */
export class BookingsModalComponent {
  /** Start: Angular Input */
  @Input() toggleModal!: () => void;
  /** End: Angular Input */

  /** Start: Fontawesome Icons */
  closeModalIcon = faWindowClose;
  /** End: Fontawesome Icons */
}
