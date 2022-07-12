import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { VideoDialogComponent } from 'src/app/components/video-dialog/video-dialog.component';
import { Book } from 'src/app/models/book';
import { Channel } from 'src/app/models/channel';
import { Video } from 'src/app/models/video';
import { ChannelService } from 'src/app/services/channel.service';

@Component({
  selector: 'app-single-channel',
  templateUrl: './single-channel.component.html',
  styleUrls: ['./single-channel.component.scss'],
})
export class SingleChannelComponent implements OnInit {
  id = this.route.snapshot.paramMap.get('id');
  userToken = sessionStorage.getItem('user');
  channel!: Channel;
  keyword = '';
  books: Book[] = [];
  videos: Video[] = [];
  searchType = '';

  constructor(
    private route: ActivatedRoute,
    private channelService: ChannelService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (this.userToken) {
      this.getUserChannel();
    } else {
      this.router.navigate(['/login']);
    }
  }

  getUserChannel() {
    this.channelService
      .getAllChannels(this.userToken)
      .then((resp: any) => {
        let rooms: Channel[] = resp.rooms;
        rooms.forEach((ch) => {
          if (ch._id === this.id) {
            this.channel = ch;
            this.books = this.channel.books;
            this.videos = this.channel.videos;
          }
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  openVideo(video: String) {
    this.dialog.open(VideoDialogComponent, {
      width: '900px',
      data: {
        video: video,
      },
    });
  }

  openBook(url: any) {
    window.open(url, '_blank')?.focus();
  }

  goToChat() {
    this.router.navigate(['my-channels/chatroom/' + this.id]);
  }

  search() {
    if (this.keyword === '') {
      this.videos = this.channel.videos;
      this.books = this.channel.books;
    } else if (this.keyword) {
      if (this.searchType === 'video') {
        this.videos = [];
        this.channel.videos.forEach((vid) => {
          if (
            vid.videoTitle.toLowerCase().includes(this.keyword.toLowerCase())
          ) {
            this.videos.push(vid);
          }
        });
      } else if (this.searchType === 'book') {
        this.books = [];
        this.channel.books.forEach((book) => {
          if (
            book.bookTitle.toLowerCase().includes(this.keyword.toLowerCase())
          ) {
            this.books.push(book);
          }
        });
      }
    }
  }
}
