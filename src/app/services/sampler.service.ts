import { Injectable } from '@angular/core';
import { Sampler as ToneSampler } from 'tone';

@Injectable()
export class SamplerService {
  private sampler: ToneSampler;

  init(): Promise<any> {
    return new Promise((resolve) => {
      const sampler: ToneSampler = new ToneSampler(
        {
          C1: '/assets/C1.mp3',
          A1: '/assets/A1.mp3',
          A2: '/assets/A2.mp3',
          A3: '/assets/A3.mp3',
          A4: '/assets/A4.mp3'
        },
        () => {
          this.sampler = sampler;
          resolve(true);
        }
      ).toDestination();
    });
  }

  play(note: string): void {
    this.sampler.releaseAll();
    this.sampler.triggerAttack(note);
  }
  playSequence(notes: string[]): void {
    notes.forEach((n, i) => {
      setTimeout(() => {
        this.play(n);
      }, i * 650);
    });
  }
}
