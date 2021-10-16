import { Component } from '@angular/core';
import { Recette } from './model/recette';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recettes: Recette[];

  constructor() {
    this.recettes = [
      new Recette(
        "Spaghetti a Didier1",
        "Ma fameuse soupe a spaggethi1",
        null,
        null,
        null),
      new Recette(
        "Spaghetti a Didier2",
        "Ma fameuse soupe a spaggethi2",
        null,
        null,
        null),
      new Recette(
        "Spaghetti a Didier3",
        "Ma fameuse soupe a spaggethi3",
        null,
        null,
        null),
        ]
  }
}
