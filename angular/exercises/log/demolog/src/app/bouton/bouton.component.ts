import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ILogEvent } from '../model/logEvent';

@Component({
  selector: 'app-bouton',
  templateUrl: './bouton.component.html',
  styleUrls: ['./bouton.component.css']
})
export class BoutonComponent implements OnInit {

  message = '';

  @Output() message_parent = new EventEmitter<ILogEvent>()

  constructor() { }

  ngOnInit(): void {
  }

  sendToParent(): void {
    console.log(this.message);
    this.message_parent.emit(
      {
        date: new Date(),
        message: this.message
      }
    )
    this.message = ''
  }

  getTime(): string {
    const ctime=new Date();
    return ctime.toLocaleTimeString();
  }

}
