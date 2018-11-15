import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Registration } from '../chat/models/registration.model';

@Injectable()
export class RegiterService {
  private registration: BehaviorSubject<Registration>;
  public registration$: Observable<Registration>;

  constructor() {
    this.registration = new BehaviorSubject<Registration>({screenName: ''});
    this.registration$ = this.registration.asObservable();
   }

   //Non't need to return anything, client can get info from observable
   addRegistration(reg: Registration): void {
    this.registration.next({...reg});
   }
}
