import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  constructor() {
  }

  like = 0;

  ngOnInit(): void {
  }

  likeThis() {
    this.like++;
  }

}
