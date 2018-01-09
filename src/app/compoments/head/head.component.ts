import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.less']
})

export class HeadComponent {
	@Input('titleName') titleName:String;
	@Input('types') types;

	@Output() sex:EventEmitter<boolean> = new EventEmitter(); 
	// 判断显示男生还是女生
	// 默认显示男生
	public flag:boolean = false;
	constructor () {
		this.types = 1 || this.types;
	}

	定义点击事件
	changeTab () {
		this.flag = !this.flag;
		this.sex.emit(this.flag);
	}
}