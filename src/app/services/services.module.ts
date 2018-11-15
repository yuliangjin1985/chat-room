import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegiterService } from 'src/app/services/regiter.service';
import { ChatServiceService } from './chat-service.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [],
  providers: [RegiterService, ChatServiceService],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ServicesModule { }
