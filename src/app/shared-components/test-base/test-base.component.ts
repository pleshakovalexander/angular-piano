import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
  info$: Observable<CurrentTestInfo>;
  constructor(private currentTestService: CurrentTestService) {}

  ngOnInit(): void {
    this.info$ = this.currentTestService.info$;
  }

  next(): void {
    this.currentTestService.nextQuestion(false);
  }

  showEndModal(): void {}

  get testEnded(): boolean {
    return this.currentTestService.isTestEnded;
  }
}
