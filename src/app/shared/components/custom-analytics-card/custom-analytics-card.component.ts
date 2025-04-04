import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-custom-analytics-card',
  templateUrl: './custom-analytics-card.component.html',
  styleUrl: './custom-analytics-card.component.scss',
})
export class CustomAnalyticsCardComponent {
  @Input({ required: true }) data: any;
  totalRevenuePercentage: any = 0;
  todayRevenuePercentage: any = 0;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.data = changes['data'].currentValue;

      if (this.data?.lastYear) {
        this.totalRevenuePercentage =
          ((this.data.currentYear - this.data.lastYear) / this.data.lastYear) *
          100;
      }

      if (this.data?.lastDay) {
        this.todayRevenuePercentage =
          ((this.data.todayRevenue - this.data.lastDay) / this.data.lastDay) *
          100;
      }
    }
  }
}
