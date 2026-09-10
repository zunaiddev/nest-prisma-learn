import { Module } from '@nestjs/common';

import { AppService } from './app.service.js';
import { UserModule } from './user/user.module.js';
import { AuthModule } from './auth/auth.module.js';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule /*implements NestModule*/ {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(ApiKeyMiddleware).forRoutes(UserController);
  // }
}
