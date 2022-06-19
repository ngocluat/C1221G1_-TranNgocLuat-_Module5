import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {CustomerType} from "../customer/CustomerType";
import {CustomerTypeSevice} from "../customer/CustomerTypeSevice";

@Component({
  selector: 'app-customer-type',
  templateUrl: './customer-type.component.html',
  styleUrls: ['./customer-type.component.css']
})
export class CustomerTypeComponent implements OnInit {

  constructor(private _customersType: CustomerTypeSevice) {
  }

  private subscription: Subscription;
  public customersType: CustomerType[] = [];

  getAllCustomerType() {
    this.subscription = this._customersType.getCustomerType().subscribe(data => {
      this.customersType = data;
    }, error => {
      console.log(error);
    });
  }

  ngOnInit(): void {
    this.getAllCustomerType();
  }
}
