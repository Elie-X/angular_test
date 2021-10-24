import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  uneclass = [
    { nom: 'Brionna Ernser', note: 54 },
    { nom: 'Rowan Terry', note: 67 },
    { nom: 'Patricia Lehner', note: 45 },
    { nom: 'Jade Kohler ', note: 98 },
    { nom: 'Hattie Gleichner', note: 77 },
    { nom: 'Alycia Gusikowski', note: 67 },
    { nom: 'Travis Emmerich', note: 57 },
    { nom: 'Jena Wiegand', note: 60 },
    { nom: 'Vella Leffler', note: 66 },
    { nom: 'Marcelle Morissette', note: 65 },
    { nom: 'Allie Haley', note: 88 }
  ];

  moyenne=0;

  constructor() {
    this.moyenne = this.uneclass.reduce((curr,suiv) => curr + suiv.note, 0) / this.uneclass.length;
  }

  public moyenne_fixed(): string {
    return (this.moyenne).toFixed(2);
  }
  
  ngOnInit(): void {
  }

}
