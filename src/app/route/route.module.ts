import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { RegistrationViewComponent } from '../chat/registration-view/registration-view.component';
import { ChatViewComponent } from '../chat/chat-view/chat-view.component';

const routes: Routes = [
  {path: 'register', component: RegistrationViewComponent},
  {path: 'chat', component: ChatViewComponent}
];

@NgModule({
  declarations: [],
  exports: [RouterModule],

  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class RouteModule { }
