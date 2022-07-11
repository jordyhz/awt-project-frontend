import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  email!: String;
  password!: String;
  firstName!: String;
  lastName!: String;

  constructor(
    private authenticationApi: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  submit() {
    let data = {
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      password: this.password,
    };

    this.authenticationApi
      .register$(data)
      .then((response) => {
        this.router.navigate(['/login']);
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
