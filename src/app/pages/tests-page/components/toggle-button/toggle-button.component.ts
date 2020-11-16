import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Signature } from 'src/app/models';

@Component({
  selector: 'app-toggle-button',
  templateUrl: './toggle-button.component.html',
  styleUrls: ['./toggle-button.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleButtonComponent {
  @ViewChild('input') _inputElement: ElementRef<HTMLInputElement>;

  @Output() readonly change = new EventEmitter<Signature>()

  checked: boolean
  _onChangeEvent(event: Event): void {
    event.stopPropagation();
    this.checked = this._inputElement.nativeElement.checked;
    this.change.emit(this.checked ? Signature.Sharp : Signature.Flat);
  }

  _onInputClicked(event: Event): void {
    event.stopPropagation();
  }
}
