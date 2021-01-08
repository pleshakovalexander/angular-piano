import { ThrowStmt } from '@angular/compiler';
import { not } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NoteMark, OctaveModelHelper, OctaveViewModel } from 'src/app/utils/piano';

@Component({
  selector: 'app-piano-keys',
  templateUrl: './piano-keys.component.html',
  styleUrls: ['./piano-keys.component.css']
})
export class PianoKeysComponent {
  private _octaveHelper = new OctaveModelHelper();
  octaves: OctaveViewModel[] = [];

  @Input() set octaveName(name: string){
    if (name) {
      this.octaves = this._octaveHelper.getModel(name);
    } else {
      this.octaves = [];
    }
  };
  @Input() markedNotes: Map<number, NoteMark>;

  @Output() keyPressed = new EventEmitter();

  handleKeyPressed(note){
    this.keyPressed.emit(note);
  }

  getNoteClass(noteMidi: number, noteClassObj: any): any{
    if(this.markedNotes.has(noteMidi)){
      return  Object.assign(noteClassObj, {[this.markedNotes.get(noteMidi)]:true} )
    }
    return noteClassObj;
  }

}
