import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrecipesComponent } from './addrecipes.component';

describe('AddrecipesComponent', () => {
  let component: AddrecipesComponent;
  let fixture: ComponentFixture<AddrecipesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddrecipesComponent]
    });
    fixture = TestBed.createComponent(AddrecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
