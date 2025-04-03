import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomAnalyticsCardComponent } from './custom-analytics-card.component';

describe('CustomAnalyticsCardComponent', () => {
  let component: CustomAnalyticsCardComponent;
  let fixture: ComponentFixture<CustomAnalyticsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomAnalyticsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomAnalyticsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
