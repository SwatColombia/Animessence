import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../modules/shared/models/register.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'http://localhost:4000/api/animadores3D/registrar';

  constructor( private http : HttpClient) { }

  Register(registrar : Register): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.apiUrl, registrar, {headers});
  }
  
}
