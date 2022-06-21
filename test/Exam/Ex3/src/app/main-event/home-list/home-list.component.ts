import {Component, OnInit} from '@angular/core';
import {Xe} from '../../model/Xe';
import {XeService} from '../../service/xe.service';
import {DiemDiService} from '../../service/diem-di.service';
import {DiemDi} from '../../model/DiemDi';
import {DiemDien} from '../../model/DiemDien';
import {DiemDenService} from '../../service/diem-den.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {
  p: string | number = 1;

  public xe: Xe[] = [];
  public diemDi: DiemDi[] = [];
  public diemDen: DiemDien[] = [];

  xeDelete: Xe = new Xe();

  constructor(private  seService: XeService,
              private  diemDiService: DiemDiService,
              private  diemDenService: DiemDenService) {
  }

  ngOnInit(): void {
    this.getAllXe();

  }


  getAllXe() {
    this.seService.getAllAPIPage().subscribe(value => {
      console.log(value);
      // @ts-ignore
      this.xe = value.content;
    }, error => {
      console.log(error);
    });
  }


  getXe(item: Xe) {
    this.xeDelete = item;
  }

  confirmDelete() {
    this.seService.deleteXe(this.xeDelete.id).subscribe(() => {
      alert(' you deleted 1 Service');
      this.ngOnInit();
    }, e => {
      console.log(e);
    });

  }
}
