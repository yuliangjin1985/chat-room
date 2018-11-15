import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationViewComponent } from './registration-view/registration-view.component';
import { ChatViewComponent } from './chat-view/chat-view.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ServicesModule } from '../services/services.module';
import { ConversionComponent } from './conversion/conversion.component';

@NgModule({
  declarations: [RegistrationViewComponent, ChatViewComponent, ConversionComponent],
  exports: [RegistrationViewComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ServicesModule
  ]
})
export class ChatModule { }
