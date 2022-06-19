import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CustomerType} from "./CustomerType";
import {Customer} from "./Customer";

@Injectable({
  providedIn: 'root'
})
export class CustomerTypeSevice {

  private readonly API_URL = 'http://localhost:3000/customerType';

  // tslint:disable-next-line:variable-name
  constructor(private  _httpClient: HttpClient) {
  }

  getCustomerType(): Observable<CustomerType[]> {
    return this._httpClient.get<CustomerType[]>(this.API_URL);
  }

  private customerTypes: CustomerType[] = [
    {
      customerTypeId: 1,
      customerTypeName: 'Diamond'
    },
    {
      customerTypeId: 2,
      customerTypeName: 'Platinum'
    },
    {
      customerTypeId: 3,
      customerTypeName: 'Gold'
    },
    {
      customerTypeId: 4,
      customerTypeName: 'Silver'
    }
  ];

  public getAllCustomerType(): CustomerType[] {
    return this.customerTypes;
  }

}
