import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import Tanque from '../models/Tanque';


@Injectable({
  providedIn: 'root'
})
export class TanqueService {

  url = 'http://localhost:3000/api/tanques';

  constructor(
    private http: HttpClient
  ) { }

  getTanques() {
    return this.http.get(this.url);
  }

  getTanque(id): Observable<Tanque> {
    return this.http.get(`${this.url}/${id}`) as Observable<Tanque>;
  }

}
