import { Component, Input, SimpleChanges, OnChanges, EventEmitter, Output } from '@angular/core';

// 导入http服务
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'book-list',
  templateUrl: './bookList.component.html',
  styleUrls: ['./bookList.component.less']
})

export class BookListComponent implements OnChanges {

	@Input("id") id;
	public sectionBooks;
	// 改变加载状态
	@Output() changeLoad: EventEmitter<boolean> = new EventEmitter();
	constructor ( private http : Http, ) {

	}

	ngOnChanges(changes: SimpleChanges) {
		this.http.get("/api/recommendPage/books/"+this.id)
			.toPromise()
			.then((res)=>{
				this.sectionBooks = res.json().data;
				this.changeLoad.emit(false);
			})
	}
}