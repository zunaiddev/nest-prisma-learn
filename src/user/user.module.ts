import { Module } from '@nestjs/common';
import { UserService } from './user.service.js';
import { UserController } from './user.controller.js';
import { LogService } from './log.service.js';

@Module({
  providers: [UserService, LogService],
  controllers: [UserController],
})
export class UserModule {}
