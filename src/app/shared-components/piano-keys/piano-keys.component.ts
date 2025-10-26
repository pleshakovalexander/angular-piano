import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import {
  Note,
  NoteMark,
  OctaveModelHelper,
  OctaveViewModel
} from 'src/app/utils/piano';

@Component({
    selector: 'app-piano-keys',
    templateUrl: './piano-keys.component.html',
    styleUrls: ['./piano-keys.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
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
  @Input() set markedNotes(marks: Map<number, NoteMark>) {
    const anyMarks = marks.size > 0;
    this.octaves.forEach((o) =>
      o.notes.forEach((n) => {
        if (anyMarks && marks.has(n.midi)) {
          n.cssClassObj[marks.get(n.midi)] = true;
        } else {
          n.setCSSClassToDefault();
        }
      })
    );
  }

  @Output() keyPressed = new EventEmitter<Note>();

  handleKeyPressed(note: Note) {
    this.keyPressed.emit(note);
  }
}
