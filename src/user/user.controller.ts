import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { UserGuard } from '../guards/user.guard.js';

@UseGuards(UserGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getAllUsers();
  }

  @Post()
  addUser(@Body() createUserDto: CreateUserDto) {
    return createUserDto;
  }
}
