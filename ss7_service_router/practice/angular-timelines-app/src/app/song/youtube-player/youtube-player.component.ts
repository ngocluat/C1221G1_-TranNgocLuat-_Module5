import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';
// @ts-ignore
import {SongService} from '../service/song.service';

class SongService {
    findSongById(id: string): any {
        throw new Error('Method not implemented.');
    }
}

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {

  song: any;
  constructor(
    private songService: SongService,
    private activatedRoute: ActivatedRoute,
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.song = this.songService.findSongById(id);
    });
  }

  getSrc() {
    const url = 'https://www.youtube.com/embed/' + this.song.id;
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}


