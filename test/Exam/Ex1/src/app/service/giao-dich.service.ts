import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GiaoDich} from "../model/GiaoDich";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GiaoDichService {


  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private  http: HttpClient) {
  }

  getAll(): Observable<GiaoDich[]> {
    return this.http.get<GiaoDich[]>(this.apiBaseUrl + '/giaoDich');
  }

  search(maGiaoDich: any, donGia: any): Observable<GiaoDich[]> {
    return this.http.get<GiaoDich[]>(`${this.apiBaseUrl}/giaoDich?maGiaoDich_like=${maGiaoDich}&donGia_like=${donGia}`);
  }

  saveGiaoDich(customerValue): Observable<GiaoDich> {
    return this.http.post<GiaoDich>(this.apiBaseUrl + '/giaoDich', customerValue);
  }

  findById(customerId: number): Observable<GiaoDich> {
    return this.http.get<GiaoDich>(`${(this.apiBaseUrl)}/giaoDich/${customerId}`);
  }

  updateGiaoDich(id: number, customerValue: GiaoDich): Observable<GiaoDich> {
    return this.http.patch<GiaoDich>(`${(this.apiBaseUrl)}/customer/${id}`, customerValue);
  }

  checkIdNotTaken(maGiaoDich: string): Observable<boolean> {
    return this.http.get(this.apiBaseUrl + '/giaoDich').pipe(
      map((productList: Array<GiaoDich>) =>
        productList.filter(prd => prd.maGiaoDich == maGiaoDich)
      ),
      map(productList =>
        !productList.length  // length = 1 => false, length = 0 => true
      )
    );
  }

  deleteGiaoDich(id: number): Observable<GiaoDich> {
    return this.http.delete<GiaoDich>(`${(this.apiBaseUrl)}/giaoDich/${id}`);
  }

}
