import { Injectable } from '@nestjs/common';
import { LogService } from './log.service.js';

@Injectable()
export class UserService {
  private readonly list = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Rio' },
    { id: 3, name: 'Thor' },
  ];

  constructor(private readonly loggerService: LogService) {}

  getAllUsers() {
    this.loggerService.log('Getting all users');
    return this.list;
  }
}
