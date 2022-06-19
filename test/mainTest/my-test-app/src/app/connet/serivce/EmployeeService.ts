  import {Injectable} from '@angular/core';
  import {HttpClient} from '@angular/common/http';
  import {Observable} from 'rxjs';
  import {Employee} from '../model/Employee';

  @Injectable({
    providedIn: 'root'
  })
  export class EmployeeService {

    private readonly API_URL = 'http://localhost:8080/1808/list-ckbu543ldj-hsto-4354mer';
    // tslint:disable-next-line:variable-name
    constructor(private  _httpClient: HttpClient) {
    }

    getEmployee(): Observable<Employee[]> {
      return this._httpClient.get<Employee[]>(this.API_URL);
    }
  }
