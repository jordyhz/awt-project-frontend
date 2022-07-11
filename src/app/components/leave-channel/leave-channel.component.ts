import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Channel } from 'src/app/models/channel';
import { ChannelService } from 'src/app/services/channel.service';

@Component({
  selector: 'app-leave-channel',
  templateUrl: './leave-channel.component.html',
  styleUrls: ['./leave-channel.component.scss'],
})
export class LeaveChannelComponent implements OnInit {
  channel!: Channel;
  userToken = sessionStorage.getItem('user');

  constructor(
    public dialogRef: MatDialogRef<LeaveChannelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private channelService: ChannelService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.channel = this.data.channel;
  }

  leave() {
    let data = {
      roomId: this.channel._id,
    };
    this.channelService
      .leaveChannel(this.userToken, data)
      .then((resp: any) => {
        if (resp.status === 'success') {
          this.dialogRef.close('yes');
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  close() {
    this.dialogRef.close();
  }
}
