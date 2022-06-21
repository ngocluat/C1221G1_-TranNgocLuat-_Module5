import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DiemDien} from '../model/DiemDien';

@Injectable({
  providedIn: 'root'
})
export class DiemDenService {

  private apiBaseUrl8080 = environment.apiBaseUrl8080;

  constructor(private  http: HttpClient) {
  }

  getAll(): Observable<DiemDien[]> {
    return this.http.get<DiemDien[]>(this.apiBaseUrl8080 + '/api/list-end-point');
  }
}
