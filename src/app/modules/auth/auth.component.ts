import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenFondoDirective } from '../../shared/directivas/imagen-fondo.directive';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ImagenFondoDirective, ReactiveFormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  loginForm: FormGroup = new FormBuilder().group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(
    private route: Router
  ){}

  public onSubmit() {
    this.route.navigate(['home']);
  }
}
