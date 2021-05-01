import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HearingTestPageComponent } from './hearing-test-page.component';
import { TestBaseModule } from 'src/app/shared-components/test-base/test-base.module';
import { PianoKeysModule } from 'src/app/shared-components/piano-keys/piano-keys.module';
import { SamplerService } from 'src/app/services/sampler.service';
import { SvgIconsModule } from 'src/app/shared-components/svg-icons/svg-icons.module';
import { TestModalModule } from 'src/app/shared-components/test-modal/test-modal.module';

@NgModule({
  declarations: [HearingTestPageComponent],
  imports: [
    CommonModule,
    TestBaseModule,
    PianoKeysModule,
    SvgIconsModule,
    TestModalModule
  ],
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
