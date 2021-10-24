import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styles: [
    `
    p {
      padding: 5px;
      background-color: lightgreen;
      border: 2px solid green;
  }
    `
  ]
})
export class SuccessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
