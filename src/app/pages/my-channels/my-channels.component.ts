import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChannelDialogComponent } from 'src/app/components/channel-dialog/channel-dialog.component';
import { DeleteChannelComponent } from 'src/app/components/delete-channel/delete-channel.component';
import { LeaveChannelComponent } from 'src/app/components/leave-channel/leave-channel.component';
import { Channel } from 'src/app/models/channel';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ChannelService } from 'src/app/services/channel.service';

@Component({
  selector: 'app-my-channels',
  templateUrl: './my-channels.component.html',
  styleUrls: ['./my-channels.component.scss'],
})
export class MyChannelsComponent implements OnInit {
  userToken = sessionStorage.getItem('user');
  channels: Channel[] = [];
  user!: User;

  constructor(
    public dialog: MatDialog,
    private channelService: ChannelService,
    private authenticationApi: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.userToken) {
      this.getUserInfo();
      setTimeout(() => {
        this.getUserChannels();
      }, 500);
    } else {
      this.router.navigate(['/login']);
    }
  }

  getUserChannels() {
    this.channelService
      .getAllChannels(this.userToken)
      .then((resp: any) => {
        let rooms: Channel[] = resp.rooms;
        if (this.user.joinedRooms.length > 0) {
          this.compare(rooms, this.user.joinedRooms);
        } else {
          this.channels = [];
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  compare(arr1: any[], arr2: any[]) {
    arr1.forEach((a: Channel, i) => {
      arr2.forEach((b: any) => {
        if (a._id === b._id) {
          this.channels[i] = a;
        }
      });
    });
  }

  isCreator(channel: Channel): boolean {
    if (channel.creator === this.user._id) {
      return true;
    } else {
      return false;
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

  createChannel() {
    const dialogRef = this.dialog.open(ChannelDialogComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.getUserInfo();
      setTimeout(() => {
        this.getUserChannels();
      }, 500);
    });
  }

  leaveChannel(channel: any) {
    const dialogRef = this.dialog.open(LeaveChannelComponent, {
      width: '500px',
      data: {
        channel: channel,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.channels.forEach((chann, i) => {
          if (chann._id === channel._id) {
            this.channels.splice(i, 1);
          }
        });
      }
    });
  }

  deleteChannel(channel: Channel) {
    const dialogRef = this.dialog.open(DeleteChannelComponent, {
      width: '500px',
      data: {
        channel: channel,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.channels.forEach((chann, i) => {
          if (chann._id === channel._id) {
            this.channels.splice(i, 1);
          }
        });
      }
    });
  }

  goToChannel(channel: Channel) {
    this.router.navigate(['my-channels/' + channel._id]);
  }
}
