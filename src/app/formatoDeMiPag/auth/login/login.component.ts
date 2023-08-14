import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  template: `
  <div class="container">
  <div class="row justify-content-center mt-5">
    <div class="col-md-6">
      <div class="card">
        <div class="card-header">
          <h2 class="text-center">Login</h2>
        </div>
        <div class="card-body">
          <form>
            <div class="form-group">
              <label for="username">Usuario:</label>
              <input type="text" class="form-control" [(ngModel)]="username" name="username">
            </div>
            <div class="form-group">
              <label for="password">Contraseña:</label>
              <input type="password" class="form-control" [(ngModel)]="password" name="password">
            </div>
            <button type="button" class="btn btn-primary btn-block" (click)="onLogin()">Login</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div class="row justify-content-center mt-3" *ngIf="username">
    <div class="col-md-6">
      <p class="text-center">¡Bienvenido, {{ username }}!</p>
    </div>
  </div>
</div>
  `
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onLogin(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response: any) => {
        console.log('Inicio de sesión exitoso.', response);
        Swal.fire({
          title: 'Inicio de Sesión Exitoso',
          text: `¡Bienvenido, ${this.username}!`,
          icon: 'success'
        });
      },
      (error: any) => {
        console.log('Credenciales incorrectas.', error);
        Swal.fire({
          title: 'Inicio de Sesión Fallido',
          text: 'Credenciales incorrectas.',
          icon: 'error'
        });
      }
    );
  }
}