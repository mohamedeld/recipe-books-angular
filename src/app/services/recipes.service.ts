import { EventEmitter, Injectable } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';

import { Recipe } from '../recipes/recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  constructor(private shoppingService: ShoppingListService) {}
  private recipes = [
    new Recipe(
      uuidv4(),
      'First image',
      'welcome in angular world',
      'https://picsum.photos/200/300',
      [new Ingredient('meats', 10), new Ingredient('milk', 5)]
    ),
    new Recipe(
      uuidv4(),
      'second image',
      'it was very awesome framework but react is more',
      'https://picsum.photos/200/300',
      [new Ingredient('meats', 10), new Ingredient('milk', 5)]
    ),
  ];
  recipe: Recipe = new Recipe('', '', '', '', []);
  getRecipes() {
    return this.recipes.slice();
  }
  addSelectedRecipeToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }
  getRecipe(id: string) {
    return this.recipes.find((item) => item.id === id);
  }
}
