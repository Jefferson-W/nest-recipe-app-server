import { CreateRecipeDto } from './dto/create-recipe.dto';
export declare class RecipeService {
    createTeste(user: CreateRecipeDto): CreateRecipeDto;
    create(user: CreateRecipeDto): any;
    findAll(): any[];
    findOne(id: number): string;
    remove(id: number): string;
}
