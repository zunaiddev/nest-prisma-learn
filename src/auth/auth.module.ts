import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller.js';
import { AuthService } from './auth.service.js';
import { UserCache } from './user.cache.js';

@Module({
  controllers: [AuthController],
  providers: [AuthService, UserCache],
  exports: [UserCache],
})
export class AuthModule {}
