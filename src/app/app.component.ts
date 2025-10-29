import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';

import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule, RouterModule],
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
