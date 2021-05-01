import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { TestModalInfo } from './test-modal.model';

@Injectable()
export class TestModalService {
  private _show$ = new Subject<TestModalInfo>();
  public show$ = this._show$.asObservable();

  constructor() {}

  show(info: TestModalInfo): void {
    this._show$.next(info);
  }
}
