import { NestFactory } from '@nestjs/core';
import { RecipeModule } from './recipe/recipe.module';

async function bootstrap() {
  const app = await NestFactory.create(RecipeModule);
  await app.listen(3005);
}
bootstrap();
