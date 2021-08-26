import {Injectable} from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from "@angular/router";
import {AuthService} from "./auth.service";
import {Role} from "../models/role";
import {User} from "../models/User";
import {Token} from "@angular/compiler";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private auth: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.auth.isLoggedIn()) {
      const userRole = this.auth.getRole()
      if (route.data.role && route.data.role.indexOf(userRole) === -1) {
        this.router.navigate(['login'])
        return false
      }
      return true
    }
    this.router.navigate(['login'])
    return false
  }


}

