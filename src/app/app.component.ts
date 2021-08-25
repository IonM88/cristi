import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./services/auth.service";
import {Role} from "./models/role";
import {User} from "./models/User";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentUser: User

  constructor(private authService: AuthService, private router: Router) {
  }


  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin
  }

  logOut() {
    this.authService.logOut()
  }

}
