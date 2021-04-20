import { Component, OnInit } from '@angular/core';
import { CurrentTestService } from 'src/app/services/current-test.service';
import { SamplerService } from 'src/app/services/sampler.service';
import { Note } from 'src/app/utils/piano';

@Component({
  selector: 'app-hearing-test-page',
  templateUrl: './hearing-test-page.component.html',
  styleUrls: ['./hearing-test-page.component.css']
})
export class HearingTestPageComponent implements OnInit {
  octaveName: string;

  constructor(
    private samplerService: SamplerService,
    private currentTestService: CurrentTestService
  ) {}

  ngOnInit(): void {
    this.currentTestService.info$.subscribe({
      next: (i) => {
        if (this.octaveName != i.octaveName) {
          this.octaveName = i.octaveName;
        }
      }
    });
    this.playGuessing();
  }

  playGuessing(): void {
    this.samplerService.play('A4');
  }

  pianoKeyPressed(note: Note) {
    this.samplerService.play(note.name);
  }

  next(): void {}
}
