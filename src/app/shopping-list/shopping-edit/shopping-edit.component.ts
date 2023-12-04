import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('myForm', { static: false }) slForm!: NgForm;
  constructor(private shoppingService: ShoppingListService) {}
  editSubscription: Subscription | undefined;
  editMode: boolean = false;
  editedItemIndex: number = 0;
  editItem: Ingredient = new Ingredient('', 0);
  ngOnInit(): void {
    this.editSubscription = this.shoppingService.startEditing.subscribe(
      (index) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editItem = this.shoppingService.getIngredient(index);
        this.slForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount,
        });
      }
    );
  }
  addIngredientToList(form: NgForm) {
    const value = form.value;
    const newIngredient: Ingredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingService.updateIngredient(
        this.editedItemIndex,
        newIngredient
      );
    } else {
      this.shoppingService.addIngredient(newIngredient);
    }
    form.reset();
    this.editMode = false;
  }
  resetTheForm() {
    this.slForm.reset();
  }
  deleteSelectedIngredient(index: number) {
    this.shoppingService.deleteIngredient(index);
  }
  ngOnDestroy(): void {
    this.editSubscription?.unsubscribe();
  }
}
