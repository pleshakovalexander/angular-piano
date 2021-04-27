import { scale } from '@tonaljs/scale';
import { toMidi } from '@tonaljs/midi';
import { octaveNames } from './notes';

export class OctaveModelHelper {
  private allNotes: string[];
  constructor() {
    // c chromatic scale contains all notes
    this.allNotes = scale('c chromatic').notes;
  }

  getModel(octaveName: string): OctaveViewModel[] {
    const notesInOctave = scale(octaveName).notes;
    const model: OctaveViewModel[] = [];
    octaveNames.forEach((octave) => {
      const currentMidiNotes = notesInOctave.map((n) =>
        toMidi(n + octave.index)
      );
      const m: OctaveViewModel = {
        name: octave.name,
        notes: this.allNotes.map((name) => {
          const noteName = name + octave.index;
          const noteMidi = toMidi(noteName) || 0;
          const noteDegree = this.noteDegreeToRoman(
            currentMidiNotes.indexOf(noteMidi) + 1
          );
          return new Note(noteName, noteDegree, noteMidi);
        })
      };
      model.push(m);
    });
    return model;
  }

  private noteDegreeToRoman(noteNumberDegree: number): string {
    switch (noteNumberDegree) {
      case 1:
        return 'I';
      case 2:
        return 'II';
      case 3:
        return 'III';
      case 4:
        return 'IV';
      case 5:
        return 'V';
      case 6:
        return 'VI';
      case 7:
        return 'VII';
      default:
        return '';
    }
  }
}

export interface OctaveViewModel {
  name: string;
  notes: Note[];
}

export class Note {
  public cssClassObj: any;
  public name: string;
  public degree: string;
  public midi: number;
  constructor(name: string, degree: string = '', midi: number = 0) {
    this.name = name;
    this.degree = degree;
    this.midi = midi;
    this.cssClassObj = this.getDefaultCSSClass();
  }

  private getDefaultCSSClass(): any {
    const cssClassObj: any = {};
    if (this.name.includes('b')) {
      cssClassObj.black = true;
    } else {
      cssClassObj.white = true;
    }
    return cssClassObj;
  }

  setCSSClassToDefault(): void {
    this.cssClassObj = this.getDefaultCSSClass();
  }
}

export enum NoteMark {
  wrong = 'wrong',
  correct = 'correct'
}
