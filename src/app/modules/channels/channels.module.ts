import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AllChannelsComponent } from 'src/app/pages/all-channels/all-channels.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: AllChannelsComponent }]),
  ]
})
export class ChannelsModule { }
