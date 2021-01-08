import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-results',
  templateUrl: './test-results.component.html',
  styleUrls: ['./test-results.component.css']
})
export class TestResultsComponent implements OnInit {
  @Input() numberOfQuestions: number;
  @Input() correctAnswers: number;
  percentage: number;
  headerText: string;

  constructor() {}

  ngOnInit(): void {
    let p = Math.floor((this.correctAnswers / this.numberOfQuestions) * 100);
    if (isNaN(p)) {
      p = 0;
    }
    this.percentage = p;
    if (this.percentage >= 80) {
      this.headerText = 'Отлично 😀';
    } else if (this.percentage >= 65) {
      this.headerText = 'Хорошо 🙂';
    } else if (this.percentage >= 45) {
      this.headerText = 'Неплохо 😉';
    } else {
      this.headerText = 'Отдохни 😋';
    }
  }
}
