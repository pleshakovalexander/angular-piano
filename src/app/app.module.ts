import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestsPageModule } from './pages/tests-page/tests-page.module';
import { HearingTestPageModule } from './pages/hearing-test-page/hearing-test-page.module';
import { MetronomePageModule } from './pages/metronome-page/metronome-page.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestsPageModule,
    HearingTestPageModule,
    MetronomePageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
