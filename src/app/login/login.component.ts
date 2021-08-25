import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {Role} from "../models/role";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  role: Role

  constructor(
    private router: Router,
    private authService: AuthService,
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.formCreator()
  }

  formCreator() {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    })

  }

  get f() {
    return this.loginForm.controls
  }

  get isAdmin() {
    return this.loginForm.value.password === 'admin'
  }


  onSubmit() {
    if (this.loginForm.invalid) {
      return
    }
    this.authService.login(this.loginForm.value.pass)
  }


}
