import {
    CanActivate, Router,
    ActivatedRouteSnapshot, // contains the future route that will be activated
    RouterStateSnapshot     // contains the future RouterState of our application
    }                           from '@angular/router';

import { Injectable }       from '@angular/core';
import { AuthService }      from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService:AuthService, private router:Router) {
    }

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):boolean {
        let url:string = state.url;

        return this.checkLogin(url);
    }

    checkLogin(url:string):boolean {
        if (this.authService.isLoggedIn) {
            return true;
        }

        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url;

        // Navigate to the login page with extras
        this.router.navigate(['/login']);

        return true;
    }
}