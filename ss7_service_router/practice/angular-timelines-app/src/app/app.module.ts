import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {YoutubePlaylistComponent} from './song/youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from './song/youtube-player/youtube-player.component';
import {ReactiveFormsModule} from "@angular/forms";
import {WordsComponent} from './dictionary/words/words/words.component';
import {DetailComponent} from './dictionary/words/detail/detail.component';
import {ProductDeleteComponent} from './product/product/product-delete/product-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    WordsComponent,
    DetailComponent,

  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
