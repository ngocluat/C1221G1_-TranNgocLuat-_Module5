import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-caculator-basic',
  templateUrl: './caculator-basic.component.html',
  styleUrls: ['./caculator-basic.component.css']
})
export class CaculatorBasicComponent implements OnInit {
  number1: string;
  number2: string;
  results: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  getValue(phepTinh: string) {
    this.results = eval(this.number1 + phepTinh + this.number2);
  }
}
