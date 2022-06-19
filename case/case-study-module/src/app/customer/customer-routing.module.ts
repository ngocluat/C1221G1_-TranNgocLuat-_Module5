import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CreateCustomerComponent} from "./create-customer/create-customer.component";
import {HomeCustomerComponent} from "./home-customer/home-customer.component";
import {EditCustomerComponent} from "./edit-customer/edit-customer.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeCustomerComponent},
  {path: 'create', component: CreateCustomerComponent},
  {path: 'edit/:id', component: EditCustomerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
