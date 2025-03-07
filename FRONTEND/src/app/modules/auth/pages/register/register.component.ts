import { Component } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  animador = {
    nombre: '',
    usuario: '',
    email: '',
    password: '',
    nacionalidad: '',
    portafolio: '',
  }
  
  constructor(
    private readonly fb: FormBuilder,
    private readonly router: Router,
    private readonly registerService: RegisterService,
    private toastr: ToastrService
  ) {
    this.registerForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      usuario: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(7)]],
      nacionalidad: ['', [Validators.required, Validators.minLength(3)]],
      portafolio: ['', [Validators.required, Validators.minLength(6)]],
    });
  }


  onSubmit() {
    if (this.registerForm.invalid) {
      this.toastr.error('Error al registrar', 'Error con tus datos');
      return;
    }
    this.register();
  }

  register() {
    this.registerService.Register(this.animador).subscribe({
      next: (response) => {
        console.log('Registro exitoso:', response);
        this.toastr.success('Registro exitoso', 'Éxito');
      },
      error: (error) => {
        console.error('Error en el registro:', error);
        this.toastr.error('Error en el registro', 'Error');
      }
    });
  }
}
