import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from "./product/product/product-list/product-list.component";
import {ProductCreateComponent} from "./product/product/product-create/product-create.component";
import {YoutubePlaylistComponent} from "./song/youtube-playlist/youtube-playlist.component";
import {YoutubePlayerComponent} from "./song/youtube-player/youtube-player.component";
import {WordsComponent} from "./dictionary/words/words/words.component";
import {DetailComponent} from "./dictionary/words/detail/detail.component";
import {ProductEditComponent} from "./product/product/product-edit/product-edit.component";
import {ProductDeleteComponent} from "./product/product/product-delete/product-delete.component";


// const routes: Routes = [{
//     path: 'youtube',
//     component: YoutubePlaylistComponent,
//
//     children: [
//       {
//         path: ':id',
//         component: YoutubePlayerComponent
//       }
//     ]}
//     ];

const routes: Routes = [
  // phần thực hành
  // {
  //   path: 'product/list',
  //   component: ProductListComponent
  // },
  // {
  //   path: 'product/create',
  //   component: ProductCreateComponent
  // },
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
  }
  , {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  },

  // phần bài tập
  {
    path: 'words',
    component: WordsComponent
  },
  {
    path: 'detail/:id',
    component: DetailComponent
  },

  {
    path: 'product',
    loadChildren: () => import('./product/product/product.module').then(module => module.ProductModule)
  }
, {
    path: 'category',
    loadChildren: () => import('./product/category/category.module').then(module => module.CategoryModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
