import { Body, Controller, Post } from '@nestjs/common';
import { SignupResponseDto } from './dto/signup-response.dto.js';
import { AuthService } from './auth.service.js';
import { SignupRequestDto } from './dto/signup-request.dto.js';
import { LoginRequestDto } from './dto/login-request.dto.js';
import { LoginResponseDto } from './dto/login-response.dto.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() signupReq: SignupRequestDto): Promise<SignupResponseDto> {
    return await this.authService.signup(signupReq);
  }

  @Post('login')
  async login(@Body() loginReq: LoginRequestDto): Promise<LoginResponseDto> {
    return await this.authService.login(loginReq);
  }
}