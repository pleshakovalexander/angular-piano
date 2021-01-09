import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

enum CurrentTestEvent {
  Init,
  NextQuestion,
  Finish
}

@Injectable({
  providedIn: 'root'
})
export class CurrentTestService {
  private _octaveName: string;
  private _currentQuestion: number;
  private _numberOfQuestions: number;
  private _events = new Subject<CurrentTestEvent>();

  public events = this._events.asObservable();
  public get octaveName(): string {
    return this._octaveName;
  }
  public get currentQuestion(): number {
    return this._currentQuestion;
  }
  public get numberOfQuestions(): number {
    return this._numberOfQuestions;
  }

  init(octaveName: string, numberOfQuestions: number): void {
    this._currentQuestion = 0;
    this._octaveName = octaveName;
    this._numberOfQuestions = numberOfQuestions;
    this._events.next(CurrentTestEvent.Init);
  }

  nextQuestion(): void {
    this._currentQuestion++;
    this._events.next(CurrentTestEvent.NextQuestion);
  }

  finish(): void {
    this._currentQuestion = this._numberOfQuestions + 1;
    this._events.next(CurrentTestEvent.Finish);
  }
}
