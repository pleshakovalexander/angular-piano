import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

import { HearingTestPageModule } from './pages/hearing-test-page/hearing-test-page.module';
import { MetronomePageModule } from './pages/metronome-page/metronome-page.module';
import { TestsPageModule } from './pages/tests-page/tests-page.module';
import { CommonModule } from '@angular/common';

@Component({
  imports: [
    CommonModule,
    RouterModule,
    TestsPageModule,
    HearingTestPageModule,
    MetronomePageModule
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(titleService: Title, router: Router) {
    router.events.pipe(filter((e) => e instanceof NavigationEnd)).subscribe({
      next: () =>
        titleService.setTitle(
          router.routerState.snapshot.root.firstChild.data.title
        )
    });
  }
}
