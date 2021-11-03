import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ILogEvent } from './model/logEvent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demolog';
  logs: ILogEvent[] = [];


  recoitMessage(event: ILogEvent): void {
    this.logs.push(event);
    console.log(this.logs);
  }
}
