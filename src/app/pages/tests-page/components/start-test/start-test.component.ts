import { Component, OnInit } from '@angular/core';
import { Signature } from 'src/app/models';
import { getAvailableOctaves, Octave } from 'src/app/utils';

@Component({
  selector: 'app-start-test',
  templateUrl: './start-test.component.html',
  styleUrls: ['./start-test.component.css']
})
export class StartTestComponent implements OnInit {
  questionNumbersList: number[] = [];
  octaves: Octave[] = [];

  ngOnInit(): void {
    this.octaves = getAvailableOctaves(Signature.sharp);
    let num = 10;
    while (num <= 50) {
      this.questionNumbersList.push(num);
      num += 5;
    }
  }

  buttonToggled(value: Signature): void {
    this.octaves = getAvailableOctaves(value);
  }
}
