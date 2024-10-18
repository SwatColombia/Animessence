import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator } from 'src/app/core/utils/validator';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export default class LoginComponent {
  loginForm: FormGroup;
  showPassword: boolean = false;
  error: string = 'Error en la aplicacion';

  constructor(
    /* private readonly loginService: LoginService, */
    private readonly fb: FormBuilder,
    private readonly router: Router,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, emailValidator]],
      password: ['', [Validators.required, Validators.minLength(7)]],
    });
  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }

  /* login() {
    //temporalmente para q el formulario fue tocado
    if (this.loginForm.invalid) {
      return this.loginForm.markAllAsTouched();
    }
    this.loginService.Login(this.loginForm.value).subscribe();
  } */
}
