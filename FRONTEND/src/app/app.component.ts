import { Component } from '@angular/core';
import { Tooltip, initTWE } from 'tw-elements';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
ngOnInit() {
    initTWE({ Tooltip });
  }

  title = 'AnimEssence';
}


