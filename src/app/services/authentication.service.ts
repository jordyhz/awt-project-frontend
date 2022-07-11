import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  getHttpOptions() {
    const myHttpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    };

    return myHttpOptions;
  }

  getHttpOptions2(auth_token: String) {
    const myHttpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${auth_token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    };

    return myHttpOptions;
  }

  register(data: any) {
    return this.http.post(
      'https://powerful-plains-83584.herokuapp.com/api/register',
      data,
      this.getHttpOptions()
    );
  }

  register$(data: any) {
    return this.register(data).toPromise();
  }

  login(data: any) {
    return this.http.post(
      'https://powerful-plains-83584.herokuapp.com/api/login',
      data,
      this.getHttpOptions()
    );
  }

  login$(data: any) {
    return this.login(data).toPromise();
  }

  getUserInfo(auth_token: any) {
    return this.http
      .get(
        'https://powerful-plains-83584.herokuapp.com/api/getUserInfo',
        this.getHttpOptions2(auth_token)
      )
      .toPromise();
  }
}
