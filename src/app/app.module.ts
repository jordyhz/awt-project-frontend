import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { BooksLibraryComponent } from './pages/books-library/books-library.component';
import { VideosLibraryComponent } from './pages/videos-library/videos-library.component';
import { AllChannelsComponent } from './pages/all-channels/all-channels.component';
import { MyChannelsComponent } from './pages/my-channels/my-channels.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChannelDialogComponent } from './components/channel-dialog/channel-dialog.component';
import { ShareContentComponent } from './components/share-content/share-content.component';
import { DeleteChannelComponent } from './components/delete-channel/delete-channel.component';
import { LeaveChannelComponent } from './components/leave-channel/leave-channel.component';
import { SingleChannelComponent } from './pages/single-channel/single-channel.component';
import { VideoDialogComponent } from './components/video-dialog/video-dialog.component';
import { ChatRoomComponent } from './pages/chat-room/chat-room.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    BooksLibraryComponent,
    VideosLibraryComponent,
    AllChannelsComponent,
    MyChannelsComponent,
    ChannelDialogComponent,
    ShareContentComponent,
    DeleteChannelComponent,
    LeaveChannelComponent,
    SingleChannelComponent,
    VideoDialogComponent,
    ChatRoomComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
