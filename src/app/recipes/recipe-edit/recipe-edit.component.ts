import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  id: string = '';
  editMode: boolean = false;
  recipeSubscription: Subscription | undefined;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.recipeSubscription = this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.editMode = params['id'] != null;
    });
  }
  ngOnDestroy(): void {
    if (this.recipeSubscription) this.recipeSubscription.unsubscribe();
  }
}
