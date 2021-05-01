import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  CurrentTestInfo,
  CurrentTestService
} from 'src/app/services/current-test.service';
import { CloseStatus } from '../test-modal/service/test-modal.model';
import { TestModalService } from '../test-modal/service/test-modal.service';

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
    private route: ActivatedRoute,
    private testModalService: TestModalService
  ) {}

  private octave: string;
  private numberOfQuestions: number;

  ngOnInit(): void {
    this.currentTestService.info$.subscribe({
      next: (i) => (this.info = i)
    });
    this.octave = this.route.snapshot.queryParamMap.get('octave');
    this.numberOfQuestions = parseInt(
      this.route.snapshot.queryParamMap.get('questions')
    );
    this.currentTestService.init(this.octave, this.numberOfQuestions);
  }

  next(): void {
    this.nextEventEmitter.emit();
  }

  restart() {
    this.currentTestService.init(this.octave, this.numberOfQuestions);
  }

  showEndModal(): void {
    this.testModalService.show({
      text: 'Закончить тест?',
      okButtonText: 'закончить',
      cancelButtonString: 'угадывать',
      onClose: (status) => {
        if (status == CloseStatus.Ok) {
          this.currentTestService.finish();
        }
      }
    });
  }

  get testEnded(): boolean {
    return this.currentTestService.isTestEnded;
  }
}
