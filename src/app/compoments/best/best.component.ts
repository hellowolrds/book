import { Component, Input } from '@angular/core';
// 导入http服务
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-best',
  templateUrl: './best.component.html',
  styleUrls: ['./best.component.less']
})

export class BestComponent {
	// 性别切换
	public flag:boolean = false;
	constructor (private http: Http) {
		// this.http.get("/api/recommendPage/nodes/5910018c8094b1e228e5868f")
		// 	.toPromise()
		// 	.then(res=>{
		// 		// 第一步隐藏加载动画
		// 		this.flag = true;
		// 		this.books = res.json().data;
		// 		console.log(this.books);
		// 	})
	}

	changeSex (flag) {
		this.flag = flag;
	}
}