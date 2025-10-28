import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HearingTestPageComponent } from './pages/hearing-test-page/hearing-test-page.component';
import { MetronomePageComponent } from './pages/metronome-page/metronome-page.component';
import { TestsPageComponent } from './pages/tests-page/tests-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/tests', pathMatch: 'full' },
  {
    path: 'tests',
    component: TestsPageComponent,
    data: { title: 'Настрой слух' }
  },
  {
    path: 'hearing-test',
    component: HearingTestPageComponent,
    data: { title: 'Угадай Ноту' }
  },
  {
    path: 'metronome',
    component: MetronomePageComponent,
    data: { title: 'Метроном' }
  }
];
