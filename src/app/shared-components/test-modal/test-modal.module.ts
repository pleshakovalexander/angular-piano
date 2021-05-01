import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestModalComponent } from './test-modal.component';
import { TestModalService } from './service/test-modal.service';

@NgModule({
  declarations: [TestModalComponent],
  imports: [CommonModule],
  exports: [TestModalComponent],
  providers: [TestModalService]
})
export class TestModalModule {}
