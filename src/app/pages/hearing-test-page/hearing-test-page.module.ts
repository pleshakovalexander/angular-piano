import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HearingTestPageComponent } from './hearing-test-page.component';
import { TestBaseModule } from 'src/app/shared-components/test-base/test-base.module';
import { PianoKeysModule } from 'src/app/shared-components/piano-keys/piano-keys.module';

import { TestModalModule } from 'src/app/shared-components/test-modal/test-modal.module';

@NgModule({
  declarations: [HearingTestPageComponent],
  imports: [CommonModule, TestBaseModule, PianoKeysModule, TestModalModule]
})
export class HearingTestPageModule {}
