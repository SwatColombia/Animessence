import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable, BehaviorSubject, tap } from 'rxjs';
import { Router } from '@angular/router';


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
    private client: HttpClientModule,
    private router: Router,
    /*private tokenService: TokenService,*/
  ) {
    this.updateVariables();
  }
  login(email :string, password: string): Observable<{ success: boolean, message: string, token?: string }> {
    return this.http.post<{success : boolean , message : string , token? :string }>(this.apiUrl, { email, password }).pipe(
      tap((res) => {
        this.isLoggedIn.next(true);
        //this.id = res.id;
        //this.token = res.token;
        //this.role = res.role;
        //sessionStorage.setItem('token', res.token);
        //sessionStorage.setItem('id', res.id.toString());
        //sessionStorage.setItem('role', res.role);
        this.router.navigate(['/inicio']);
      })
    );
  }

  logout() {
    this.isLoggedIn.next(false);
    // this.tokenService.clearToken();
    this.router.navigate(['/auth/login']);
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
