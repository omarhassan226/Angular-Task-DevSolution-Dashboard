import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

/* Angular Material Modules */
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CustomAnalyticsCardComponent } from './components/custom-analytics-card/custom-analytics-card.component';

const SharedComponents = [CustomAnalyticsCardComponent];
const AngularMaterialSharedModules = [MatProgressSpinnerModule];

@NgModule({
  declarations: [...SharedComponents],
  imports: [CommonModule, SharedRoutingModule],
  exports: [...SharedComponents, ...AngularMaterialSharedModules],
})
export class SharedModule {}
