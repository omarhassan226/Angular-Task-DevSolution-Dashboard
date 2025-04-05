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
import { MatCardModule } from '@angular/material/card';
// import { TablerIconsModule } from 'angular-tabler-icons';
import { TruncatePipe } from './pipes/truncate/truncate.pipe';
import { MatMenuModule } from '@angular/material/menu';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CustomProductCardComponent } from './components/custom-product-card/custom-product-card.component';

const SharedComponents = [
  CustomAnalyticsCardComponent,
  CustomTableComponent,
  CustomProductCardComponent,
];
const AngularMaterialSharedModules = [
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  // TablerIconsModule,
  MatCardModule,
  MatMenuModule,
  NgxChartsModule,
  MatPaginatorModule,
  MatTableModule,
];

@NgModule({
  declarations: [...SharedComponents],
  imports: [
    CommonModule,
    SharedRoutingModule,
    TruncatePipe,
    ...AngularMaterialSharedModules,
  ],
  exports: [...SharedComponents, ...AngularMaterialSharedModules],
})
export class SharedModule {}
