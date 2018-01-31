import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from "../services/authentication.service";

@Injectable()
export class CanActivateViaAuthGuardBooking implements CanActivate {

  constructor(private authService: AuthenticationService,
              private router: Router) {}

  canActivate() {
    if (this.authService.isLoggedIn()) {
        if (this.authService.hasFilmSelected()) {
          return true;
        } else {
          this.router.navigateByUrl('/home');
          return false;
        }
    }
    else {
        this.router.navigateByUrl('/login');
        return false;
    }
  }
}
