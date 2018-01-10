import { Component, Input, SimpleChanges, OnChanges, OnInit } from '@angular/core';
// 导入路由模块
import { ActivatedRoute } from '@angular/router';

// 导入http服务
import { Http } from '@angular/http';
import { HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'cat-list',
  templateUrl: './catList.component.html',
  styleUrls: ['./catList.component.less']
})

export class CatListComponent implements OnChanges, OnInit {

	public gender;
	public major;
	public minor;
	public start = 0;

	constructor (private route: ActivatedRoute, private http:Http) {
		this.route.params.subscribe(params=>{
			console.log(params);
			this.getBooks(params.gender, 'hot', params.name, '', this.start, 20);
		});
	}
	ngOnInit () {

	}
	ngOnChanges (changes: SimpleChanges) {
		
	}

	getBooks (gender, type = 'hot', major = '', minor = '', start = 0, limit = 20) {
		var params = new HttpParams().set('gender', gender)
			.set('type', type).set('major', major)
			.set('minor', minor).set('start', start+'')
			.set('limit', limit+'').set('type', type);
		this.http.get("/api/book/by-categories?"+params)
			.toPromise()
			.then(res=>{
				console.log(res.json());
			})
	}
}