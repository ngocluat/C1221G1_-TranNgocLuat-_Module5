import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-font-size',
  templateUrl: './font-size.component.html',
  styleUrls: ['./font-size.component.css']
})
export class FontSizeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  fontSize = 14;

  changeFontSizeValue(fontSize) {
    this.fontSize = fontSize;
  }
}
