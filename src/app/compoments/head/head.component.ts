import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.less']
})

export class HeadComponent {
	@Input('titleName') titleName:String;
	@Input('types') types;
	constructor () {
		this.types = 1 || this.types;
	}
}