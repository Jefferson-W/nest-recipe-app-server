import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { getAuth } from 'firebase-admin/auth';
import { Observable } from 'rxjs';

@Injectable()
export class RecipeGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers?.authorization;
    if (!token) {
      throw new UnauthorizedException();
    }

    getAuth()
      .verifyIdToken(token)
      .then((decodedToken) => {
        const uid = decodedToken.uid;
        request['uid'] = uid;
        console.log(uid);
      })
      .catch(() => {
        throw new UnauthorizedException();
      });

    return true;
  }
}
