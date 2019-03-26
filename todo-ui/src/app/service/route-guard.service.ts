import { Injectable } from '@angular/core';
import {CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router} from "@angular/router";
import {HardcodedAuthenticationService} from "./hardcoded-authentication.service";
import {BasicAuthenticationService} from "./basic-authentication.service";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{

  constructor(
    private hardcodedAuthenticationService : HardcodedAuthenticationService,
    private basicAuthenticationService : BasicAuthenticationService,
    private router: Router

  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    // if (this.hardcodedAuthenticationService.isUserLoggedIn())
    if (this.basicAuthenticationService.isUserLoggedIn())
      return true;

    // if not logged in
    this.router.navigate(['login']);
    return false;
  }

}
