import { Component } from '@angular/core';

import { Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'pe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Payever';
  public readonly breakpoint = Breakpoints;
}
