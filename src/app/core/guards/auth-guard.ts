import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth, authState } from '@angular/fire/auth';
import { map, take } from 'rxjs/operators';

export const authGuard: CanActivateFn = () => {
  const auth = inject(Auth);
  const router = inject(Router);

  // Observa el estado de autenticación actual de Firebase
  return authState(auth).pipe(
    take(1), // Toma el primer valor emitido y se desuscribe
    map(user => {
      // Si el objeto 'user' existe, el usuario está logueado
      if (user) {
        return true; 
      }
      
      // Si no existe, no está logueado: redirigir a la landing (Home)
      router.navigate(['/']);
      return false;
    })
  );
};