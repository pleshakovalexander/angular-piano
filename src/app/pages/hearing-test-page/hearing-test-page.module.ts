import { NgModule, inject, provideAppInitializer } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HearingTestPageComponent } from './hearing-test-page.component';
import { TestBaseModule } from 'src/app/shared-components/test-base/test-base.module';
import { PianoKeysModule } from 'src/app/shared-components/piano-keys/piano-keys.module';
import { SamplerService } from 'src/app/services/sampler.service';
import { TestModalModule } from 'src/app/shared-components/test-modal/test-modal.module';

@NgModule({
  declarations: [HearingTestPageComponent],
  imports: [CommonModule, TestBaseModule, PianoKeysModule, TestModalModule],
  providers: [
    SamplerService,
    provideAppInitializer(() => {
        const initializerFn = ((sampleService: SamplerService) => {
        return () => sampleService.init();
      })(inject(SamplerService));
        return initializerFn();
      })
  ]
})
export class HearingTestPageModule {}
