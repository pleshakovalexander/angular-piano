import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestsPageComponent } from './pages/tests-page/tests-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/tests', pathMatch: 'full' },
  { path: 'tests', component: TestsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
