import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ChannelService } from 'src/app/services/channel.service';

@Component({
  selector: 'app-channel-dialog',
  templateUrl: './channel-dialog.component.html',
  styleUrls: ['./channel-dialog.component.scss'],
})
export class ChannelDialogComponent implements OnInit {
  name!: String;
  description!: String;
  userId = sessionStorage.getItem('userId');
  userToken = sessionStorage.getItem('user');

  constructor(
    public dialogRef: MatDialogRef<ChannelDialogComponent>,
    private channelService: ChannelService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  submit() {
    let data = {
      title: this.name,
      description: this.description,
      creator: this.userId,
    };

    this.channelService
      .createChannel$(data, this.userToken)
      .then((response: any) => {
        if ((response.status = 201)) {
          this.toastr.success('Channel created successfully', 'Success', {
            timeOut: 2500,
          });
          this.dialogRef.close();
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
