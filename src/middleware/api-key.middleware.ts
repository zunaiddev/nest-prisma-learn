import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ApiKeyMiddleware implements NestMiddleware {
  use(req: Request, _: Response, next: NextFunction) {
    const apiKey = req.headers['x-api-key'];

    if (apiKey !== 'secret') {
      throw new UnauthorizedException('Invalid api key');
    }

    next();
  }
}
