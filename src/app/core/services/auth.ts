// src/app/core/services/auth.ts
import { Injectable, inject, signal } from '@angular/core';
import { 
  Auth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  user, 
  User 
} from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth = inject(Auth);
  private router = inject(Router);
  
  public currentUser = signal<User | null>(null);

  constructor() {
    user(this.auth).subscribe((u) => {
      this.currentUser.set(u);
    });
  }

  async login(email: string, pass: string): Promise<void> {
    await signInWithEmailAndPassword(this.auth, email, pass);
    this.router.navigate(['/config']);
  }

  async register(email: string, pass: string): Promise<void> {
    await createUserWithEmailAndPassword(this.auth, email, pass);
    this.router.navigate(['/config']);
  }

  async logout(): Promise<void> {
    await signOut(this.auth);
    this.router.navigate(['/']);
  }
}