import { IsNotEmpty, IsString } from 'class-validator';

export class DeleteUserDto {
  @IsNotEmpty()
  @IsString()
  public readonly password: string;

  constructor(password: string) {
    this.password = password;
  }
}