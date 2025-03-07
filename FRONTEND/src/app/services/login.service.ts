import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, BehaviorSubject} from 'rxjs';
import { Router } from '@angular/router';
import { Login } from '../core/models/login.model';


/*import { environment } from 'src/environments/environment';
import { Login } from '../../../core/models/login.model';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/core/shared/services/token.service';*/
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private apiUrl ='http://localhost:4000/api/animadores3D/login';

  public id?: number;
  public token?: string;
  public role?: string;

  private isLoggedIn = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this.isLoggedIn.asObservable();

  constructor(
    private http: HttpClient,
   
    private router: Router,
    /*private tokenService: TokenService,*/
  ) {
    this.updateVariables();
  }
  
  Login(login: Login): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(`${this.apiUrl}`, login, );
  } 
  logout() {
    this.isLoggedIn.next(false);
    // this.tokenService.clearToken();
    this.router.navigate(['/login']);
    //console.log(this.Login);
  }

  updateVariables() {
    if (sessionStorage.getItem('token')) {
      this.isLoggedIn.next(true);
    }
    if (sessionStorage.getItem('id')) {
      this.id = Number(sessionStorage.getItem('id'));
    }
    if (sessionStorage.getItem('role')) {
      this.role = sessionStorage.getItem('role')!;
    }
  }
}
