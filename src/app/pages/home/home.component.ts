import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  userToken = sessionStorage.getItem('user');

  teams: any = [
    {
      name: 'Jordy Zeufack',
    },
    {
      name: 'Arsalan Harouni',
    },
    {
      name: 'Nicodemus Aprianto',
    },
    {
      name: 'Yuning Zhou',
    },
    {
      name: 'Xueyao Ma',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
