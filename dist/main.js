"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const recipe_module_1 = require("./recipe/recipe.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(recipe_module_1.RecipeModule);
    await app.listen(3005);
}
bootstrap();
//# sourceMappingURL=main.js.map