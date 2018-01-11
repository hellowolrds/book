import { Component, Input, SimpleChanges, OnChanges, OnInit } from '@angular/core';
// 导入路由模块
import { ActivatedRoute } from '@angular/router';

// 导入http服务
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'book-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.less']
})

export class MoreComponent implements OnChanges, OnInit {

	// 定义加载动画
	public load:boolean = true;
	// 书本数组
	public bookList:Array<any> = [];
	public name =""

	constructor (private route: ActivatedRoute, private http:Http) {
		this.route.params.subscribe(params=>{
			this.name = params.name;
			this.getBookList(params.id, 1, 10);
		});
	}
	ngOnInit () {

	}
	ngOnChanges (changes: SimpleChanges) {
		
	}

	// 获取数据
	getBookList (id, st = 1, size = 10) {
		this.http.get("/api/recommendPage/node/books/all/"+
			id+"?ajax=ajax&size=10&st="+st)
			.toPromise()
			.then(res=>{
				this.bookList = res.json().data;
				this.load = false;
			});
	}
}