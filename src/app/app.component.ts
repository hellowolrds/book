import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 1;
  constructor () {

  }

  // tab切换
  tab (id) {
  	this.title = id;
  }
}
