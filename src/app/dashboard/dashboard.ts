import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {
  private authService = inject(AuthService);
  private router = inject(Router);

  logout(): void {
    this.authService.logout()
      .then(() => {
        // Redirigimos al login tras limpiar con éxito la sesión en Firebase
        this.router.navigate(['/login']);
      })
      .catch(error => {
        console.error('Error al cerrar sesión:', error);
      });
  }
}