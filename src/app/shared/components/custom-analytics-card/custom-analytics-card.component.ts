import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-custom-analytics-card',
  templateUrl: './custom-analytics-card.component.html',
  styleUrl: './custom-analytics-card.component.scss',
})
export class CustomAnalyticsCardComponent {
  @Input({ required: true }) data: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.data = changes['data'].currentValue;
    }
  }
}
