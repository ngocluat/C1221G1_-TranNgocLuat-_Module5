import {Component, OnInit} from '@angular/core';
import {WordsService} from "../../service/words-service";
import {Words} from "../../model/Words";

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  constructor(private  wordsService: WordsService) {
    this.getAllWords()
  }

  ngOnInit(): void {
  }

  words: Words[] = [];

  getAllWords() {
    this.words = this.wordsService.getAllWords()
  }

}
