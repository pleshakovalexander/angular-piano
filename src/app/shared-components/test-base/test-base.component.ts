import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  CurrentTestInfo,
  CurrentTestService
} from 'src/app/services/current-test.service';

@Component({
  selector: 'app-test-base',
  templateUrl: './test-base.component.html',
  styleUrls: ['./test-base.component.css']
})
export class TestBaseComponent implements OnInit {
  info: CurrentTestInfo;

  @Output('next') nextEventEmitter = new EventEmitter();

  constructor(
    private currentTestService: CurrentTestService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.currentTestService.info$.subscribe({
      next: (i) => (this.info = i)
    });
    const octave = this.route.snapshot.queryParamMap.get('octave');
    const numberOfQuestions = parseInt(
      this.route.snapshot.queryParamMap.get('questions')
    );
    this.currentTestService.init(octave, numberOfQuestions);
  }

  next(): void {
    this.nextEventEmitter.emit();
  }

  showEndModal(): void {}

  get testEnded(): boolean {
    return this.currentTestService.isTestEnded;
  }
}
