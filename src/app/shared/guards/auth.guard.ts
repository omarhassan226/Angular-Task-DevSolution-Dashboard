import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../../core/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const isLoginRoute = state.url.includes('/user-management/login');

    if (this.userService.isLoggedIn()) {
      if (isLoginRoute) {
        // If user is logged in but tries to access login page, redirect to dashboard
        this.router.navigate(['/dashboard']);
        return false;
      }
      return true;
    } else {
      if (!isLoginRoute) {
        // If user is not logged in and tries to access any page except login, redirect to login
        this.router.navigate(['/user-management/login']);
        return false;
      }
      return true;
    }
  }
}
