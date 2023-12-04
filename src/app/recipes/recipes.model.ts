import { v4 as uuidv4 } from 'uuid';
import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  constructor(
    public id: string = uuidv4(),
    public name: string,
    public description: string,
    public imagePath: string,
    public ingredients: Ingredient[]
  ) {}
}
