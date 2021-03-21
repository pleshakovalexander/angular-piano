import { Component, OnInit } from '@angular/core';
import { SamplerService } from 'src/app/services/sampler.service';

@Component({
  selector: 'app-hearing-test-page',
  templateUrl: './hearing-test-page.component.html',
  styleUrls: ['./hearing-test-page.component.css']
})
export class HearingTestPageComponent implements OnInit {
  constructor(private samplerService: SamplerService) {}

  ngOnInit(): void {
    this.playGuessing();
  }

  playGuessing(): void {
    this.samplerService.play('A4');
  }

  next(): void {}
}
