import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HearingTestPageComponent } from './hearing-test-page.component';

describe('HearingTestPageComponent', () => {
  let component: HearingTestPageComponent;
  let fixture: ComponentFixture<HearingTestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HearingTestPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HearingTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
