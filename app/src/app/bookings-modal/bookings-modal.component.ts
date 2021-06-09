import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-bookings-modal',
  templateUrl: './bookings-modal.component.html',
  styleUrls: ['./bookings-modal.component.scss'],
})
export class BookingsModalComponent {
  @Input() toggleModal!: () => void;
}
