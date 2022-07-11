import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ShareContentComponent } from 'src/app/components/share-content/share-content.component';
import { VideoDialogComponent } from 'src/app/components/video-dialog/video-dialog.component';

@Component({
  selector: 'app-videos-library',
  templateUrl: './videos-library.component.html',
  styleUrls: ['./videos-library.component.scss'],
})
export class VideosLibraryComponent implements OnInit {
  search: any = {
    keyword: '',
    channelId: '',
    type: '',
    maxResults: '5',
  };
  userToken = sessionStorage.getItem('user');
  response: any = {};

  constructor(
    private sanitizer: DomSanitizer,
    private http: HttpClient,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.userToken) {
      this.router.navigate(['/login']);
    }
  }

  searchYT() {
    let url = 'https://youtube.googleapis.com/youtube/v3/search';

    let urlParams = new HttpParams()
      .set('part', 'snippet')
      .set('key', 'AIzaSyBiOlaEySl5mqX3L8LXXf5AXejeVkHnvrY')
      .set('q', this.search.keyword)
      .set('type', this.search.type)
      .set('channelId', this.search.channelId)
      .set('maxResults', this.search.maxResults);

    const options = { params: urlParams };

    this.http.get<any>(url, options).subscribe(
      (data) => {
        this.response = data;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  openVideo(video: String) {
    this.dialog.open(VideoDialogComponent, {
      width: '900px',
      data: {
        video: video,
      },
    });
  }

  share(video: any) {
    this.dialog.open(ShareContentComponent, {
      width: '500px',
      data: {
        video: video,
        book: null,
      },
    });
  }
}
