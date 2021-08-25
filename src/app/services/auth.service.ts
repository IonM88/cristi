import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = false
  roleAs: string

  constructor(private router: Router,
              private http: HttpClient) {
    localStorage.getItem('currentUser')
  }


  login(password) {
    localStorage.setItem('token','dasdasdasdkaf')
    this.router.navigate(['admin'])
  }

  logOut() {
    localStorage.removeItem('role')
    this.router.navigate(['login'])
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null
  }

  getRole() {
    this.roleAs = localStorage.getItem('role');
    return this.roleAs;
  }

}

