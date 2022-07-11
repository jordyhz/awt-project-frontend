import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./modules/register/register.module').then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: 'books-library',
    loadChildren: () =>
      import('./modules/books/books.module').then((m) => m.BooksModule),
  },
  {
    path: 'videos-library',
    loadChildren: () =>
      import('./modules/videos/videos.module').then((m) => m.VideosModule),
  },
  {
    path: 'all-channels',
    loadChildren: () =>
      import('./modules/channels/channels.module').then(
        (m) => m.ChannelsModule
      ),
  },
  {
    path: 'my-channels',
    loadChildren: () =>
      import('./modules/my-channels/my-channels.module').then(
        (m) => m.MyChannelsModule
      ),
  },
  {
    path: 'my-channels/chatroom/:id',
    loadChildren: () =>
      import('./modules/chat-room/chat-room.module').then(
        (m) => m.ChatRoomModule
      ),
  },

  {
    path: 'my-channels/:id',
    loadChildren: () =>
      import('./modules/single-channel/single-channel.module').then(
        (m) => m.SingleChannelModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
