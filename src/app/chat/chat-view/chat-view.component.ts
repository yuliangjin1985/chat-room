import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatServiceService } from 'src/app/services/chat-service.service';
import { RegiterService } from 'src/app/services/regiter.service';
import { Subscription } from 'rxjs';
import { Chat } from '../models/chat.model';

@Component({
  selector: 'app-chat-view',
  templateUrl: './chat-view.component.html',
  styleUrls: ['./chat-view.component.css']
})
export class ChatViewComponent implements OnInit, OnDestroy {

  constructor(private service: ChatServiceService, private service2: RegiterService) { }

  chatMessages = [];
  chatSub: Subscription;
  registeredChatRoom: string;
  regSub: Subscription;

  chatMessage: Chat = {};
  screenName: string = "";

  ngOnInit() {
    this.chatSub = this.service.chats$.subscribe(chats => {
      this.chatMessages = chats;
    });

    this.regSub = this.service2.registration$.subscribe(reg => {
      this.registeredChatRoom = reg.selectedChatRoom;
      this.screenName = reg.screenName;
    });

    
  }

  ngOnDestroy() {
    this.chatSub.unsubscribe();
    this.regSub.unsubscribe;

  }

  refreshChats() {
    this.service.getChats(this.registeredChatRoom);
  }

  addMessage() {
    console.log("New message: ", this.chatMessage);
    this.chatMessage = {...this.chatMessage,
    timestamp: new Date(),
    screenName: this.screenName,
    chatRoom: this.registeredChatRoom
  };
    this.service.addChat(this.chatMessage);
  }
}
