import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBaseComponent } from './test-base.component';

describe('TestBaseComponent', () => {
  let component: TestBaseComponent;
  let fixture: ComponentFixture<TestBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
