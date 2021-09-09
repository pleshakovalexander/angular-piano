import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetronomePageComponent } from './metronome-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [MetronomePageComponent]
})
export class MetronomePageModule {}
