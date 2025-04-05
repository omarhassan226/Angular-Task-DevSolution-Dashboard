import { animate, style, transition, trigger } from '@angular/animations';
import {
  Component,
  HostListener,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
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
export class AppComponent implements OnInit {
  title = 'Dev_Solution_Dashboard';

  isSidebarOpen = window.innerWidth > 750;
  isDropdownOpen = false;
  messageNotify = false;
  selectedItem = 'dashboard';
  isLoggedIn = false;
  showLayout = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const noLayoutRoutes = ['/user-management/login'];
        this.showLayout = !noLayoutRoutes.includes(event.urlAfterRedirects);
      });
  }

  ngOnInit(): void {}

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
    this.router.navigate(['/user-management/login']);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isSidebarOpen = event.target.innerWidth > 750;
  }

  sidebarItemSelection(itemName: any) {
    this.selectedItem = itemName;
  }
}
