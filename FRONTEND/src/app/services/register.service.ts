import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = 'http://localhost:4000/api/animadores3D/register';

  constructor( private http : HttpClient) { }

  register(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
