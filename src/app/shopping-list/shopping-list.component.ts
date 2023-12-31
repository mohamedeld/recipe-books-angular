import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  ingredientSubscription: Subscription | undefined;
  constructor(private shoppingService: ShoppingListService) {}
  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.ingredientSubscription =
      this.shoppingService.ingredientChanged.subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }
  onEditItem(index: number) {
    this.shoppingService.startEditing.next(index);
  }
  ngOnDestroy(): void {
    this.ingredientSubscription?.unsubscribe();
  }
}
