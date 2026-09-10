export class SignupResponseDto {
  public readonly id: number;
  public readonly name: string;
  public readonly email: string;
  public readonly role: string;

  constructor(id: number, name: string, email: string, role: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.role = role;
  }
}
