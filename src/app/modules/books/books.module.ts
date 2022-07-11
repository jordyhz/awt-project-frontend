import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BooksLibraryComponent } from 'src/app/pages/books-library/books-library.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    RouterModule.forChild([{ path: '', component: BooksLibraryComponent }]),
  ],
})
export class BooksModule {}
