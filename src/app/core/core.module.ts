import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [CoreComponent, NavbarComponent, SidebarComponent],
  imports: [CommonModule, CoreRoutingModule, SharedModule],
})
export class CoreModule {}
