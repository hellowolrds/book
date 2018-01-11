import { Component, Input, SimpleChanges, OnChanges, OnInit } from '@angular/core';
// 导入路由模块
import { ActivatedRoute } from '@angular/router';

// 导入http服务
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'book-content',
  templateUrl: './bookContent.component.html',
  styleUrls: ['./bookContent.component.less']
})

export class BookContentComponent implements OnChanges, OnInit {
	// 单个章节
	public content={cpContent: ''};
	// 所有图书的章节
	public chapters:Array<any> = [];
	// 渲染章节数据
	public list:Array<any> = [];
	public index = 0;

	constructor (private route: ActivatedRoute, private http:Http) {
		this.route.params.subscribe(params=>{
			this.getContent(params.id);
			// 获取所有图书的章节
			this.http.get("/api/btoc/"+params.bookId+"?view=chapters&channel=mweb" )
				.toPromise()
				.then(chapters=>{									
					this.chapters = chapters.json().chapters;
					// 初始化默认当前章节
					this.chapters.forEach((item, i)=>{
						if ( item.id == params.id ) {
							this.index = i;
						}
					});
				})
		});
	}
	ngOnInit () {

	}
	ngOnChanges (changes: SimpleChanges) {
		
	}

	next() {
		this.index ++;
		var id = this.chapters[this.index].id;
		this.getContent(id);
	}

	// 获取章节内容
	getContent (id) {
		this.http.get("/chapterapi/chapter/"+id+"?cv=1495097622174")
				.toPromise()
				.then(res=>{
					this.content = res.json().chapter;
					this.list.push(this.content);
				});
	}
}