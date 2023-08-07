import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <div>
      <h2>Login</h2>
      <label for="username">Username:</label>
      <input type="text" [(ngModel)]="username">
      <br>
      <label for="password">Password:</label>
      <input type="password" [(ngModel)]="password">
      <br>
      <button (click)="onLogin()">Login</button>
    </div>
    <p *ngIf="isLoggedIn" class="user-name">Hola, {{ username }}!</p>
  `
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  isLoggedIn: boolean = false;

  onLogin(): void {
    console.log('Inicio de sesión exitoso.');
    this.isLoggedIn = true;
  }
}