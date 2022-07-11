import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Channel } from 'src/app/models/channel';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ChannelService } from 'src/app/services/channel.service';

@Component({
  selector: 'app-share-content',
  templateUrl: './share-content.component.html',
  styleUrls: ['./share-content.component.scss'],
})
export class ShareContentComponent implements OnInit {
  name = '';
  userToken = sessionStorage.getItem('user');
  channels: Channel[] = [];
  user!: User;
  _video: any;
  _book: any;

  constructor(
    public dialogRef: MatDialogRef<ShareContentComponent>,
    private channelService: ChannelService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authenticationApi: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._video = this.data.video;
    this._book = this.data.book;

    this.getUserInfo();
    setTimeout(() => {
      this.getUserChannels();
    }, 500);
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
    arr1.forEach((a: Channel) => {
      arr2.forEach((b: any) => {
        if (a._id === b._id) {
          this.channels.push(a);
        }
      });
    });
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

  submit() {
    if (this._video) {
      let data = {
        roomId: this.name,
        videoId: this._video.id.videoId,
        videoTitle: this._video.snippet.title,
        videoKind: this._video.id.kind,
        videoThumbnail: this._video.snippet.thumbnails.high.url,
      };

      this.channelService
        .shareVideo(this.userToken, data)
        .then((response: any) => {
          this.dialogRef.close();
        })
        .catch((e) => {
          console.log(e);
        });
    } else if (this._book) {
      let data = {
        roomId: this.name,
        bookImageLink: this._book.volumeInfo.imageLinks ? 'link' : '',
        bookThumbnail: this._book.volumeInfo.imageLinks
          ? this._book.volumeInfo.imageLinks.thumbnail
          : '',
        bookTitle: this._book.volumeInfo.title,
        bookPreviewLink: this._book.volumeInfo.previewLink,
        bookAuthors: this._book.volumeInfo.authors,
      };

      this.channelService
        .shareBook(this.userToken, data)
        .then((response: any) => {
          this.dialogRef.close();
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }
}
