import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDtQs8woEUuo-wuDGVdSj_ZnpvMRQlUQKY",
  authDomain: "aem-commander-dcs.firebaseapp.com",
  projectId: "aem-commander-dcs",
  storageBucket: "aem-commander-dcs.firebasestorage.app",
  messagingSenderId: "415946853261",
  appId: "1:415946853261:web:9a62c5375c5d1d686f4bc4",
  measurementId: "G-JRJWM12LQX"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth())
  ]
};