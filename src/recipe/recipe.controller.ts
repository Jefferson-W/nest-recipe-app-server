/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  UseGuards,
  Body,
} from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { RecipeGuard } from './recipe.guard';

@UseGuards(RecipeGuard)
@Controller('recipe')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) { }

  @Post('teste')
  create(@Body() user: CreateRecipeDto) {
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
