import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { BooksLibraryComponent } from './pages/books-library/books-library.component';
import { VideosLibraryComponent } from './pages/videos-library/videos-library.component';
import { AllChannelsComponent } from './pages/all-channels/all-channels.component';
import { MyChannelsComponent } from './pages/my-channels/my-channels.component';
@NgModule({
  declarations: [AppComponent, NavigationComponent, FooterComponent, BooksLibraryComponent, VideosLibraryComponent, AllChannelsComponent, MyChannelsComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
