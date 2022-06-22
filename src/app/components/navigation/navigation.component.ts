import { Component, OnInit } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {
    this.home = true;
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
}
