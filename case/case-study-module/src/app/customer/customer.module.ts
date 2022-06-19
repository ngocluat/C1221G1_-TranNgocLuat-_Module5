import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CustomerRoutingModule} from "./customer-routing.module";
import {HomeCustomerComponent} from "./home-customer/home-customer.component";
import {EditCustomerComponent} from "./edit-customer/edit-customer.component";
import {CreateCustomerComponent} from "./create-customer/create-customer.component";
import {NgxPaginationModule} from "ngx-pagination";


@NgModule({
  declarations: [
    HomeCustomerComponent,
    EditCustomerComponent,
    CreateCustomerComponent
  ],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgxPaginationModule
    ]
})
export class CustomerModule {
}
