import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestModalComponent } from './test-modal.component';

@NgModule({
  declarations: [TestModalComponent],
  imports: [CommonModule],
  exports: [TestModalComponent]
})
export class TestModalModule {}
