import { Component, OnInit, Input, Output, OnDestroy } from '@angular/core';
import { EventEmitter } from 'events';
import { Registration, availableChatRooms } from '../models/registration.model';
import { RegiterService } from 'src/app/services/regiter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-registration-view',
  templateUrl: './registration-view.component.html',
  styleUrls: ['./registration-view.component.css']
})
export class RegistrationViewComponent implements OnInit, OnDestroy {

  registration: Registration = {
    screenName: ''
  };

  constructor(private regService: RegiterService) {}

  templateChatRooms = availableChatRooms;

  regSubs: Subscription;

  ngOnInit() {
    this.regSubs = this.regService.registration$.subscribe(reg => {
        console.log('Reg sub: ', reg);
        this.registration = reg;
      });
  }

  ngOnDestroy() {
    this.regSubs.unsubscribe();
  }

  registerChatter() {
    console.log("Before: ", this.registration);
    this.regService.addRegistration(this.registration);
    console.log("For form submit, after: ", this.registration);
  };

  register() {
    console.log("For event!");

  };
}
