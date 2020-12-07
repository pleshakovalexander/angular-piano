import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Signature } from 'src/app/models';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleButtonComponent {
  @Output() readonly change = new EventEmitter<Signature>();

  @ViewChild('input') private inputElement: ElementRef<HTMLInputElement>;

  checked: boolean;
  _onChangeEvent(event: Event): void {
    event.stopPropagation();
    this.checked = this.inputElement.nativeElement.checked;
    this.change.emit(this.checked ? Signature.sharp : Signature.flat);
  }

  _onInputClicked(event: Event): void {
    event.stopPropagation();
  }
}
