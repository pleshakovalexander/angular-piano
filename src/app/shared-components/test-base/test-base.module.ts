import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestBaseComponent } from './test-base.component';
import { ResultProgressComponent } from './components/result-progress/result-progress.component';
import { TestResultsComponent } from './components/test-results/test-results.component';

@NgModule({
  declarations: [TestBaseComponent, ResultProgressComponent, TestResultsComponent],
  imports: [CommonModule]
})
export class TestBaseModule {}
