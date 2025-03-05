import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator } from 'src/app/core/utils/validator';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent {
  email: string = '';
  password: string = '';


  loginForm: FormGroup;
  showPassword: boolean = false;
  error: string = 'Error en la aplicacion';

  constructor(
    private readonly loginService: LoginService,
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, emailValidator]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }
  /* get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  } */

   login() {
    this.loginService.login(this.email, this.password).subscribe(response =>{
      if(response.success){
        console.log('usuario logeado');
        //localStorage.setItem('token', response.token);
        this.router.navigate(['/inicio']);
      }
      else {
        this.error = response.message;
      }
    })
}
}