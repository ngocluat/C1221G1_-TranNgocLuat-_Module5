import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/Customer";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})


export class CustomerService {

  private apiBaseUrl = environment.apiBaseUrl;
  constructor( private  http:HttpClient) { }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiBaseUrl + '/customer');
  }

  search(name: any, phone: any): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiBaseUrl}/customer?customerName_like=${name}&customerPhone_like=${phone}`);
  }

  saveCustomer(customerValue): Observable<Customer> {
    return this.http.post<Customer>(this.apiBaseUrl + '/customer', customerValue);
  }

  findById(customerId: number): Observable<Customer> {
    return this.http.get<Customer>(`${(this.apiBaseUrl)}/customer/${customerId}`);
  }

  updateCustomer(id: number, customerValue: Customer): Observable<Customer> {
    return this.http.patch<Customer>(`${(this.apiBaseUrl)}/customer/${id}`, customerValue);
  }

  deleteCustomer(id: number): Observable<Customer> {
    return this.http.delete<Customer>(`${(this.apiBaseUrl)}/customer/${id}`);
  }

}
