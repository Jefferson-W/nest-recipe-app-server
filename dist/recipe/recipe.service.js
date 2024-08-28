"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipeService = void 0;
const common_1 = require("@nestjs/common");
const auth_1 = require("firebase-admin/auth");
const app_1 = require("firebase-admin/app");
(0, app_1.initializeApp)({
    credential: (0, app_1.cert)('./src/recipe/utils/serviceAccountKey.json'),
});
global.users = [];
let RecipeService = class RecipeService {
    createTeste(user) {
        global.users.push({ user });
        return user;
    }
    create(user) {
        const idToken = user.authorization;
        (0, auth_1.getAuth)()
            .verifyIdToken(idToken)
            .then((decodedToken) => {
            const uid = decodedToken.uid;
            user.uid = uid;
            console.log('\n\nEsse é o uid:\n', user.uid);
            return user.uid;
        })
            .catch(() => {
            return new common_1.UnauthorizedException();
        });
        return user.uid;
    }
    findAll() {
        return global.users;
    }
    findOne(id) {
        return `This action returns a #${id} recipe`;
    }
    remove(id) {
        return `This action removes a #${id} recipe`;
    }
};
exports.RecipeService = RecipeService;
exports.RecipeService = RecipeService = __decorate([
    (0, common_1.Injectable)()
], RecipeService);
//# sourceMappingURL=recipe.service.js.map