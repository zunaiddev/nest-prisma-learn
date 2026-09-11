import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserCache } from '../auth/user.cache.js';

@Injectable()
export class UserService {
  constructor(private readonly userCache: UserCache) {}

  getUser(id: number) {
    const user = this.userCache.getById(id);

    if (!user) {
      throw new NotFoundException(`User not found with id ${id}`);
    }

    return { id: user.id, name: user.name, email: user.email, role: user.role };
  }

  deleteUser(id: number, password: string): void {
    const user = this.userCache.getById(id);

    if (!user) {
      throw new NotFoundException(`User not found with id ${id}`);
    }

    if (user.password !== password) {
      throw new UnauthorizedException('Invalid password');
    }

    this.userCache.delete(id);
  }
}
