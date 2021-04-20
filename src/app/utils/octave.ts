import { scale } from '@tonaljs/scale';
import { octaveNames } from './notes';

export class Octave {
  name: string;
  notes: string[];
  /**
   *  Array of tonic triad notes in octave
   */
  tonicTriad: string[];

  constructor(name: string) {
    this.name = name;
    this.notes = scale(name).notes;
    /**
     * Tonic Triad : I III V III I V(2) I
     */
    this.tonicTriad = [
      this.notes[0] + 3, // I
      this.notes[2] + 3, // III
      this.notes[4] + 3, // V
      this.notes[2] + 3, // III
      this.notes[0] + 3, // I
      this.notes[4] + 2, // V
      this.notes[0] + 3 // I
    ];
  }

  public randomNote(): string {
    const octaves = octaveNames.length;
    const firstOctaveIndex = octaveNames[0].index;
    const octaveIndex = Math.floor(Math.random() * octaves) + firstOctaveIndex;
    const guessNote = this.notes[Math.floor(Math.random() * this.notes.length)];
    return guessNote + octaveIndex;
  }
}
