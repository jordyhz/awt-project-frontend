import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Channel } from 'src/app/models/channel';
import { ChannelService } from 'src/app/services/channel.service';

@Component({
  selector: 'app-delete-channel',
  templateUrl: './delete-channel.component.html',
  styleUrls: ['./delete-channel.component.scss'],
})
export class DeleteChannelComponent implements OnInit {
  channel!: Channel;
  userToken = sessionStorage.getItem('user');

  constructor(
    public dialogRef: MatDialogRef<DeleteChannelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private channelService: ChannelService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.channel = this.data.channel;
  }

  deleteD() {
    this.channelService
      .deleteChannel(this.userToken, this.channel._id)
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
