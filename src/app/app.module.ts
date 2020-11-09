import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestsPageModule } from './pages/tests-page/tests-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestsPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
