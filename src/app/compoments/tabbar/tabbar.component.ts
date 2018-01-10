import { Component, Input } from '@angular/core';

@Component({
  selector: 'tab-bar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.less']
})
export class TabbarComponent {

	@Input("title") title;
  
	constructor () {

	 }

}
