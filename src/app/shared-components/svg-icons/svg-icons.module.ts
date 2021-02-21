import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconNextComponent } from './svg-icon-next/svg-icon-next.component';
import { SvgIconPlayComponent } from './svg-icon-play/svg-icon-play.component';
import { SvgIconExitComponent } from './svg-icon-exit/svg-icon-exit.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SvgIconNextComponent,
    SvgIconPlayComponent,
    SvgIconExitComponent
  ],
  exports: [SvgIconNextComponent, SvgIconPlayComponent, SvgIconExitComponent]
})
export class SvgIconsModule {}
