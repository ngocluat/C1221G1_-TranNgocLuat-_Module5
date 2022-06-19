import {Component, OnInit} from '@angular/core';
import {Customer} from "../../model/Customer";
import {CustomerService} from "../../service/customer.service";

@Component({
  selector: 'app-home-customer',
  templateUrl: './home-customer.component.html',
  styleUrls: ['./home-customer.component.css']
})
export class HomeCustomerComponent implements OnInit {
  p: string | number = 1;

  constructor(private customerService: CustomerService) {
  }
  customerDelete: Customer = new Customer();
   customers: Customer[] = []


  ngOnInit(): void {

  }

  getAllCusstomer() {
    this.customerService.getAll().subscribe(next => {
      this.customers = next
      console.log(next)
    }, error => {
      console.log(error)
    })
  }

  getCustomer(item: Customer) {
this.customerDelete= item
  }

  confirmDelete() {
     this.customerService.deleteCustomer(this.customerDelete.id).subscribe(()=>{
       this.ngOnInit()
     }, e=>{
       console.log(e)
     })
  }
}
