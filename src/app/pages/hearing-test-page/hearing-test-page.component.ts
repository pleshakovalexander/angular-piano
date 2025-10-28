import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  PLATFORM_ID
} from '@angular/core';
import { toMidi } from '@tonaljs/midi';
import { CurrentTestService } from 'src/app/services/current-test.service';
import { SamplerService } from 'src/app/services/sampler.service';
import { CloseStatus } from 'src/app/shared-components/test-modal/service/test-modal.model';
import { TestModalService } from 'src/app/shared-components/test-modal/service/test-modal.service';
import { Octave } from 'src/app/utils/octave';
import { Note, NoteMark } from 'src/app/utils/piano';

@Component({
  selector: 'app-hearing-test-page',
  templateUrl: './hearing-test-page.component.html',
  styleUrls: ['./hearing-test-page.component.css'],
  standalone: false
})
export class HearingTestPageComponent implements AfterViewInit {
  octaveName: string;
  octaveHelper: Octave;
  guessingNote: string;
  noteGuessed = false;
  guessedCorrect: boolean;
  markedNotes: Map<number, NoteMark> = new Map();
  private samplerService: SamplerService;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private currentTestService: CurrentTestService,
    private testModalService: TestModalService
  ) {}

  ngAfterViewInit(): void {
    this.currentTestService.info$.subscribe({
      next: (i) => {
        if (this.octaveName != i.octaveName) {
          this.octaveName = i.octaveName;
          this.initTest();
        }
      }
    });

    if (isPlatformBrowser(this.platformId)) {
      this.samplerService = new SamplerService();
      this.samplerService.init();
    }
  }

  initTest(): void {
    this.octaveHelper = new Octave(this.octaveName);
    this.guessingNote = this.octaveHelper.randomNote();
  }

  playGuessing(): void {
    this.samplerService.play(this.guessingNote);
  }

  pianoKeyPressed(note: Note): void {
    if (this.noteGuessed) return;
    this.samplerService.play(note.name);
    const correctMidi = toMidi(this.guessingNote);
    const marks: Map<number, NoteMark> = new Map();
    if (correctMidi && note.midi) {
      marks.set(correctMidi, NoteMark.correct);
      this.guessedCorrect = correctMidi == note.midi;
      if (false == this.guessedCorrect) {
        marks.set(note.midi, NoteMark.wrong);
      }
    }
    this.markedNotes = marks;
    this.noteGuessed = true;
  }

  next(): void {
    if (this.noteGuessed) {
      this.prepareNextQuestion(this.guessedCorrect);
      return;
    }
    this.guessedCorrect = false;
    this.testModalService.show({
      text: 'Пропустить ноту?',
      okButtonText: 'пропустить',
      cancelButtonString: 'угадывать',
      onClose: (status) => {
        if (status == CloseStatus.Ok) {
          this.prepareNextQuestion(this.guessedCorrect);
        }
      }
    });
  }

  private prepareNextQuestion(guessedCorrect): void {
    this.noteGuessed = false;
    this.guessingNote = this.octaveHelper.randomNote();
    this.currentTestService.nextQuestion(guessedCorrect);
    this.markedNotes = new Map();
    this.playGuessing();
  }
}
