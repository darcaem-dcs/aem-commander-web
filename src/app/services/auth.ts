import { Injectable, inject } from '@angular/core';
import { 
  Auth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signInWithPopup, 
  GoogleAuthProvider, 
  signOut, 
  user 
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Inyectamos el servicio nativo de Firebase Auth usando la sintaxis moderna de Angular
  private auth: Auth = inject(Auth);

  // Observable para escuchar en tiempo real si hay un piloto logueado o no
  readonly currentUser$ = user(this.auth);

  // 1. Iniciar sesión con Email y Contraseña
  loginWithEmail(email: string, pass: string) {
    return signInWithEmailAndPassword(this.auth, email, pass);
  }

  // 2. Crear nueva cuenta SaaS con Email y Contraseña
  registerWithEmail(email: string, pass: string) {
    return createUserWithEmailAndPassword(this.auth, email, pass);
  }

  // 3. Iniciar sesión con una cuenta de Google (Pop-up)
  loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider);
  }

  // 4. Cerrar sesión
  logout() {
    return signOut(this.auth);
  }
}