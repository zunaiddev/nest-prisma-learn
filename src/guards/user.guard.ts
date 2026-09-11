import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class UserGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();

    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('Authorization header is missing');
    }

    const [type, token] = authHeader.split(' ');

    if (type !== 'Bearer' || !token) {
      throw new UnauthorizedException('Authorization header must start with Bearer');
    }

    const [rawId] = token.split('.');
    const id = Number(rawId);

    if (isNaN(id) || !rawId) {
      throw new UnauthorizedException('Invalid Token');
    }

    request['id'] = id;

    return true;
  }
}
