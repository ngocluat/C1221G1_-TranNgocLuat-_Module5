import {Injectable} from '@angular/core';
import {Words} from "../model/Words";

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  constructor() {
  }

  private words: Words[] = [
    {
      id: 1,
      vietNam: "Xin Chào",
      english: "Hello",
      detail: "detail"
    }, {
      id: 2,
      vietNam: "Tốt lắm ",
      english: "Good",
      detail: "detail"
    }, {
      id: 3,
      vietNam: "Nước ",
      english: "Water",
      detail: "detail"
    }, {
      id: 4,
      vietNam: "Máy Tính ",
      english: "Laptop",
      detail: "detail"
    }, {
      id: 5,
      vietNam: "Điện Thoại ",
      english: "telephone",
      detail: "detail"
    },

  ]

  getAllWords() {
    return this.words
  }

  findById(id: number) {
    return this.words.find(words=> words.id === id);
  }


}
