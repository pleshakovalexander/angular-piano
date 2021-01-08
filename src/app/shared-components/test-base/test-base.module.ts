import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestBaseComponent } from './test-base.component';
import { ResultProgressComponent } from './components/result-progress/result-progress.component';

@NgModule({
  declarations: [TestBaseComponent, ResultProgressComponent],
  imports: [CommonModule]
})
export class TestBaseModule {}
