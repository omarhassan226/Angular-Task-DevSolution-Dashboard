import { Component, inject, OnInit } from '@angular/core';
import { MasterDataService } from '../../../../core/services/master-data.service';
import { analytics } from '../../../../core/models/master-data-models';

@Component({
  selector: 'app-analytics-cards',
  templateUrl: './analytics-cards.component.html',
  styleUrl: './analytics-cards.component.scss',
})
export class AnalyticsCardsComponent implements OnInit {
  masterDataService = inject(MasterDataService);

  analyticsData: analytics = {
    _id: '',
    totalRevenue: {
      currentYear: 0,
      lastYear: 0,
    },
    todayRevenue: {
      today: 0,
      lastDay: 0,
    },
    activeUsers: 0,
    soldItems: 0,
  };

  ngOnInit(): void {
    this.getAnalytics();
  }

  getAnalytics() {
    this.masterDataService.getAnalytics().subscribe({
      next: (res: analytics[]) => {
        this.analyticsData = res[0];
        console.log(this.analyticsData);
      },
      error: (err: string) => {
        console.error('Error fetching analytics data:', err);
      },
    });
  }
}
