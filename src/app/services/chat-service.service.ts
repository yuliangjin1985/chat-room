import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Chat } from '../chat/models/chat.model';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  readonly getChatMessageApiUri = environment.getChatMessageApiUri;//Environment variable
  readonly setChatMessageApiUri = environment.setChatMessageApiUri;//Environment variable

  private chats: BehaviorSubject<Chat[]>;
  public chats$: Observable<Chat[]>;

  constructor(private http: HttpClient) { 
    this.chats = new BehaviorSubject<Chat[]>([]);
    this.chats$ = this.chats.asObservable();
  }

  public getChats(chatRoom: string): void {
    this.http.get<Chat[]>(`${this.getChatMessageApiUri}?room=${chatRoom}`).toPromise().then(chats => {
      this.chats.next(chats);
      console.log('Success getting chat', chats);
    }).catch(reason => {
      console.log('Error getting chats', reason);
    });
    console.log("After invoke call for data: ", this.chats);
  } 

  public addChat(chatMessage: Chat): void {
    console.log("Add chat: ", chatMessage);
    this.http.post(this.setChatMessageApiUri, chatMessage).toPromise()
    .then(a => {
      console.log('Add Chat Service', a);
      this.getChats(chatMessage.chatRoom);//get chat lists
    }).catch(reason => {
      console.log('Error for addChat', reason);
    });
  }
}
