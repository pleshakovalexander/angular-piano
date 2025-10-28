import {
  Component,
  ElementRef,
  Input,
  ViewChild,
  AfterViewInit,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CloseStatus } from './service/test-modal.model';
import { TestModalService } from './service/test-modal.service';

@Component({
  selector: 'app-test-modal',
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.css'],
  standalone: false
})
export class TestModalComponent implements AfterViewInit {
  @ViewChild('myDialog', { static: true })
  dialogElement: ElementRef<HTMLDialogElement>;
  private nativeDialogElement: HTMLDialogElement;

  text: string;
  okButtonText: string;
  cancelButtonText: string;
  onClose: (status: CloseStatus) => void;

  constructor(
    private modalService: TestModalService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  async ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    const dialogPolyfill = await import('dialog-polyfill');

    dialogPolyfill.default.registerDialog(this.dialogElement.nativeElement);
    this.nativeDialogElement = this.dialogElement.nativeElement;

    this.modalService.show$.subscribe((info) => {
      this.text = info.text;
      this.okButtonText = info.okButtonText;
      this.cancelButtonText = info.cancelButtonString;
      this.onClose = info.onClose;
      this.nativeDialogElement.showModal();
    });
  }

  okClicked() {
    this.nativeDialogElement.close(CloseStatus.Ok);
  }

  cancelClicked() {
    this.nativeDialogElement.close(CloseStatus.Cancel);
  }

  handleClose(e: Event) {
    const status = (e.target as HTMLDialogElement).returnValue as CloseStatus;
    this.onClose(status);
  }
}
