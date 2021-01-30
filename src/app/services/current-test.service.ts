import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { skip } from 'rxjs/operators';

export enum CurrentTestEvent {
  Init,
  NextQuestion,
  Finish
}

export interface CurrentTestInfo {
  octaveName: string;
  currentQuestion: number;
  numberOfQuestions: number;
  numberOfCorrectAnswers: number;
}

@Injectable({
  providedIn: 'root'
})
export class CurrentTestService {
  private readonly _info$ = new BehaviorSubject<CurrentTestInfo>(null);
  public info$: Observable<CurrentTestInfo> = this._info$.pipe(skip(1));

  private readonly _events$ = new Subject<CurrentTestEvent>();
  public events$: Observable<CurrentTestEvent> = this._events$.asObservable();

  private _isTestEnded: boolean;
  public get isTestEnded(): boolean {
    return this._isTestEnded;
  }

  init(octaveName: string, numberOfQuestions: number): void {
    this._isTestEnded = true;
    const i: CurrentTestInfo = {
      currentQuestion: 0,
      octaveName: octaveName,
      numberOfQuestions: numberOfQuestions,
      numberOfCorrectAnswers: 0
    };
    this._info$.next(i);
    this._events$.next(CurrentTestEvent.Init);
  }

  nextQuestion(correct: boolean): void {
    const i = this._info$.getValue();
    i.currentQuestion++;
    if (correct) {
      i.numberOfCorrectAnswers++;
    }
    this._info$.next(i);
    this._events$.next(CurrentTestEvent.NextQuestion);
  }

  finish(): void {
    this._isTestEnded = true;
    const i = this._info$.getValue();
    i.currentQuestion = i.numberOfQuestions;
    this._events$.next(CurrentTestEvent.Finish);
  }
}
