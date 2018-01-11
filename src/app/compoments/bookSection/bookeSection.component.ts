import { Component, Input, SimpleChanges, OnChanges, EventEmitter, Output } from '@angular/core';

// 导入http服务
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-section',
  templateUrl: './bookSection.component.html',
  styleUrls: ['./bookSection.component.less']
})

export class BookSectionComponent implements  OnChanges{

	public books:Array<any>;
	// 男生
	public male:Array<any> = [];
	// 女生
	public female:Array<any> = [];
	// 切换男生女生，中间变量
	public temp;
	// 接收父组件传值
	@Input('flag') flag;
	// 改变加载状态
	@Output() changeLoad: EventEmitter<boolean> = new EventEmitter();
	constructor (private http:Http) {
		this.http.get("/api/recommendPage/nodes/5910018c8094b1e228e5868f")
			.toPromise()
			.then(res=>{
				this.books = res.json().data;
				this.category();
				this.temp = this.female;
			})
	}
	ngOnChanges(changes: SimpleChanges) {
    	this.temp = changes.flag.currentValue?
    		this.male : this.female;
  	}
  	// 给父组件传值
  	getStatus (flag) {
  		// 改变加载状态
		this.changeLoad.emit(false);
  	}

	// 将books分类
	category () {
		this.books.forEach((book, i)=>{
			if ( i === 2 || i === 5 || i === 7 || i === 9 ) {
				this.male.push(book);
			}
			else if ( i === 0 || i === 4 || i === 6 || i === 8 ) {
				this.female.push(book);
			}
		});
	}
}