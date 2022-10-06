import {Component, OnInit} from '@angular/core';
import {Xe} from '../../model/Xe';
import {XeService} from '../../service/xe.service';
import {DiemDiService} from '../../service/diem-di.service';
import {DiemDi} from '../../model/DiemDi';
import {DiemDien} from '../../model/DiemDien';
import {DiemDenService} from '../../service/diem-den.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  constructor(private  seService: XeService,
              private  diemDiService: DiemDiService,
              private  diemDenService: DiemDenService) {
    this.carForm = new FormGroup({
      tenNhaXe: new FormControl(''),
      bienSoXe: new FormControl('')
    });
  }

  p: string | number = 1;


  totalPages: number;
  currentPage: number;
  ownerSearch = '';
  public xe: Xe[] = [];
  public diemDi: DiemDi[] = [];
  public diemDen: DiemDien[] = [];

  xeDelete: Xe = new Xe();


  carForm: FormGroup;

  public currentCompany;

  ngOnInit(): void {
    // this.getAllXe();
    this.getBuses({page: 0, size: 5});
  }

  // public getAllXe() {
  //   this.seService.getAllAPIPage(this.carForm.value.bienSoXe, this.carForm.value.tenNhaXe)
  //     .subscribe(data => {
  //         console.log(data);
  //         // @ts-ignore
  //         this.xe = data.content;
  //       }
  //       , error => {
  //
  //       }
  //     );
  // }


  getXe(item: Xe) {

    this.xeDelete = item;
  }

  confirmDelete() {
    if (this.xeDelete.id > 0) {
      this.seService.deleteXe(this.xeDelete.id).subscribe(() => {
        this.ngOnInit();
      }, e => {
        console.log(e);
      });
    }
  }

  public selectCompany(event: any, item: any) {
    this.currentCompany = item.bienSoXe;
  }

  private getBuses(request) {
    this.seService.getAll(request)
      .subscribe(data => {
          console.log(data);
          this.xe = data.content;
          this.currentPage = data.number;
          this.totalPages = data.totalPages;
        }
        , error => {
          console.log(error.error.message);
        }
      );
  }


  previousPage() {
    const request = {};
    if ((this.currentPage) > 0) {
      // @ts-ignore
      request.page = this.currentPage - 1;
      // @ts-ignore
      request.size = 5;
      // @ts-ignore
      request.owner = this.ownerSearch;
      this.getBuses(request);
    }
  }

  nextPage() {
    const request = {};
    if ((this.currentPage + 1) < this.totalPages) {
      // @ts-ignore
      request.page = this.currentPage + 1;
      // @ts-ignore
      request.size = 5;
      // @ts-ignore
      request.owner = this.ownerSearch;
      this.getBuses(request);
    }
  }

  handleClickEvent() {
    alert('trần  luật');
  }


  search() {

  }
}
