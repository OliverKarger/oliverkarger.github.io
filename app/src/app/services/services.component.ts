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
export class ServicesComponent {
  @Input() langData: any;

  codeIcon = faCode;
  sysadminIcon = faUsersCog;
  customWindowsImageIcon = faWindows;
  consultIcon = faHandshake;
}
