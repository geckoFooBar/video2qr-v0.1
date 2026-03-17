import { Routes } from '@angular/router';
import { GenerateQr } from './features/components/generate-qr/generate-qr'; // Import your component

export const routes: Routes = [
  // 1. Eagerly loaded route (loads immediately)
  { 
    path: '', 
    component: GenerateQr 
  },

  // 2. Lazy loaded route (loads only when the user visits this URL)
  // Notice we use `loadComponent` instead of `loadChildren` for standalone!
  /*
  { 
    path: 'settings', 
    loadComponent: () => import('./settings/settings.component').then(c => c.SettingsComponent)
  },
  */

  // 3. Default redirect (if they land on your root URL)
  { 
    path: '', 
    redirectTo: 'generate', 
    pathMatch: 'full' 
  }
];