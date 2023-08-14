import { CanActivateFn } from '@angular/router';


export const authGuard: CanActivateFn = (route, state) => {
  const isAuthenticated = true; 

  if (isAuthenticated) {
    console.log('Inicio de Sesión Exitoso');
    return true;
  } else {
    console.log('Inicio de Sesión Fallido');
    return false;
  }
};