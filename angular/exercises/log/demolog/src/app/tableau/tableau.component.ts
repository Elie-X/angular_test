import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { ILogEvent } from '../model/logEvent';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {

  @Input() logs_to_child!: ILogEvent[]
  timer_handler: any;

  constructor(
    private change_detect: ChangeDetectorRef
  ) { 
    this.timer_handler = setInterval(
      () => {
        this.change_detect.markForCheck()
      }, 1000
    )
  }

  ngOnInit(): void {
  }

  plusVieuxque1Min(date: Date): boolean {
    const current_date= new Date();
    
    return (current_date.getTime() - date.getTime() > 60000)
  }

}
