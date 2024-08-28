/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Body,
  BadRequestException,
  Headers,
} from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';

@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) { }

  @Post()
  createTeste(@Body() user: CreateRecipeDto) {
    if (!user.email || !user.name)
      throw new BadRequestException('User or Email invalid');

    return this.recipeService.create(user);
  }

  @Post('teste')
  create(@Headers() user: CreateRecipeDto) {
    if (!user.authorization)
      throw new BadRequestException('Missing authorization header');

     this.recipeService.create(user);
  }

  @Get()
  findAll() {
    return this.recipeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recipeService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateRecipeDto: UpdateRecipeDto) {
  //   return this.recipeService.update(+id, updateRecipeDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recipeService.remove(+id);
  }
}
