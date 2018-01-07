import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-section',
  templateUrl: './bookSection.component.html',
  styleUrls: ['./bookSection.component.less']
})

export class BookSectionComponent {
	@Input('titleName') titleName:String;
	@Input('types') types;
	constructor () {
		this.types = 1 || this.types;
	}
}