import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../CustomerService";
import {CustomerType} from "../CustomerType";
import {CustomerTypeSevice} from "../CustomerTypeSevice";

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

  id: number;

  constructor(private  customerService: CustomerService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private customerTypeSevice: CustomerTypeSevice) {
  }

  customerForm: FormGroup;


  public customersType: CustomerType[] = [];


  compareWithId(item1, item2) {
    return item1 && item2 && item1.id == item2.id;
  };

  getCustomer(id: number) {
    return this.customerService.findById(id).subscribe(customer => {
      console.log(customer);
      console.log('augukv');
      this.customerForm = new FormGroup({
        customerType: new FormControl(customer.customerType, [Validators.required]),
        customerCode: new FormControl(customer.customerCode, [Validators.required, Validators.minLength(7)]),
        customerName: new FormControl(customer.customerName, [Validators.required]),
        customerBirthDay: new FormControl(customer.customerBirthDay, [Validators.required]),
        customerGender: new FormControl(customer.customerGender),
        customerCMDD: new FormControl(customer.customerCMDD, [Validators.required, Validators.maxLength(11), Validators.pattern("^[0-9]{9}$")]),
        customerPhone: new FormControl(customer.customerPhone, [Validators.required, Validators.pattern("^[0-9\\-\\+]{9,15}$")]),
        customerEmail: new FormControl(customer.customerEmail, [Validators.required, Validators.pattern("^\\S+@\\S+\\.\\S+$")]),
        customerAddress: new FormControl(customer.customerAddress, [Validators.required]),
        flag: new FormControl(1)
      });
    });
  }

  ngOnInit(): void {
    this.customersType = this.customerTypeSevice.getAllCustomerType();
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      console.log(this.id);
      this.getCustomer(this.id);
    });
  }

  get customerType() {
    return this.customerForm.get('customerType');
  }

  get customerCode() {
    return this.customerForm.get('customerCode');
  }

  get customerName() {
    return this.customerForm.get('customerName');
  }

  get customerBirthDay() {
    return this.customerForm.get('customerBirthDay');
  }

  get customerGender() {
    return this.customerForm.get('customerGender');
  }

  get customerCMDD() {
    return this.customerForm.get('customerCMDD');
  }

  get customerPhone() {
    return this.customerForm.get('customerPhone');
  }

  get customerEmail() {
    return this.customerForm.get('customerEmail');
  }

  get customerAddress() {
    return this.customerForm.get('customerAddress');
  }


  updateCustomer() {
    if (this.customerForm.valid) {
      const customerValue = this.customerForm.value;
      customerValue.id = this.id;
      console.log(customerValue)
      this.customerService.updateCustomer(this.id, customerValue).subscribe(() => {
        this.router.navigate(['/customer/list'])
        this.router.navigate(['/customer/home'])
        alert('Cập nhật thành công');
      }, e => {
        console.log(e);
      });
    }

  }
}
