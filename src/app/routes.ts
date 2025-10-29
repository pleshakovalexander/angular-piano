import { Routes } from '@angular/router';
import { PianoComponent } from './pages/piano/piano.component';

export const routes: Routes = [
  { path: '', redirectTo: '/piano', pathMatch: 'full' },
  {
    path: 'piano',
    component: PianoComponent,
    data: { title: 'Piano' }
  },

  { path: '**', redirectTo: '/piano' }
];
