import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-staterment',
  templateUrl: './staterment.component.html',
  styleUrls: ['./staterment.component.css']
})
export class StatermentComponent implements OnInit {


  newEn = '';
  newVn = '';

  arrobj = [
    {id: 1, en: 'action', vn: 'hanh dong', memorized: true},
    {id: 2, en: 'actor', vn: 'dién vién', memorized: false},
    {id: 3, en: 'activity', vn: 'hogt dong', memorized: true},
    {id: 4, en: 'active', vn: 'chi dong', memorized: true},
    {id: 5, en: 'bath', vn: 'tém', memorized: false},
    {id: 6, en: 'bedroom', vn: 'phong ngu', memorized: true}
  ];

  show = false;
  arr = ['Trần Thị Thật ', 'Trần Hoan ', 'Trần Ngọc Luật'];

  add() {
    this.arrobj.push({
      id: this.arrobj.length + 1,
      en: this.newEn,
      vn: this.newVn,
      memorized: true
    });
    this.newVn = '';
    this.newEn = '';
  }

  constructor() {
  }

  ngOnInit(): void {
  }


  remove(id: number) {
    const index = this.arrobj.findIndex(e => e.id === id);
    this.arrobj.splice(index, 1);
  }
}
