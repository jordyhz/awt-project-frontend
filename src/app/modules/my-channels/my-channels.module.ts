import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MyChannelsComponent } from 'src/app/pages/my-channels/my-channels.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    RouterModule.forChild([{ path: '', component: MyChannelsComponent }]),
  ],
})
export class MyChannelsModule {}
