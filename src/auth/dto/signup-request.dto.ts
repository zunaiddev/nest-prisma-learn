import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';

export class SignupRequestDto {
  @IsNotEmpty()
  @IsString()
  public readonly name: string;

  @IsEmail()
  public readonly email: string;

  @IsStrongPassword()
  public readonly password: string;

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}