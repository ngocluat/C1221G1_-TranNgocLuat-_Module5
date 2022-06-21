import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {DiemDi} from '../model/DiemDi';

@Injectable({
  providedIn: 'root'
})
export class DiemDiService {

  private apiBaseUrl8080 = environment.apiBaseUrl8080;

  constructor(private  http: HttpClient) {
  }

  getAll(): Observable<DiemDi[]> {
    return this.http.get<DiemDi[]>(this.apiBaseUrl8080 + '/api/list-start-point');
  }
}
