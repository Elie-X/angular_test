import { Component, OnInit } from '@angular/core';
import { Recette } from 'src/app/model/recette';

@Component({
  selector: 'app-liste-recette',
  templateUrl: './liste-recette.component.html',
  styleUrls: ['./liste-recette.component.css']
})
export class ListeRecetteComponent implements OnInit {

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

  ngOnInit(): void {
  }

}
