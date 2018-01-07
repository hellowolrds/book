import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// 配置路由
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
// 导入头部
import { HeadComponent } from './compoments/head/head.component';
// 导入搜索页面
import { FindComponent} from './compoments/find/find.component';
// 默认显示book页面
import { BookComponent} from './compoments/book/book.component';
// 精选页面
import { BestComponent } from './compoments/best/best.component';
// 导入分类
import { CategoryComponent } from './compoments/category/category.component';
// 导入排行
import { RankComponent } from './compoments/rank/rank.component';
// 定义路由
const appRoutes: Routes = [
  {path: '', redirectTo:'book', pathMatch: 'full'},
  {path: 'book', component: BookComponent},
	{path: 'search', component: FindComponent},
  {path: 'best', component: BestComponent},
   {path: 'category', component: CategoryComponent},
   {path: 'rank', component: RankComponent},
  
  
];
@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FindComponent,
    BookComponent,
    BestComponent,
    CategoryComponent,
    RankComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
