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
      linkedin:
        'https://www.linkedin.com/in/jordy-hendrix-zeufack-assongmo-47b0a11b5',
    },
    {
      name: 'Arsalan Harouni',
      linkedin:
        'https://www.linkedin.com/in/jordy-hendrix-zeufack-assongmo-47b0a11b5/',
    },
    {
      name: 'Nicodemus Aprianto',
      linkedin:
        'https://www.linkedin.com/in/jordy-hendrix-zeufack-assongmo-47b0a11b5/',
    },
    {
      name: 'Yuning Zhou',
      linkedin:
        'https://www.linkedin.com/in/jordy-hendrix-zeufack-assongmo-47b0a11b5/',
    },
    {
      name: 'Xueyao Ma',
      linkedin:
        'https://www.linkedin.com/in/jordy-hendrix-zeufack-assongmo-47b0a11b5/',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
