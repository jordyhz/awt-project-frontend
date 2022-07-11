import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  public socket: Socket;

  constructor() {
    this.socket = io('https://powerful-plains-83584.herokuapp.com/');
  }
}
