import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
export declare class RecipeController {
    private readonly recipeService;
    constructor(recipeService: RecipeService);
    createTeste(user: CreateRecipeDto): any;
    create(user: CreateRecipeDto): void;
    findAll(): any[];
    findOne(id: string): string;
    remove(id: string): string;
}
