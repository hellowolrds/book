import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
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
// 导入加载动画
import { LoadingComponent } from './compoments/loading/loading.component';
// 导入书板块模块
import { BookSectionComponent } from './compoments/bookSection/bookeSection.component';
// bookList模块
import { BookListComponent } from './compoments/bookList/bookList.component';
// 导入书本详情页面
import { DetailComponent } from './compoments/detail/detail.component';
// 公共tabbar
import { TabbarComponent } from './compoments/tabbar/tabbar.component';
// 导入分类模版
import { CatListComponent } from './compoments/catList/catList.component';
// 定义路由
const appRoutes: Routes = [
  {path: '', redirectTo:'book', pathMatch: 'full'},
  {path: 'book', component: BookComponent},
	{path: 'search', component: FindComponent},
  {path: 'best', component: BestComponent},
   {path: 'category', component: CategoryComponent},
   {path: 'rank', component: RankComponent},
    {path: 'detail/:id', component: DetailComponent},
    {path: 'catlist/:name/:gender', component: CatListComponent}
  
];
@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FindComponent,
    BookComponent,
    BestComponent,
    CategoryComponent,
    RankComponent,
    LoadingComponent,
    BookSectionComponent,
    BookListComponent,
    DetailComponent,
    TabbarComponent,
    CatListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
