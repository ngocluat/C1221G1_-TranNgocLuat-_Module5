import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from "./Customer";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiBaseUrl = environment.apiBaseUrl;
  private apiBaseUrl8080 = environment.apiBaseUrl8080;


  constructor(private  http: HttpClient) {
  }

  // spring
  getCustomerAPI(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiBaseUrl8080}/rest/list-customer`);
  }


  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.apiBaseUrl + '/customer');
  }

  search(name: any, phone: any): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiBaseUrl}/customer?customerName_like=${name}&customerPhone_like=${phone}`);
  }

  saveCustomer(customerValue): Observable<Customer> {
    return this.http.post<Customer>(this.apiBaseUrl + '/customer', customerValue);
  }

// spring
  saveCustomerAPI(customerValue): Observable<Customer> {
    return this.http.post<Customer>(this.apiBaseUrl8080 + '/rest/save-customer', customerValue);
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

  // spring
  deleteCustomerAPI(customerID: number): Observable<Customer> {
    return this.http.delete<Customer>(`${(this.apiBaseUrl8080)}/rest/deleteCustomer/${customerID}`);
  }


  // private customers: Customer[] = [
  //   {
  //     id: 1,
  //     customerCode: 'KH-0001',
  //     customerName: 'Nguyễn Thị Hào',
  //     customerBirthDay: '1970-11-07',
  //     customerGender: "1",
  //     customerCMDD: '643431213',
  //     customerPhone: '0905423362',
  //     customerEmail: 'thihao07@gmail.com',
  //     customerAddress: '23 Nguyễn Hoàng, Đà Nẵng',
  //     customerType: {
  //       id: 5,
  //       name: 'Member'
  //     },
  //     flag: 1
  //   },
  //   {
  //     id: 2,
  //     customerCode: 'KH-0002',
  //     customerName: 'Phạm Xuân Diệu',
  //     customerBirthDay: '1992-08-08',
  //     customerGender: "1",
  //     customerCMDD: '865342123',
  //     customerPhone: '0954333333',
  //     customerEmail: 'xuandieu92@gmail.com',
  //     customerAddress: 'K77/22 Thái Phiên, Quảng Trị',
  //     customerType: {
  //       id: 4,
  //       name: 'Silver'
  //     },
  //     flag: 1
  //   }
  // ]
  // getAllCustomerList(){
  //   return this.customers
  // }
  //    {
  //      customerId: 3,
  //      customerCode: 'KH-0003',
  //      customerName: 'Trương Đình Nghệ',
  //      customerBirthDay: '1990-02-27',
  //      customerGender: 1,
  //      customerCMDD: '488645199',
  //      customerPhone: '0373213122',
  //      customerEmail: 'nghenhan2702@gmail.com',
  //      customerAddress: 'K323/12 Ông Ích Khiêm, Vinh',
  //      customerType: {
  //        id: 3,
  //        name: 'Gold'
  //      },
  //      flag: 1
  //    },
  //    {
  //      customerId: 4,
  //      customerCode: 'KH-0004',
  //      customerName: 'Dương Văn Quan',
  //      customerBirthDay: '1981-07-08',
  //      customerGender: 1,
  //      customerCMDD: '543432111',
  //      customerPhone: '0490039241',
  //      customerEmail: 'duongquan@gmail.com',
  //      customerAddress: 'K453/12 Lê Lợi, Đà Nẵng',
  //      customerType: {
  //        id: 1,
  //        name: 'Diamond'
  //      },
  //      flag: 1
  //    },
  //    {
  //      customerId: 5,
  //      customerCode: 'KH-0005',
  //      customerName: 'Hoàng Trần Nhi Nhi',
  //      customerBirthDay: '1995-12-09',
  //      customerGender: 0,
  //      customerCMDD: '795453345',
  //      customerPhone: '0312345678',
  //      customerEmail: 'nhinhi123@gmail.com',
  //      customerAddress: '224 Lý Thái Tổ, Gia Lai',
  //      customerType: {
  //        id: 1,
  //        name: 'Diamond'
  //      },
  //      flag: 1
  //    },
  //    {
  //      customerId: 6,
  //      customerCode: 'KH-0006',
  //      customerName: 'Tôn Nữ Mộc Châu',
  //      customerBirthDay: '2005-12-06',
  //      customerGender: 0,
  //      customerCMDD: '732434215',
  //      customerPhone: '0988888844',
  //      customerEmail: 'thihao07@gmail.com',
  //      customerAddress: '23 Nguyễn Hoàng, Đà Nẵng',
  //      customerType: {
  //        id: 5,
  //        name: 'Member'
  //      },
  //      flag: 1
  //    },
  //    {
  //      customerId: 7,
  //      customerCode: 'KH-0007',
  //      customerName: 'Nguyễn Mỹ Kim',
  //      customerBirthDay: '1984-04-08',
  //      customerGender: 0,
  //      customerCMDD: '856453123',
  //      customerPhone: '0912345698',
  //      customerEmail: 'thihao07@gmail.com',
  //      customerAddress: '23 Nguyễn Hoàng, Đà Nẵng',
  //      customerType: {
  //        id: 4,
  //        name: 'Silver'
  //      },
  //      flag: 1
  //    },
  //    {
  //      customerId: 8,
  //      customerCode: 'KH-0008',
  //      customerName: 'Nguyễn Thị Hào',
  //      customerBirthDay: '1999-04-08',
  //      customerGender: 0,
  //      customerCMDD: '965656433',
  //      customerPhone: '0763212345',
  //      customerEmail: 'thihao07@gmail.com',
  //      customerAddress: '23 Nguyễn Hoàng, Đà Nẵng',
  //      customerType: {
  //        id: 3,
  //        name: 'Gold'
  //      },
  //      flag: 1
  //    },
  //    {
  //      customerId: 9,
  //      customerCode: 'KH-0009',
  //      customerName: 'Trần Đại Danh',
  //      customerBirthDay: '1994-07-01',
  //      customerGender: 1,
  //      customerCMDD: '432341235',
  //      customerPhone: '0643343433',
  //      customerEmail: 'thihao07@gmail.com',
  //      customerAddress: '23 Nguyễn Hoàng, Đà Nẵng',
  //      customerType: {
  //        id: 2,
  //        name: 'Platinium'
  //      },
  //      flag: 1
  //    },
  //    {
  //      customerId: 10,
  //      customerCode: 'KH-0010',
  //      customerName: 'Nguyễn Tâm Đắc',
  //      customerBirthDay: '1989-07-01',
  //      customerGender: 1,
  //      customerCMDD: '344343432',
  //      customerPhone: '0987654321',
  //      customerEmail: 'thihao07@gmail.com',
  //      customerAddress: '23 Nguyễn Hoàng, Đà Nẵng',
  //      customerType: {
  //        id: 1,
  //        name: 'Diamond'
  //      },
  //      flag: 1
  //    }
  //  ];
  // //
  //  public getAllCustomer() {
  //    return this.customers;
  //  }
  //
  //    saveCustomer(customer : Customer) {
  //   customer.customerId= this.customers.length+1 ;
  //   customer.flag=1 ;
  //   this.customers.push(customer);
  // }
  //
  //    public findById(id: number): Customer {
  //   return this.customers.find(customers=> customers.customerId === id);
  // }
  //
  //    updateCustomer(id: number, customer: Customer) {
  //     for (let i = 0; i < this.customers.length; i++) {
  //       if (this.customers[i].customerId === id) {
  //         this.customers[i] = customer;
  //         console.log((this.customers)[i])
  //       }
  //     }
  // }
  //
  //    deleteCustomer(customerDelete: Customer) {
  //   this.customers = this.customers.filter(item=>{
  //     return item.customerId != customerDelete.customerId
  //   })
  // }

}
