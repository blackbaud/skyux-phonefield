import {
  Component,
  OnInit
} from '@angular/core';

import {
  FormControl,
  FormGroup
} from '@angular/forms';

@Component({
  selector: 'app-phone-field-docs',
  templateUrl: './phone-field-docs.component.html',
  styleUrls: ['./phone-field-docs.component.scss']
})
export class PhoneFieldDocsComponent implements OnInit {

  public phoneForm: FormGroup;

  public phoneControl: FormControl;

  public ngOnInit() {
    this.phoneControl = new FormControl();
    this.phoneForm = new FormGroup({
      'phoneControl': this.phoneControl
    });
  }

}
