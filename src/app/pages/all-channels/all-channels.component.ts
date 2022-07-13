import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Channel } from 'src/app/models/channel';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ChannelService } from 'src/app/services/channel.service';

@Component({
  selector: 'app-all-channels',
  templateUrl: './all-channels.component.html',
  styleUrls: ['./all-channels.component.scss'],
})
export class AllChannelsComponent implements OnInit {
  channels: Channel[] = [];
  _channels: Channel[] = [];
  userToken = sessionStorage.getItem('user');
  user!: User;
  keyword = '';

  constructor(
    private channelService: ChannelService,
    private authenticationApi: AuthenticationService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    if (this.userToken) {
      this.getUserInfo();
      setTimeout(() => {
        this.getAllChannels();
      }, 500);
    } else {
      this.router.navigate(['/login']);
    }
  }

  getAllChannels() {
    this.channelService
      .getAllChannels(this.userToken)
      .then((resp: any) => {
        let rooms: Channel[] = resp.rooms;
        if (this.user.joinedRooms.length > 0) {
          this.compare(rooms, this.user.joinedRooms);
        } else {
          this.channels = resp.rooms;
          this._channels = this.channels;
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  compare(arr1: any[], arr2: any[]) {
    let arr3: Channel[] = [];

    arr1.forEach((a: Channel) => {
      arr2.forEach((b: any) => {
        if (a._id === b._id) {
          arr3.push(a);
        }
      });
    });

    this.channels = arr1.filter((x) => !arr3.includes(x));
    this._channels = this.channels;
  }

  search() {
    if (this.keyword === '') {
      this._channels = this.channels;
    } else if (this.keyword !== '') {
      this._channels = [];
      this.channels.forEach((ch) => {
        if (ch.title?.toLowerCase().includes(this.keyword.toLowerCase())) {
          this._channels.push(ch);
        }
      });
    }
  }

  getUserInfo() {
    this.authenticationApi
      .getUserInfo(this.userToken)
      .then((Response: any) => {
        this.user = Response.user;
      })
      .catch((e) => {
        console.log(e);
      });
  }

  joinChannel(channel: Channel) {
    const data: any = {
      roomId: channel._id,
    };
    this.channelService
      .joinChannel(this.userToken, data)
      .then((response) => {
        console.log(response);
        this.toastr.success('Channel joined successfully', 'Success', {
          timeOut: 2500,
        });
        this.router.navigate(['/my-channels']);
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
