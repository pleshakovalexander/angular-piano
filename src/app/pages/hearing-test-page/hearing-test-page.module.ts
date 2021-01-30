import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HearingTestPageComponent } from './hearing-test-page.component';
import { TestBaseModule } from 'src/app/shared-components/test-base/test-base.module';
import { PianoKeysModule } from 'src/app/shared-components/piano-keys/piano-keys.module';

@NgModule({
  declarations: [HearingTestPageComponent],
  imports: [CommonModule, TestBaseModule, PianoKeysModule]
})
export class HearingTestPageModule {}
