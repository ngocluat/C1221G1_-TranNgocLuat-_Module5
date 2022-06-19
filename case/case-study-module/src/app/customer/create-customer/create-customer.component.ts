import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../CustomerService";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {CustomerType} from "../CustomerType";
import {CustomerTypeSevice} from "../CustomerTypeSevice";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  public customersType: CustomerType[] = [];
  customerForm:FormGroup = new FormGroup({
    customerType: new FormControl('', [Validators.required]),
    customerCode: new FormControl('', [Validators.required, Validators.minLength(7)]),
    customerName: new FormControl('', [Validators.required]),
    customerBirthDay: new FormControl('',
      [Validators.required, Validators.pattern("^\\d{4}\\-\\d{2}\\-\\d{2}$")]),
    customerGender: new FormControl(),
    customerCMDD: new FormControl('', [Validators.required,
      Validators.maxLength(11), Validators.pattern("^[0-9]{9}$")]),
    customerPhone: new FormControl('', [Validators.required,
      Validators.pattern("^[0-9\\-\\+]{10}$")]),
    customerEmail: new FormControl('', [Validators.required,
      Validators.pattern("^\\S+@\\S+\\.\\S+$")]),
    customerAddress: new FormControl('', [Validators.required]),
    flag: new FormControl()
  });


  get customerCode() {
    return this.
    customerForm.get('customerCode');
  }

  get customerPhone() {
    return this.
    customerForm.get('customerPhone');
  }

  get customerCMDD() {
    return this.
    customerForm.get('customerCMDD');
  }


  constructor(private customerService :CustomerService,
              private router:Router,
              private  customerTypeSevice: CustomerTypeSevice) { }

  ngOnInit(): void {

    this.customersType = this.customerTypeSevice.getAllCustomerType()
  }


  submit() {
    if (this.customerForm.valid){
      const customer = this.customerForm.value;
      console.log(customer)
      this.customerService.saveCustomerAPI(customer).subscribe(() => {
        this.customerForm.reset();
        alert('Tạo thành công');
        // this.router.navigateByUrl('https://www.youtube.com/results?search_query=%C4%91i%E1%BB%81u+cha+ch%C6%B0a+n%C3%B3i')
      }, e => {
        console.log(e);
      });
    }

  }
}
