import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { initializeApp, cert } from 'firebase-admin/app';

initializeApp({
  credential: cert('./src/recipe/utils/serviceAccountKey.json'),
});

global.users = [];

@Injectable()
export class RecipeService {
  createTeste(user: CreateRecipeDto) {
    global.users.push({ user });
    return user;
  }

  create(user: CreateRecipeDto) {
    return user;
  }

  findAll(): any[] {
    return global.users;
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
