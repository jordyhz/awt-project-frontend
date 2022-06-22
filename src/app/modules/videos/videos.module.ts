import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VideosLibraryComponent } from 'src/app/pages/videos-library/videos-library.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: VideosLibraryComponent }]),
  ],
})
export class VideosModule {}
