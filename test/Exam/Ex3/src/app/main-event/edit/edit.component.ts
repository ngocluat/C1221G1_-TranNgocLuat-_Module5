import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {XeService} from '../../service/xe.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DiemDiService} from '../../service/diem-di.service';
import {DiemDenService} from '../../service/diem-den.service';
import {DiemDi} from '../../model/DiemDi';
import {DiemDien} from '../../model/DiemDien';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  carForm: FormGroup;
  id: number;
  public diemDis: DiemDi[] = [];
  public diemDiens: DiemDien[] = [];

  compareWithId(item1, item2) {
    // tslint:disable-next-line:triple-equals
    return item1 && item2 && item1.id == item2.id;
  }

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private xeService: XeService,
              private  diemDiService: DiemDiService,
              private  diemDenService: DiemDenService) {
  }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      console.log(this.id);
      this.getFacility(this.id);
    });
    this.getAllDiemDi();
    this.getAllDiemDen();
  }


  getFacility(id: number) {
    return this.xeService.findById(id).subscribe(facility => {
      console.log(facility);
      console.log('augukv');
      this.carForm = new FormGroup({
        id: new FormControl(facility.id),
        bienSoXe: new FormControl(facility.bienSoXe),
        loaiXe: new FormControl(facility.loaiXe, [Validators.required]),
        tenNhaXe: new FormControl(facility.tenNhaXe, [Validators.required]),
        diemDi: new FormControl(facility.diemDi, [Validators.required]),
        diemDien: new FormControl(facility.diemDien, [Validators.required]),
        soDienThoaiNhaXe: new FormControl(facility.soDienThoaiNhaXe,
          [Validators.pattern('^(090|093|097)\\d{7}$'), Validators.required]),
        email: new FormControl(facility.email, [Validators.email]),
        gioKhoiHanh: new FormControl(facility.gioKhoiHanh, [Validators.required])
      });
    });
  }

  updateFacility() {
    const facilityValue = this.carForm.value;
    console.log(facilityValue);
    this.xeService.updateXe(this.id, facilityValue).subscribe(next => {
    }, e => {
      console.log(e);
    }, () => {
      this.router.navigate(['/list']);
    });
  }

  getAllDiemDen() {
    this.diemDenService.getAll().subscribe(value => {
      this.diemDiens = value;
    }, error => {
      console.log(error);
    });
  }

  getAllDiemDi() {
    this.diemDiService.getAll().subscribe(value1 => {
      this.diemDis = value1;
    }, error => {
      console.log(error);
    });
  }

  get diemDi() {
    return this.carForm.get('diemDi');
  }


}
