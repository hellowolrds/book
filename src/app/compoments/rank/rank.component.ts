import { Component, Input } from '@angular/core';
// 导入http服务
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-rank',
  templateUrl: './rank.component.html',
  styleUrls: ['./rank.component.less']
})

export class RankComponent {

	public rank;
	// 默认显示女生
	public sex:Array<any> = [];
	// 默认显示第一个
	public bookList:Array<any> = [];
	public rankid;
	public staticUrl:String = "http://statics.zhuishushenqi.com";
	constructor (private http:Http) {
		http.get("/api/ranking/gender")
			.toPromise()
			.then(res=>{
				this.rank = res.json();
				this.sex = res.json().female;
				this.rankid = this.sex[0]._id;
				// console.log(this.sex);
				this.getBookList();
			});
	}


	// 切换tab
	changeSex (sex) {
		this.sex = sex?this.rank.male:this.rank.female;
		this.rankid = this.sex[0]._id;
		this.getBookList();
	}

	// 切换榜单
	change (id) {
		this.rankid = id;
		this.getBookList();
	}

	// 公共方法
	getBookList () {
		this.http.get("/api/ranking/"+this.rankid)
					.toPromise()
					.then(response=>{
						this.bookList = response.json().ranking.books;
						// console.log(response.json())
					})
	}
}