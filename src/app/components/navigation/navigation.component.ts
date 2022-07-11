import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  login = false;
  register = false;
  home = false;
  channels = false;
  books = false;
  videos = false;
  userToken = sessionStorage.getItem('user');
  loggedIn = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.userToken) {
      this.loggedIn = true;
    }
  }

  ngOnChanges() {
    this.userToken = JSON.stringify(sessionStorage.getItem('user'));
    if (this.userToken !== null || this.userToken !== '') {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  homeActive() {
    this.home = true;
    this.register = false;
    this.login = false;
    this.channels = false;
    this.books = false;
    this.videos = false;
  }
  loginActive() {
    this.home = false;
    this.register = false;
    this.login = true;
    this.channels = false;
    this.books = false;
    this.videos = false;
  }
  registerActive() {
    this.home = false;
    this.register = true;
    this.login = false;
    this.channels = false;
    this.books = false;
    this.videos = false;
  }
  booksActive() {
    this.home = false;
    this.register = false;
    this.login = false;
    this.channels = false;
    this.books = true;
    this.videos = false;
  }
  videosActive() {
    this.home = false;
    this.register = false;
    this.login = false;
    this.channels = false;
    this.books = false;
    this.videos = true;
  }
  channelsActive() {
    this.home = false;
    this.register = false;
    this.login = false;
    this.channels = true;
    this.books = false;
    this.videos = false;
  }

  logout() {
    sessionStorage.removeItem('user');
    this.loggedIn = false;
    this.userToken = '';
    console.log(this.userToken);

    this.router.navigate(['/home']);
  }
}
