import {Component, OnInit} from '@angular/core';
import {AbstractControl, AsyncValidatorFn, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {GiaoDichService} from "../../service/giao-dich.service";
import {CustomerService} from "../../service/customer.service";
import {Customer} from "../../model/Customer";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit {

  constructor(private transctionService: GiaoDichService,
              private  customerService: CustomerService) {
  }

  customers: Customer[] = []

  ngOnInit(): void {
    this.getAllCusstomer()
  }


  getAllCusstomer() {
    this.customerService.getAll().subscribe(next => {
      this.customers = next
      console.log(next)
    }, error => {
      console.log(error)
    })
  }

  submitted = false;

  transctionForm: FormGroup = new FormGroup({
    id: new FormControl('',),
    maGiaoDich: new FormControl('', [Validators.required,
      Validators.pattern('^GD-[0-9]{4,9}$')]
      ,[this.checkDuplicateId(this.transctionService)]),
    customer: new FormControl(null, [Validators.required]),
    ngayGiaoDich: new FormControl('', [Validators.required, Validators.pattern('^\\d{4}\\-\\d{2}\\-\\d{2}$')]),
    loaiDichVu: new FormControl('', [Validators.required]),
    donGia: new FormControl('', [Validators.required,
      Validators.min(0)]),
    dienTich: new FormControl('', [Validators.required,
      Validators.min(0)])
  }, [this.validateCustomerNottNull])

  get dienTich() {
    return this.transctionForm.get("dienTich")
  }

  get customer() {
    return this.transctionForm.get("customer")
  }

  validateCustomerNottNull(customer: AbstractControl) {
    let value = customer.value;
    if (value == null) {
      return {'invalidNull0': true}
    }
  }

  submit() {
    this.submitted = true;
    if (this.transctionForm.valid) {
      const value = this.transctionForm.value;
      this.transctionService.saveGiaoDich(value).subscribe(() => {
        this.transctionForm.reset();
        alert('Tạo thành công');
      }, e => {
        console.log(e);
      });
    }

  }


  checkDuplicateId(productService: GiaoDichService): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      return productService
        .checkIdNotTaken(control.value)
        .pipe(
          map((result) => {
              return result ? null : {idAlreadyExists: true};
            }
          )
        );
    };
  };


}
