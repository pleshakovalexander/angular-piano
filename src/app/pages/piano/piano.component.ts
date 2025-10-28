import { isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  PLATFORM_ID
} from '@angular/core';
import { SamplerService } from 'src/app/services/sampler.service';
import { PianoKeysComponent } from 'src/app/shared-components/piano-keys/piano-keys.component';
import { Octave } from 'src/app/utils';
import { Note, NoteMark } from 'src/app/utils/piano';

@Component({
  imports: [PianoKeysComponent],
  selector: 'app-piano',
  templateUrl: './piano.component.html',
  styleUrl: './piano.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PianoComponent {
  octaveName: string = 'C';
  octaveHelper: Octave;
  private samplerService: SamplerService;
  private platformId: Object = inject(PLATFORM_ID);

  markedNotes: Map<number, NoteMark> = new Map();

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.samplerService = new SamplerService();
      this.samplerService.init();
    }
  }

  pianoKeyPressed(note: Note): void {
    this.samplerService.play(note.name);
  }
}
