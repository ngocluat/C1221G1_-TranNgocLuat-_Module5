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

  public xe: Xe[] = [];
  public diemDi: DiemDi[] = [];
  public diemDen: DiemDien[] = [];

  xeDelete: Xe = new Xe();


  carForm: FormGroup;

  ngOnInit(): void {
    this.getAllXe();

  }

  public getAllXe() {
    console.log('ụygdigediuhn');
    console.log(this.carForm.value.bienSoXe);
    console.log(this.carForm.value.tenNhaXe);
    this.seService.getAllAPIPage(this.carForm.value.bienSoXe, this.carForm.value.tenNhaXe)
      .subscribe(data => {
          console.log(data);
          // @ts-ignore
          this.xe = data.content;
        }
        , error => {

        }
      );
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
