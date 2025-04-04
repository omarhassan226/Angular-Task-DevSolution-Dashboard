import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';

/* Angular Material Modules */
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CustomAnalyticsCardComponent } from './components/custom-analytics-card/custom-analytics-card.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const SharedComponents = [CustomAnalyticsCardComponent];
const AngularMaterialSharedModules = [
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
];

@NgModule({
  declarations: [...SharedComponents],
  imports: [CommonModule, SharedRoutingModule],
  exports: [...SharedComponents, ...AngularMaterialSharedModules],
})
export class SharedModule {}
