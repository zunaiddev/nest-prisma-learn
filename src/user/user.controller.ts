import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Req, UseGuards } from '@nestjs/common';
import { UserService } from './user.service.js';
import { UserGuard } from '../guards/user.guard.js';
import { DeleteUserDto } from './dto/delete-user.dto.js';

@UseGuards(UserGuard)
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(@Req() req: any) {
    return this.userService.getUser(req['id']);
  }

  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  deleteUser(@Body() passwordReq: DeleteUserDto, @Req() req: any): void {
    this.userService.deleteUser(req['id'], passwordReq.password);
  }
}