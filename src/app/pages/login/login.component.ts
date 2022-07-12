import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Socket, io } from 'socket.io-client';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email!: String;
  password!: String;

  constructor(
    private authenticationApi: AuthenticationService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  login() {
    let data = {
      email: this.email,
      password: this.password,
    };

    this.authenticationApi
      .login$(data)
      .then((response: any) => {
        console.log(response);
        if (response.status === 'ok') {
          let newUser = {
            id: response._id,
            token: response.token,
            firstName: response.firstName,
            lastName: response.lastName,
          };
          sessionStorage.setItem('user', newUser.token);
          sessionStorage.setItem('userId', newUser.id);
          sessionStorage.setItem('userFn', newUser.firstName);
          sessionStorage.setItem('userLn', newUser.lastName);
          window.location.replace('/home');
        } else if (response.status === 'error') {
          this.toastr.error(response.error, 'Login Error', {
            timeOut: 2500,
          });
        }
      })
      .catch((e) => {
        console.log(e);
        this.toastr.error('Something went wrong', 'Login Error', {
          timeOut: 2500,
        });
      });
  }
}
