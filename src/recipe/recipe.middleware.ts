import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
  BadRequestException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { getAuth } from 'firebase-admin/auth';

@Injectable()
export class VerifyTokenMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (!req.headers['authorization'])
      throw new BadRequestException('Missing authorization header');

    const authHeader = req.headers['authorization'];

    getAuth()
      .verifyIdToken(authHeader)
      .then((decodedToken) => {
        const uid = decodedToken.uid;
        req.headers.uid = uid;
        return res.status(HttpStatus.OK).json({ uid: req.headers.uid });
      })
      .catch(() => {
        return res
          .status(HttpStatus.UNAUTHORIZED)
          .json({ erro: new UnauthorizedException() });
      });

    next();
  }
}
