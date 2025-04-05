import { animate, style, transition, trigger } from '@angular/animations';
import { Component, HostListener , OnInit} from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router : Router) { }
  ngOnInit(): void {
      this.checkAutherization()
  }
  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }


  checkAutherization(){
    const token = localStorage.getItem('token');
    if(token == null || !token){
      this.isLoggedIn = false
    }else{
      this.isLoggedIn = true
    }
  }
  logout() {
    localStorage.removeItem('token')
    this.isLoggedIn = false
  }

  login(){
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
