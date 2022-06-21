import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Xe} from '../model/Xe';

@Injectable({
  providedIn: 'root'
})
export class XeService {

  private apiBaseUrl = environment.apiBaseUrl;
  private apiBaseUrl8080 = environment.apiBaseUrl8080;

  constructor(private  http: HttpClient) {
  }


  // spring  list
  getAllAPI(): Observable<Xe[]> {
    return this.http.get<Xe[]>(this.apiBaseUrl8080 + '/api/list-car');
  }

  // spring     // ok
  getAllAPIPage(): Observable<Xe[]> {
    return this.http.get<Xe[]>(this.apiBaseUrl8080 + '/api/page-car');
  }

  // spring    // ok
  deleteXe(id: number): Observable<Xe> {
    // @ts-ignore
    return this.http.patch<Xe>(`${(this.apiBaseUrl8080)}/api/delete-car/${id}`);
  }

  // spring    // ok
  saveXe(XeValue): Observable<Xe> {
    return this.http.post<Xe>(this.apiBaseUrl8080 + '/api/save-car', XeValue);
  }


  findById(XeId: number): Observable<Xe> {
    return this.http.get<Xe>(`${(this.apiBaseUrl8080)}/api/car-id/${XeId}`);
  }


  updateXe(id: number, XeValue: Xe): Observable<Xe> {
    console.log(id);
    return this.http.patch<Xe>(`${(this.apiBaseUrl8080)}/api/update-car`, XeValue);
  }


}
