import { Component, OnInit, Input } from '@angular/core';
import { Chat } from '../models/chat.model';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.css']
})
export class ConversionComponent implements OnInit {

  @Input() messages: Chat[];

  constructor() { }

  ngOnInit() {
  }

}
