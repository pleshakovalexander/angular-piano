import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestsPageComponent } from './tests-page.component';
import { ToggleButtonComponent } from './components/toggle-button/toggle-button.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [TestsPageComponent, ToggleButtonComponent]
})
export class TestsPageModule { }
