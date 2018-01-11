import { Component, Input } from '@angular/core';

// 导入http服务
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.less']
})

export class CategoryComponent {

	public arr;
	public category:Array<any> = [];
	public books:Array<any> = [];
	public gender:Array<any> = [];
	// 定义加载状态
	public load:boolean = true;
	constructor (private http:Http) {
		this.http.get("/api/cats/lv2/statistics")
			.toPromise()
			.then(res=>{
				this.arr = res.json();
				// 停止加载动画
				this.load = false;
				var i = 0;
				for ( var key in this.arr ) {
					switch (key) {
						case "male":
							this.category.push("男生");
							this.books[i] = this.arr.male;
							this.gender.push("male");
							break;
						case "female":
							this.category.push("女生");
							this.books[i] = this.arr.female;
							this.gender.push("female");
							break;
						case "press":
							this.category.push("出版");
							this.books[i] = this.arr.press;
							this.gender.push("press");
							break;
						case "picture":
							this.category.push("大众");
							this.books[i] = this.arr.picture;
							this.gender.push("picture");
							break;
						default:
							// code...
							break;
					}
					i++;
				}
				console.log(this.arr);
			})
	}
}