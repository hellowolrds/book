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

	constructor (private http: Http) {
		this.http.get("/books/59128334694d1cda365b8985")
			.toPromise()
			.then(res=>{
				console.log(res.json().data);
			})
	}
}