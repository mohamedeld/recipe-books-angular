import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipesService } from 'src/app/services/recipes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent implements OnInit {
  recipe: Recipe = new Recipe('', '', '', '', []);
  recipes: Recipe[] = [];
  constructor(private recipeService: RecipesService, private router: Router) {}
  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
  goToAddRecipe() {
    this.router.navigate(['/recipes/new']);
  }
}
