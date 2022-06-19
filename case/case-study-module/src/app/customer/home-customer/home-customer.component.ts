import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CustomerService} from "../CustomerService";
import {Customer} from "../Customer";
import {CustomerTypeSevice} from "../CustomerTypeSevice";
import {CustomerType} from "../CustomerType";
import {Router} from "@angular/router";


@Component({
  selector: 'app-home-customer',
  templateUrl: './home-customer.component.html',
  styleUrls: ['./home-customer.component.css']
})
export class HomeCustomerComponent implements OnInit {
  customerDelete: Customer = new Customer();

  constructor(private customerService: CustomerService,
              private customerTypeSevice: CustomerTypeSevice,
              private  route: Router) {
  }

    @ViewChild('name') name: ElementRef;
    @ViewChild('phone') phone: ElementRef;

  public customers: Customer[] = [];

  public customersType: CustomerType[] = [];


  getAllCustomer() {
    this.customerService.getCustomerAPI().subscribe(next => {
      this.customers = next
    }, error => {
      console.log(error)
    })
  }

    p: string | number = 1;


  ngOnInit(): void {
    // this.customerService.search("", "")
    //   .subscribe(customers => this.customers = customers,
    //     () => {
    //     },
    //     () => {
    //       if (this.customers.length == 0) {
    //       }
    //     }
    //   )
    this.getAllCustomer()
  }


  getCustomer(item: Customer) {
    this.customerDelete = item;
  }

  confirmDelete() {
    this.customerService.deleteCustomerAPI(this.customerDelete.customerId).subscribe(() => {
      console.log("ID")
      console.log(this.customerDelete.customerId)
      this.ngOnInit()
    }, e => {
      console.log(e);
    });
  }


  searching() {
    console.log(this.name.nativeElement.value)
    console.log(this.phone.nativeElement.value)
    this.customerService.search(this.name.nativeElement.value, this.phone.nativeElement.value)
      .subscribe(customers => {
          this.p = 1;
          this.customers = customers;
        },

        () => {
        },
        () => {
        }
      )
  }
}
