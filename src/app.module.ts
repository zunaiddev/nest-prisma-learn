import { Module } from '@nestjs/common';

import { AppService } from './app.service.js';
import { UserModule } from './user/user.module.js';
import { AuthModule } from './auth/auth.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/User.js';

@Module({
  imports: [
    UserModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'pass',
      database: 'mydb',
      entities: [User],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule /*implements NestModule*/ {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer.apply(ApiKeyMiddleware).forRoutes(UserController);
  // }
}