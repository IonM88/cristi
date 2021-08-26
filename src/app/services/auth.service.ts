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


  login(value: string) {
    this.isLogin = true
    this.roleAs = value
    localStorage.setItem('role', this.roleAs)
    this.router.navigate(['admin'])
  }

  logOut() {
    this.router.navigate(['login'])
  }

  isLoggedIn() {
    const loggedIn = localStorage.getItem('state')
    if (loggedIn === 'true') {
      this.isLogin = true
    } else {
      this.isLogin = false
      return this.isLogin
    }
  }

  getRole() {
    this.roleAs = localStorage.getItem('role');
    return this.roleAs;
  }

}

