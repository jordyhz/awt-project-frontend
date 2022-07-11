import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-dialog',
  templateUrl: './video-dialog.component.html',
  styleUrls: ['./video-dialog.component.scss'],
})
export class VideoDialogComponent implements OnInit {
  video!: any;

  constructor(
    public dialogRef: MatDialogRef<VideoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.video = this.data.video;
    console.log(this.video);
  }

  getVidSrc(id: String): SafeResourceUrl {
    if (id != '') {
      const url = 'https://www.youtube.com/embed/' + id;
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    } else {
      return '';
    }
  }
}
