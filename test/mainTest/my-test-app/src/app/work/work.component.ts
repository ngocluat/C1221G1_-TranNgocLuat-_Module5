import {Component} from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']

})
export class WorkComponent {
  iamfamily = 'chưng tôi là 1 gia đình';

  // tslint:disable-next-line:max-line-length
  img = 'data:image/jpeg;base64,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';
  name = '';
  formNgMo = '';

  fogot = false;

  showEvent(event) {
    this.name = event.target.value;
  }

  evenL() {
    this.fogot = !this.fogot;
  }


}
