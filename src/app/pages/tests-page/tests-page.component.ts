import { Component } from '@angular/core';

@Component({
  selector: 'app-tests-page',
  templateUrl: './tests-page.component.html',
  styleUrls: ['./tests-page.component.css']
})
export class TestsPageComponent {

  buttonToggled(value: any): void {
    console.log(value)
  }

}
