import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
    selector: 'app-result-progress',
    templateUrl: './result-progress.component.html',
    styleUrls: ['./result-progress.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class ResultProgressComponent implements OnInit {
  @Input() percentage: number;
  offset: number;
  strokeDasharray: string;

  radius = 105;

  private circumference: number;

  constructor(private changeDetectionRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    const c = 2 * Math.PI * this.radius;
    this.circumference = c;
    this.strokeDasharray = `${c} ${c}`;
    this.offset = c;
    setTimeout(() => {
      this.offset =
        this.circumference - (this.percentage / 100) * this.circumference;
      this.changeDetectionRef.detectChanges();
    }, 100);
  }
}
