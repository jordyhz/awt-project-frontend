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
      linkedIn:
        'https://www.linkedin.com/in/jordy-hendrix-zeufack-assongmo-47b0a11b5',
      picture: '../../../assets/images/jordy.jpeg',
    },
    {
      name: 'Arsalan Harouni',
      linkedIn: 'https://www.linkedin.com/in/arsalan-harouni-73a86a1ab',
      picture: '../../../assets/images/arsalan.jpeg',
    },
    {
      name: 'Nicodemus Aprianto',
      linkedIn: 'https://www.linkedin.com/in/nicodemus-aprianto-9a61144b/',
      picture: '../../../assets/images/nico.png',
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
