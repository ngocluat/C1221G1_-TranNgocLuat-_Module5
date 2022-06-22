import {Component, OnInit} from '@angular/core';
import {DiemDi} from '../model/DiemDi';
import {DiemDien} from '../model/DiemDien';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {XeService} from '../service/xe.service';
import {DiemDiService} from '../service/diem-di.service';
import {DiemDenService} from '../service/diem-den.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private  carService: XeService,
              private  startPoint: DiemDiService,
              private  endPoint: DiemDenService,
              private  router: Router) {
  }

  public diemDi: DiemDi[] = [];
  public diemDen: DiemDien[] = [];

  carForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    bienSoXe: new FormControl('', [Validators.required]),
    loaiXe: new FormControl('', [Validators.required]),
    tenNhaXe: new FormControl('', [Validators.required]),
    diemDi: new FormControl('', [Validators.required]),
    diemDien: new FormControl('', [Validators.required]),
    soDienThoaiNhaXe: new FormControl('',
      [Validators.pattern('^(090|093|097)\\d{7}$'), Validators.required]),
    email: new FormControl('', [Validators.email]),
    gioKhoiHanh: new FormControl('', [Validators.required])
  });

  ngOnInit(): void {
    this.getAllStartPoint();
    this.getAllEndPoint();
  }

  getAllStartPoint() {
    this.startPoint.getAll().subscribe(value => {
      console.log(value);
      this.diemDi = value;
    }, error => {
      console.log(error);
    });
  }

  getAllEndPoint() {
    this.endPoint.getAll().subscribe(value => {
      console.log(value);
      this.diemDen = value;
    }, error => {
      console.log(error);
    });
  }


  createCar() {
    const carValue = this.carForm.value;
    if (this.carForm.valid) {
      this.carService.saveXe(carValue).subscribe(() => {
        this.carForm.reset();
        // @ts-ignore
        this.router.navigate('/list');
      });
    }
  }
}
