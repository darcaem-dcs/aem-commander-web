// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { Landing } from './features/landing/landing';
import { ConfigLayout } from './features/config/config-layout/config-layout';
import { CoreSetup } from './features/config/core-setup/core-setup';
import { AiCommander } from './features/config/ai-commander/ai-commander';
import { Persistence } from './features/config/persistence/persistence';
import { Csar } from './features/config/csar/csar';
import { CivTraffic } from './features/config/civ-traffic/civ-traffic';
import { Qra } from './features/config/qra/qra';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  { 
    path: '', 
    component: Landing,
    title: 'AEM Commander - Home'
  },
  { 
    path: 'config', 
    component: ConfigLayout,
    canActivate: [authGuard],
    title: 'AEM Commander - Dashboard',
    children: [
      { path: '', redirectTo: 'core', pathMatch: 'full' },
      { path: 'core', component: CoreSetup },
      { path: 'ai', component: AiCommander },
      { path: 'persistence', component: Persistence },
      { path: 'csar', component: Csar },
      { path: 'civ', component: CivTraffic },
      { path: 'qra', component: Qra }
    ]
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];