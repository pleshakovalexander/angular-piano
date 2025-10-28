import { Sampler } from 'tone';

export class SamplerService {
  private sampler: Sampler | null = null;

  init(): Promise<boolean> {
    return new Promise((resolve) => {
      const sampler: Sampler = new Sampler(
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
