import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticsCardsComponent } from './analytics-cards.component';

describe('AnalyticsCardsComponent', () => {
  let component: AnalyticsCardsComponent;
  let fixture: ComponentFixture<AnalyticsCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnalyticsCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalyticsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
