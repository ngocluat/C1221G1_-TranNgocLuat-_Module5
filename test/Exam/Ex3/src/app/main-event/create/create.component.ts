import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {XeService} from '../../service/xe.service';
import {AngularFireStorage} from '@angular/fire/storage';
import {formatDate} from '@angular/common';
import {DiemDiService} from '../../service/diem-di.service';
import {DiemDi} from '../../model/DiemDi';
import {DiemDien} from '../../model/DiemDien';
import {DiemDenService} from '../../service/diem-den.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private  carService: XeService,
              private  startPoint: DiemDiService,
              private  endPoint: DiemDenService,
              @Inject(AngularFireStorage) private storage: AngularFireStorage
  ) {
  }

  private selectedImage: any;
  public diemDi: DiemDi[] = [];
  public diemDen: DiemDien[] = [];
  url: string;


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
  ngOnInit(): void {
    this.getAllStartPoint();
    this.getAllEndPoint();
  }

  createCar() {

    const carValue = this.carForm.value;
    const nameImg = this.getCurrentDateTime() + this.selectedImage.name;
    const fileRef = this.storage.ref(nameImg);
    this.storage.upload(nameImg, this.selectedImage).snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.url = url;
          console.log(this.url);
          this.carService.saveXe(carValue).subscribe(() => {
            this.carForm.reset();
            alert('OK!!! ');
          });
        });
      })
    ).subscribe();
    // const carValue = this.carForm.value;
    // if (this.carForm.valid) {
    //   this.carService.saveXe(carValue).subscribe(() => {
    //     this.carForm.reset();
    //     alert('OK!!! ');
    //   });
    // }
  }

  getCurrentDateTime(): string {
    return formatDate(new Date(), 'dd-MM-yyyyhhmmssa', 'en-US');
  }

  showPreview(event: any) {
    this.selectedImage = event.target.files[0];
  }
}
