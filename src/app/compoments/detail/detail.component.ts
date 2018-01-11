import { Component, Input, SimpleChanges, OnChanges, OnInit } from '@angular/core';
// 导入路由模块
import { ActivatedRoute } from '@angular/router';

// 导入http服务
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'book-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})

export class DetailComponent implements OnChanges, OnInit {
	// 定义加载动画
	public load:boolean = true;
	// 书籍详情
	public book={};
	// 评论详情
	public arr = [];
	// 相关书籍推荐
	public contact = [];
	// 图片默认根路径
	public staticUrl = "http://statics.zhuishushenqi.com";
	constructor (private route: ActivatedRoute, private http:Http) {
		this.route.params.subscribe(params=>{
			this.http.get("/api/book/"+params.id)
				.toPromise()
				.then(res=>{
					this.book = res.json();
				});
			// 获取书评
			this.http.get("/api/post/review/best-by-book?book="+params.id+"&limit=5")
				.toPromise()
				.then(res=> {
					this.arr = res.json().reviews;
				});
			// 同类推荐
			this.http.get("/api/book/"+ params.id + "/recommend" )
				.toPromise()
				.then(res=>{
					this.contact = res.json().books.splice(0, 4);
					this.load = false;
				})
		});
	}
	ngOnInit () {

	}
	ngOnChanges (changes: SimpleChanges) {
		
	}
}