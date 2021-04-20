import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  Note,
  NoteMark,
  OctaveModelHelper,
  OctaveViewModel
} from 'src/app/utils/piano';

@Component({
  selector: 'app-piano-keys',
  templateUrl: './piano-keys.component.html',
  styleUrls: ['./piano-keys.component.css']
})
export class PianoKeysComponent {
  private _octaveHelper = new OctaveModelHelper();
  octaves: OctaveViewModel[] = [];

  @Input() set octaveName(name: string) {
    if (name) {
      this.octaves = this._octaveHelper.getModel(name);
    } else {
      this.octaves = [];
    }
  }
  @Input() markedNotes: Map<number, NoteMark> = new Map();

  @Output() keyPressed = new EventEmitter<Note>();

  handleKeyPressed(note: Note) {
    this.keyPressed.emit(note);
  }

  getNoteClass(noteMidi: number, noteClassObj: any): any {
    if (this.markedNotes.has(noteMidi)) {
      return Object.assign(noteClassObj, {
        [this.markedNotes.get(noteMidi)]: true
      });
    }
    return noteClassObj;
  }
}
