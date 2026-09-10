export class LoginResponseDto {
  public readonly id: number;
  public readonly accessToken: string;

  constructor(id: number, accessToken: string) {
    this.id = id;
    this.accessToken = accessToken;
  }
}
