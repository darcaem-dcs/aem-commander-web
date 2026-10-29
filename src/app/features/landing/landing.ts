// src/app/features/landing/landing.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../core/services/theme';
import { AuthService } from '../../core/services/auth';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './landing.html',
  styleUrls: ['./landing.scss']
})
export class Landing {
  showAuthModal = false;
  isRegisterMode = false;
  email = '';
  password = '';
  errorMessage = '';
  loading = false;

  constructor(
    public themeService: ThemeService,
    public authService: AuthService
  ) {}

  openModal(registerMode: boolean = false) {
    this.isRegisterMode = registerMode;
    this.errorMessage = '';
    this.email = '';
    this.password = '';
    this.showAuthModal = true;
  }

  closeModal() {
    this.showAuthModal = false;
  }

  async submitAuth() {
    this.errorMessage = '';
    
    if (!this.email.trim() || !this.password) {
      this.errorMessage = 'Please enter both email and password.';
      return;
    }

    this.loading = true;
    try {
      if (this.isRegisterMode) {
        await this.authService.register(this.email.trim(), this.password);
      } else {
        await this.authService.login(this.email.trim(), this.password);
      }
      this.closeModal();
    } catch (err: any) {
      switch (err.code) {
        case 'auth/email-already-in-use':
          this.errorMessage = 'This email is already registered.';
          break;
        case 'auth/invalid-credential':
        case 'auth/wrong-password':
        case 'auth/user-not-found':
          this.errorMessage = 'Invalid email or password.';
          break;
        case 'auth/weak-password':
          this.errorMessage = 'Password must be at least 6 characters.';
          break;
        case 'auth/invalid-email':
          this.errorMessage = 'Please enter a valid email address.';
          break;
        default:
          this.errorMessage = err.message || 'Authentication error.';
      }
    } finally {
      this.loading = false;
    }
  }
}