import { Component, Input, SimpleChanges, OnChanges, OnInit } from '@angular/core';
// 导入路由模块
import { ActivatedRoute } from '@angular/router';

// 导入http服务
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'book-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.less']
})

export class CatalogComponent implements OnChanges, OnInit {

	public book = {};
	public bookItem:Array<any> = [];
	public bookId = '';
	// 返回书本id
	public returnId = '';
	// 定义加载动画
	public load:boolean = true;

	constructor (private route: ActivatedRoute, private http:Http) {
		this.route.params.subscribe(params=>{
			this.returnId = params.id;
			this.http.get("/api/book/"+params.id+"?menu=true")
				.toPromise()
				.then(res=>{
					this.book = res.json();
					console.log(this.book);
					// 获取章节
					this.http.get("/api/btoc?view=summary&&book="+params.id)
						.toPromise()
						.then(data=>{
							console.log(data.json());
							var id = data.json()[0]._id;
							this.bookId = id;
							// 获取章节
							this.http.get("/api/btoc/"+id+"?view=chapters&channel=mweb" )
								.toPromise()
								.then(chapters=>{									
									this.bookItem = chapters.json().chapters;
									// 取消加载动画
									this.load = false;
								})
						})
				});
		});
	}
	ngOnInit () {

	}
	ngOnChanges (changes: SimpleChanges) {
		
	}
}