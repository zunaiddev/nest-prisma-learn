import { Injectable } from '@nestjs/common';
import { SignupRequestDto } from './dto/signup-request.dto.js';
import { SignupResponseDto } from './dto/signup-response.dto.js';
import { LoginRequestDto } from './dto/login-request.dto.js';
import { LoginResponseDto } from './dto/login-response.dto.js';

@Injectable()
export class AuthService {
  async signup(signupReq: SignupRequestDto): Promise<SignupResponseDto> {
    return new SignupResponseDto(1, 'john', '', '');
  }

  async login(loginReq: LoginRequestDto): Promise<LoginResponseDto> {
    return new LoginResponseDto(1, 'access-token');
  }
}
