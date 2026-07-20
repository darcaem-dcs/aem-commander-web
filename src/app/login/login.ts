import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);

  isSignUp = false;
  errorMessage = '';

  toggleMode(state: boolean): void {
    this.isSignUp = state;
    this.errorMessage = ''; // Limpiamos errores al cambiar de pestaña
  }

  onSubmit(event: Event): void {
    event.preventDefault(); // Evitamos el comportamiento por defecto del formulario
    this.errorMessage = '';
    
    // Extraemos los elementos directamente del formulario HTML nativo
    const email = (document.getElementById('email') as HTMLInputElement)?.value || '';
    const pass = (document.getElementById('password') as HTMLInputElement)?.value || '';
    const confirmPass = (document.getElementById('confirm-password') as HTMLInputElement)?.value || '';

    if (this.isSignUp) {
      if (pass !== confirmPass) {
        this.errorMessage = 'Passwords do not match, Commander.';
        return;
      }
      // Registro de nueva cuenta
      this.authService.registerWithEmail(email, pass)
        .then(() => this.router.navigate(['/']))
        .catch(err => this.handleAuthError(err));
    } else {
      // Login tradicional
      this.authService.loginWithEmail(email, pass)
        .then(() => this.router.navigate(['/']))
        .catch(err => this.handleAuthError(err));
    }
  }

  // Se ejecuta al pulsar "Continue with Google"
  onGoogleLogin(): void {
    this.authService.loginWithGoogle()
      .then(() => this.router.navigate(['/']))
      .catch(err => this.handleAuthError(err));
  }

  private handleAuthError(error: any): void {
    console.error('Auth Error:', error);
    // Traducción rápida de códigos de error de Firebase a mensajes legibles
    if (error.code === 'auth/invalid-credential' || error.code === 'auth/user-not-found') {
      this.errorMessage = 'Invalid email or password.';
    } else if (error.code === 'auth/email-already-in-use') {
      this.errorMessage = 'This email is already registered in the tactical database.';
    } else if (error.code === 'auth/weak-password') {
      this.errorMessage = 'Password should be at least 6 characters.';
    } else {
      this.errorMessage = 'Authentication failed. Please check your credentials.';
    }
  }
}