import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth';
import { map, take } from 'rxjs';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // Escuchamos el observable de usuario de Firebase
  return authService.currentUser$.pipe(
    // Tomamos solo la primera emisión oficial de Firebase y cerramos la suscripción
    take(1), 
    // Transformamos la respuesta en un booleano o en una redirección
    map(user => {
      if (user) {
        return true; // Hay sesión activa, adelante.
      } else {
        // No hay sesión, bloqueamos y redirigimos al login de forma segura
        return router.createUrlTree(['/login']); 
      }
    })
  );
};