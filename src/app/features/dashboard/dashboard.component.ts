import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  isSidebarOpen = window.innerWidth > 750;
  isDropdownOpen = false;
  messageNotify = false;
  selectedItem = 'dashboard';

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isSidebarOpen = event.target.innerWidth > 750;
  }

  sidebarItemSelection(itemName: any) {
    this.selectedItem = itemName;
  }
}
