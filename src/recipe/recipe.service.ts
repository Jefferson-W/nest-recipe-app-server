import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { initializeApp, cert } from 'firebase-admin/app';

initializeApp({
  credential: cert('./src/recipe/utils/serviceAccountKey.json'),
});

@Injectable()
export class RecipeService {
  create(user: CreateRecipeDto) {
    console.log(user);
    return user;
  }

  findAll(): string {
    return `This action returns all recipe`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recipe`;
  }

  // update(id: number, updateRecipeDto: UpdateRecipeDto) {
  //   return `This action updates a #${id} recipe`;
  // }

  remove(id: number) {
    return `This action removes a #${id} recipe`;
  }
}
