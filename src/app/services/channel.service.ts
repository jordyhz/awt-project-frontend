import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Video } from '../models/video';

@Injectable({
  providedIn: 'root',
})
export class ChannelService {
  constructor(private http: HttpClient) {}

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

  getHttpOptions3(auth_token: String) {
    const myHttpOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${auth_token}`,
      }),
    };

    return myHttpOptions;
  }

  createChannel(data: any, auth_token: any) {
    return this.http.post(
      'https://powerful-plains-83584.herokuapp.com/api/createRoom',
      data,
      this.getHttpOptions2(auth_token)
    );
  }

  createChannel$(data: any, auth_token: any) {
    return this.createChannel(data, auth_token).toPromise();
  }

  getAllChannels(auth_token: any) {
    return this.http
      .get(
        'https://powerful-plains-83584.herokuapp.com/api/getRooms',
        this.getHttpOptions2(auth_token)
      )
      .toPromise();
  }

  joinChannel(auth_token: any, data: any) {
    return this.http
      .put(
        'https://powerful-plains-83584.herokuapp.com/api/joinRoom',
        data,
        this.getHttpOptions3(auth_token)
      )
      .toPromise();
  }

  leaveChannel(auth_token: any, data: any) {
    return this.http
      .put(
        'https://powerful-plains-83584.herokuapp.com/api/leaveRoom',
        data,
        this.getHttpOptions3(auth_token)
      )
      .toPromise();
  }

  deleteChannel(auth_token: any, id: any) {
    return this.http
      .delete(
        'https://powerful-plains-83584.herokuapp.com/api/deleteRoom?roomId=' +
          id,
        this.getHttpOptions3(auth_token)
      )
      .toPromise();
  }

  shareVideo(auth_token: any, data: any) {
    return this.http
      .post(
        'https://powerful-plains-83584.herokuapp.com/api/shareVideo',
        data,
        this.getHttpOptions3(auth_token)
      )
      .toPromise();
  }

  shareBook(auth_token: any, data: any) {
    return this.http
      .post(
        'https://powerful-plains-83584.herokuapp.com/api/shareBook',
        data,
        this.getHttpOptions3(auth_token)
      )
      .toPromise();
  }

  postMessage(auth_token: any, data: any) {
    return this.http
      .post(
        'https://powerful-plains-83584.herokuapp.com/api/sendMessage',
        data,
        this.getHttpOptions3(auth_token)
      )
      .toPromise();
  }
}
