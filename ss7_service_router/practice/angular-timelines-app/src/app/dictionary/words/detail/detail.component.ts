import {Component, OnInit} from '@angular/core';
import {Words} from "../../model/Words";
import {ActivatedRoute, Router} from "@angular/router";
import {WordsService} from "../../service/words-service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private  activatedRoute: ActivatedRoute,
              private wordsServiceService: WordsService,
              private router: Router) {

  }


  id: number;

  ngOnInit(): void {
    const routeParams = this.activatedRoute.snapshot.paramMap;
    this.id = Number(routeParams.get('id'));
    this.detailWords = this.wordsServiceService.findById(this.id);
    console.log(this.detailWords)
    if (this.detailWords === undefined) {
      this.router.navigate(['/error']);
    }

  }

  detailWords: Words;

}
