import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ShareContentComponent } from 'src/app/components/share-content/share-content.component';

@Component({
  selector: 'app-books-library',
  templateUrl: './books-library.component.html',
  styleUrls: ['./books-library.component.scss'],
})
export class BooksLibraryComponent implements OnInit {
  keyword = '';
  maxResults = '5';
  response: any = {};
  userToken = sessionStorage.getItem('user');

  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.userToken) {
      this.router.navigate(['/login']);
    }
  }

  searchBook() {
    let url = 'https://www.googleapis.com/books/v1/volumes?';
    let urlParams = new HttpParams()
      .set('q', this.keyword)
      .set('key', 'AIzaSyBiOlaEySl5mqX3L8LXXf5AXejeVkHnvrY')
      .set('maxResults', this.maxResults);

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

  openBook(url: any) {
    window.open(url, '_blank')?.focus();
  }

  share(book: any) {
    this.dialog.open(ShareContentComponent, {
      width: '500px',
      data: {
        video: null,
        book: book,
      },
    });
  }
}
