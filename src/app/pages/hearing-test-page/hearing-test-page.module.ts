import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HearingTestPageComponent } from './hearing-test-page.component';
import { TestBaseModule } from 'src/app/shared-components/test-base/test-base.module';
import { PianoKeysModule } from 'src/app/shared-components/piano-keys/piano-keys.module';
import { SamplerService } from 'src/app/services/sampler.service';

@NgModule({
  declarations: [HearingTestPageComponent],
  imports: [CommonModule, TestBaseModule, PianoKeysModule],
  providers: [
    SamplerService,
    {
      provide: APP_INITIALIZER,
      useFactory: (sampleService: SamplerService) => {
        return () => sampleService.init();
      },
      deps: [SamplerService],
      multi: true
    }
  ]
})
export class HearingTestPageModule {}
