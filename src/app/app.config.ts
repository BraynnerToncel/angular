import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '@envs/environment';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), provideAnimationsAsync(),
     provideFirebaseApp(() => initializeApp(environment.firebase)), 
     provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"prueba-768c4","appId":"1:473311373346:web:250d7410951dae2a4e827b","storageBucket":"prueba-768c4.appspot.com","apiKey":"AIzaSyAvuXGNQMoaux8UO2xevkiriVZm0TOd4hE","authDomain":"prueba-768c4.firebaseapp.com","messagingSenderId":"473311373346","measurementId":"G-DP7J8ZFLDY"})), provideFirestore(() => getFirestore())]
};
