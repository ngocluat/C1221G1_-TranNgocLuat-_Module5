import {Component, OnInit} from '@angular/core';
import {Xe} from '../../model/Xe';
import {XeService} from '../../service/xe.service';
import {DiemDiService} from '../../service/diem-di.service';
import {DiemDi} from '../../model/DiemDi';
import {DiemDien} from '../../model/DiemDien';
import {DiemDenService} from '../../service/diem-den.service';

import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {
  p: string | number = 1;
  totalElements: number = 0;

  public xe: Xe[] = [];
  public diemDi: DiemDi[] = [];
  public diemDen: DiemDien[] = [];

  xeDelete: Xe = new Xe();

  constructor(private  seService: XeService,
              private  diemDiService: DiemDiService,
              private  diemDenService: DiemDenService) {
  }

  ngOnInit(): void {
    this.getAllXe({page: '0', size: '5'});

  }

  //
  // getAllXe() {
  //   this.seService.getAllAPIPage().subscribe(value => {
  //     console.log(value);
  //     // @ts-ignore
  //     this.xe = value.content;
  //     // @ts-ignore
  //     this.totalElements = data['totalElements'];
  //   }, error => {
  //     console.log(error);
  //   });
  // }

  private getAllXe(request) {
    this.seService.getAllAPIPage()
      .subscribe(data => {
          console.log(data);
          // @ts-ignore
          this.xe = data.content;
          // @ts-ignore
          this.totalElements = data['totalElements'];
        }
        , error => {
          console.log(error.error.message);
        }
      );
  }

  nextPage(event: PageEvent) {
    const request = {};
    request['page'] = event.pageIndex.toString();
    request['size'] = event.pageSize.toString();
    this.getAllXe(request);
  }


  getXe(item: Xe) {
    this.xeDelete = item;
  }

  confirmDelete() {
    this.seService.deleteXe(this.xeDelete.id).subscribe(() => {
      this.ngOnInit();
    }, e => {
      console.log(e);
    });

  }
}
