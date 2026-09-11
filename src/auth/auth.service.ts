import { ConflictException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { SignupRequestDto } from './dto/signup-request.dto.js';
import { SignupResponseDto } from './dto/signup-response.dto.js';
import { LoginRequestDto } from './dto/login-request.dto.js';
import { LoginResponseDto } from './dto/login-response.dto.js';
import { UserCache } from './user.cache.js';
import type { UserType } from '../types/UserType.js';

@Injectable()
export class AuthService {
  constructor(private readonly userCache: UserCache) {}

  async signup(signupReq: SignupRequestDto): Promise<SignupResponseDto> {
    const { name, email, password } = signupReq;

    if (this.userCache.getByEmail(email)) {
      throw new ConflictException(`Email ${email} already exists`);
    }

    const user: UserType = this.userCache.saveUser({ id: 0, name, email, password, role: 'USER' });

    return new SignupResponseDto(user.id, user.name, user.email, user.role);
  }

  async login(loginReq: LoginRequestDto): Promise<LoginResponseDto> {
    const user: UserType | undefined = this.userCache.getByEmail(loginReq.email);

    if (!user) {
      throw new NotFoundException(`Email ${loginReq.email} not found`);
    }

    if (user.password !== loginReq.password) {
      throw new UnauthorizedException('Incorrect password');
    }

    return new LoginResponseDto(user.id, `${user.id}.${user.email}.access-token`);
  }
}
