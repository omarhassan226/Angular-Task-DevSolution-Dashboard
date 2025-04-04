import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AnalyticsCardsComponent } from './components/analytics-cards/analytics-cards.component';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';
import { ReportChartComponent } from './components/report-chart/report-chart.component';
import { VisitsChartComponent } from './components/visits-chart/visits-chart.component';
import { RecentOrdersComponent } from './components/recent-orders/recent-orders.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { NgApexchartsModule } from 'ng-apexcharts';

@NgModule({
  declarations: [
    DashboardComponent,
    AnalyticsCardsComponent,
    VisitsChartComponent,
    RecentOrdersComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    CoreModule,
    ReportChartComponent,
    NgApexchartsModule,
    MatButtonModule,
    MatMenuModule,
  ],
})
export class DashboardModule {}
