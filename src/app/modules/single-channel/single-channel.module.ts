import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SingleChannelComponent } from 'src/app/pages/single-channel/single-channel.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    RouterModule.forChild([{ path: '', component: SingleChannelComponent }]),
  ],
})
export class SingleChannelModule {}
