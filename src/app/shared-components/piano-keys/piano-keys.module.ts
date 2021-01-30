import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PianoKeysComponent } from './piano-keys.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PianoKeysComponent],
  exports: [PianoKeysComponent]
})
export class PianoKeysModule {}
