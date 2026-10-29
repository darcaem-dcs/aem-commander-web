import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public currentTheme = signal<'dark' | 'light'>('dark');

  constructor() {
    // Leer si hay un tema guardado, o detectar la preferencia del SO
    const savedTheme = localStorage.getItem('theme') as 'dark' | 'light';
    const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
    
    const themeToSet = savedTheme || (prefersLight ? 'light' : 'dark');
    this.setTheme(themeToSet);
  }

  toggleTheme() {
    this.setTheme(this.currentTheme() === 'dark' ? 'light' : 'dark');
  }

  private setTheme(theme: 'dark' | 'light') {
    this.currentTheme.set(theme);
    document.documentElement.setAttribute('data-theme', theme); // Esto inyecta el CSS correcto
    localStorage.setItem('theme', theme);
  }
}