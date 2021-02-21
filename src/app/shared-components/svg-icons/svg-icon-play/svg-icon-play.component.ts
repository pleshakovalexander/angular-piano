import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[svg-icon-play]',
  templateUrl: './play.svg'
})
export class SvgIconPlayComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log('svg play init');
  }
}
