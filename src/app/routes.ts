import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetronomePageComponent } from './pages/metronome-page/metronome-page.component';
import { PianoComponent } from './pages/piano/piano.component';

export const routes: Routes = [
  { path: '', redirectTo: '/piano', pathMatch: 'full' },
  {
    path: 'piano',
    component: PianoComponent,
    data: { title: 'Piano' }
  },
  {
    path: 'metronome',
    component: MetronomePageComponent,
    data: { title: 'Метроном' }
  },
  { path: '**', redirectTo: '/piano' }
];
