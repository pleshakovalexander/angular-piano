import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestBaseComponent } from './test-base.component';
import { ResultProgressComponent } from './components/result-progress/result-progress.component';
import { TestResultsComponent } from './components/test-results/test-results.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    TestBaseComponent,
    ResultProgressComponent,
    TestResultsComponent
  ],
  exports: [TestBaseComponent]
})
export class TestBaseModule {}
