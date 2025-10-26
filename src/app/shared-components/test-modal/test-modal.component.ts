import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import dialogPolyfill from 'dialog-polyfill';
import { CloseStatus } from './service/test-modal.model';
import { TestModalService } from './service/test-modal.service';

@Component({
    selector: 'app-test-modal',
    templateUrl: './test-modal.component.html',
    styleUrls: ['./test-modal.component.css'],
    standalone: false
})
export class TestModalComponent implements OnInit {
  @ViewChild('myDialog', { static: true })
  private dialogElement: ElementRef;
  private nativeDialogElement: HTMLDialogElement;

  text: string;
  okButtonText: string;
  cancelButtonText: string;
  onClose: (status: CloseStatus) => void;

  constructor(private modalService: TestModalService) {}

  ngOnInit(): void {
    dialogPolyfill.registerDialog(this.dialogElement.nativeElement);
    this.nativeDialogElement = this.dialogElement.nativeElement;
    this.modalService.show$.subscribe({
      next: (info) => {
        this.text = info.text;
        this.okButtonText = info.okButtonText;
        this.cancelButtonText = info.cancelButtonString;
        this.onClose = info.onClose;
        this.nativeDialogElement.showModal();
      }
    });
  }

  okClicked(): void {
    this.nativeDialogElement.close(CloseStatus.Ok);
  }

  cancelClicked(): void {
    this.nativeDialogElement.close(CloseStatus.Cancel);
  }

  handleClose(e: Event): void {
    const status = (e.target as HTMLDialogElement).returnValue as CloseStatus;
    this.onClose(status);
  }
}
