import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { skip } from 'rxjs/operators';

export enum CurrentTestEvent {
  Init,
  NextQuestion,
  Finish
}

interface CurrentTestInfo {
  octaveName: string;
  currentQuestion: number;
  numberOfQuestions: number;
}

@Injectable({
  providedIn: 'root'
})
export class CurrentTestService {
  private readonly _info = new BehaviorSubject<CurrentTestInfo>(null);
  public info: Observable<CurrentTestInfo> = this._info.pipe(skip(1));

  private readonly _events = new Subject<CurrentTestEvent>();
  public events: Observable<CurrentTestEvent> = this._events.asObservable();

  init(octaveName: string, numberOfQuestions: number): void {
    const i: CurrentTestInfo = {
      currentQuestion: 0,
      octaveName: octaveName,
      numberOfQuestions: numberOfQuestions
    };
    this._info.next(i);
    this._events.next(CurrentTestEvent.Init);
  }

  nextQuestion(): void {
    const i = this._info.getValue();
    i.currentQuestion++;
    this._info.next(i);
    this._events.next(CurrentTestEvent.NextQuestion);
  }

  finish(): void {
    this._events.next(CurrentTestEvent.Finish);
  }
}
