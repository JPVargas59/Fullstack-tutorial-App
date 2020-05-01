import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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

}
