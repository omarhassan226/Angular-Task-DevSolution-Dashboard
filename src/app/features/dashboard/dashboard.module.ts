import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AnalyticsCardsComponent } from './components/analytics-cards/analytics-cards.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [DashboardComponent, AnalyticsCardsComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
