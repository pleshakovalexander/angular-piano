import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestsPageComponent } from './tests-page.component';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StartTestComponent } from './components/start-test/start-test.component';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  declarations: [TestsPageComponent, ToggleButtonComponent, StartTestComponent]
})
export class TestsPageModule {}
