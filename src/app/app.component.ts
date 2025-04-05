import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [
    trigger('dropdownAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate(
          '200ms ease-in-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '150ms ease-in',
          style({ opacity: 0, transform: 'translateY(-10px)' })
        ),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'Dev_Solution_Dashboard';

  isSidebarOpen = window.innerWidth > 750;
  isDropdownOpen = false;
  messageNotify = false;
  selectedItem = 'dashboard';

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout() {
    console.log('User logged out');
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isSidebarOpen = event.target.innerWidth > 750;
  }

  sidebarItemSelection(itemName: any) {
    this.selectedItem = itemName;
  }
}
