import {Component, Input, OnInit} from '@angular/core';
import {faCode, faUsersCog, faHandshake} from '@fortawesome/free-solid-svg-icons';
import {faWindows} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  @Input() langData: any;
  constructor() {}

  codeIcon = faCode;
  sysadminIcon = faUsersCog;
  customWindowsImageIcon = faWindows;
  consultIcon = faHandshake;

  ngOnInit(): void {}
}
