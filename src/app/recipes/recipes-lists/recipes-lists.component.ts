import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-lists',
  templateUrl: './recipes-lists.component.html',
  styleUrls: ['./recipes-lists.component.css'],
})
export class RecipesListsComponent implements OnInit {
  recips: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'A Test Recipe Description',
      'https://cdn.pixabay.com/photo/2020/05/11/21/57/bake-5160388_960_720.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
