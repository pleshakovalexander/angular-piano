import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { fromEvent, interval, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, startWith } from 'rxjs/operators';
import { MonoSynth } from 'tone';

@Component({
    selector: 'app-metronome-page',
    templateUrl: './metronome-page.component.html',
    styleUrls: ['./metronome-page.component.css'],
    standalone: false
})
export class MetronomePageComponent implements AfterViewInit, OnDestroy {
  bpm = new UntypedFormControl(120);

  @ViewChild('bpmNumberInput')
  private bpmNumberInput: ElementRef<HTMLInputElement>;

  private synth: MonoSynth;

  private intervalSubscription = new Subscription();

  private bpmNumberInputChangedSubscription = new Subscription();

  constructor() {
    this.synth = this.getSynth().toDestination();
    //Если подписка закрыта значит метроном не играет
    this.intervalSubscription.unsubscribe();
  }
  ngAfterViewInit(): void {
    this.bpmNumberInputChangedSubscription = fromEvent(
      this.bpmNumberInput.nativeElement,
      'input'
    )
      .pipe(distinctUntilChanged(), debounceTime(700))
      .subscribe({
        next: () => this.bpmChanged()
      });
  }

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
    this.bpmNumberInputChangedSubscription.unsubscribe();
  }

  bpmChanged(): void {
    if (false == this.intervalSubscription.closed) {
      this.intervalSubscription.unsubscribe();
      this.intervalSubscription = this.startMetronomeInterval(this.bpm.value);
    }
  }

  play(): void {
    if (this.intervalSubscription.closed) {
      this.intervalSubscription = this.startMetronomeInterval(this.bpm.value);
    } else {
      this.intervalSubscription.unsubscribe();
    }
  }

  get buttonText(): string {
    return this.intervalSubscription.closed ? 'воспроизвести' : 'пауза';
  }

  private startMetronomeInterval(bpm: number): Subscription {
    const intervalNumber = bpm / 60;
    return (
      interval(1000 / intervalNumber)
        //для того что бы интервал работал сразу без задержки
        .pipe(startWith(0))
        .subscribe({
          next: () => this.playMetronomeTick()
        })
    );
  }

  private playMetronomeTick(): void {
    this.synth.triggerAttackRelease('C6', '8n');
  }

  private getSynth(): MonoSynth {
    return new MonoSynth({
      volume: -8,
      detune: 0,
      portamento: 0,
      envelope: {
        attack: 0.05,
        attackCurve: 'linear',
        decay: 0.3,
        decayCurve: 'exponential',
        release: 0.8,
        releaseCurve: 'exponential',
        sustain: 0.4
      },
      filter: {
        Q: 1,
        detune: 0,
        frequency: 0,
        gain: 0,
        rolloff: -12,
        type: 'lowpass'
      },
      filterEnvelope: {
        attack: 0.001,
        attackCurve: 'linear',
        decay: 0.7,
        decayCurve: 'exponential',
        release: 0.8,
        releaseCurve: 'exponential',
        sustain: 0.1,
        baseFrequency: 300,
        exponent: 2,
        octaves: 4
      },
      oscillator: {
        phase: 0,

        type: 'square8'
      }
    });
  }
}
