import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChatRoomComponent } from 'src/app/pages/chat-room/chat-room.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ChatRoomComponent }]),
  ],
})
export class ChatRoomModule {}
