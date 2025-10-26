import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Signature } from 'src/app/models';
import { getAvailableOctaves, Octave } from 'src/app/utils';

@Component({
    selector: 'app-start-test',
    templateUrl: './start-test.component.html',
    styleUrls: ['./start-test.component.css'],
    standalone: false
})
export class StartTestComponent implements OnInit {
  questionNumbersList: number[] = [];
  octaves: Octave[] = [];

  selectedOctave: UntypedFormControl;
  selectedNumberOfQuestions: UntypedFormControl;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.octaves = getAvailableOctaves(Signature.sharp);
    this.selectedOctave = new UntypedFormControl(this.octaves[0].code);
    let num = 10;
    while (num <= 50) {
      this.questionNumbersList.push(num);
      num += 5;
    }
    this.selectedNumberOfQuestions = new UntypedFormControl(
      this.questionNumbersList[0]
    );
  }

  buttonToggled(value: Signature): void {
    this.octaves = getAvailableOctaves(value);
    this.selectedOctave.setValue(this.octaves[0].code);
  }

  onSubmit() {
    const questions: number = this.selectedNumberOfQuestions.value;
    const octave: string = this.selectedOctave.value;
    this.router.navigate(['/hearing-test'], {
      queryParams: { octave, questions }
    });
  }
}
