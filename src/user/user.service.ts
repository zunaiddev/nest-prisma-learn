import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private readonly list = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Rio' },
    { id: 3, name: 'Thor' },
  ];

  getAllUsers() {
    return this.list;
  }
}