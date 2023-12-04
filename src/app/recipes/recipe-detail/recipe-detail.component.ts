import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipesService } from 'src/app/services/recipes.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  finalRecivedRecipe: Recipe = new Recipe('', '', '', '', []);
  selectedId: string = '';
  recipeDetailSub: Subscription | undefined;
  constructor(
    private recipeService: RecipesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipeDetailSub = this.route.params.subscribe((params) => {
      this.selectedId = params['id'];
      const selectedItem = this.recipeService.getRecipe(this.selectedId);
      if (selectedItem) {
        this.finalRecivedRecipe = selectedItem;
      }
    });
  }
  addToShoppingList() {
    this.recipeService.addSelectedRecipeToShoppingList(
      this.finalRecivedRecipe.ingredients
    );
  }
  ngOnDestroy(): void {
    if (this.recipeDetailSub) this.recipeDetailSub.unsubscribe();
  }
}
