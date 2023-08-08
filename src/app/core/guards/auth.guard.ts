import { CanActivateFn } from '@angular/router';
import Swal from 'sweetalert2';

export const authGuard: CanActivateFn = (route, state) => {
  const isAuthenticated = performBasicAuthentication(); 

  if (isAuthenticated) {
    Swal.fire({
      title: 'Inicio de Sesión Exitoso',
      text: '¡Bienvenido!',
      icon: 'success'
    });
    return true;
  } else {
    Swal.fire({
      title: 'Inicio de Sesión Fallido',
      text: 'Credenciales incorrectas.',
      icon: 'error'
    });
    return true;
  }
};

function performBasicAuthentication(): boolean {
  const username = 'usuario';
  const password = 'contraseña';

  const enteredUsername = prompt('Ingrese su nombre de usuario:');
  const enteredPassword = prompt('Ingrese su contraseña:');

  return enteredUsername === username && enteredPassword === password;
}