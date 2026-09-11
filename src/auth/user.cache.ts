import type { UserType } from '../types/UserType.js';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserCache {
  private list: UserType[] = [];
  private static LAST_ID: number = 0;

  getById(id: number): UserType | undefined {
    return this.list.find((user: UserType) => user.id === id);
  }

  getByEmail(email: string): UserType | undefined {
    return this.list.find((user: UserType) => user.email === email);
  }

  saveUser(user: UserType): UserType {
    user.id = ++UserCache.LAST_ID;
    this.list.push(user);

    return user;
  }

  delete(id: number) {
    this.list = this.list.filter((user: UserType) => user.id !== id);
  }
}
