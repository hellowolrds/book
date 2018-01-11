import { Component, Input } from '@angular/core';
@Component({
  selector: 'book-bar',
  templateUrl: './bookbar.component.html',
  styleUrls: ['./bookbar.component.less']
})

export class BookBarComponent {

	@Input("id") id;

	constructor () {
		
	}
}