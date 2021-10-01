import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginController } from 'src/core/login-controller';
import { User } from 'src/core/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginController: LoginController) { }
  user: User = new User();
  ngOnInit(): void {
  }

  login() {
    this.loginController.loginUser(this.user, (res) => {
      if (this.loginController.role === 'admin') {
        this.router.navigate(['product/list']);
      } else {
        this.router.navigate(['category/list']);
      }
    }, error => {

    });
  }

  inValidName() {
    return this.user.username === 'admin' || this.user.username === 'user';
  }

  inValidPassword() {
    return this.user.password === 'admin' || this.user.password === 'user';

  }

}
