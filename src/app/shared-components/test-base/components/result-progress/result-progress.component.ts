import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-progress',
  templateUrl: './result-progress.component.html',
  styleUrls: ['./result-progress.component.css']
})
export class ResultProgressComponent implements OnInit {
  @Input() percentage: number;
  offset: number;
  strokeDasharray: string;

  private circumference: number;

  constructor() {}

  ngOnInit(): void {
    const c = 2 * Math.PI * 105;
    this.circumference = c;
    this.strokeDasharray = `${c} ${c}`;
    this.offset = c;
    setTimeout(() => {
      this.offset =
        this.circumference - (this.percentage / 100) * this.circumference;
    }, 100);
  }
}
