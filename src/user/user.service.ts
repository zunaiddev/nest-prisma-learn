import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entity/User.js';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}

  async getUser(id: number) {
    const user: User | null = await this.getUserById(id);

    if (!user) {
      throw new NotFoundException(`User not found with id ${id}`);
    }

    return { id: user.id, name: user.name, email: user.email, role: user.role };
  }

  async deleteUser(id: number, password: string): Promise<void> {
    const user: User | null = await this.getUserById(id);

    if (!user) {
      throw new NotFoundException(`User not found with id ${id}`);
    }

    if (user.password !== password) {
      throw new UnauthorizedException('Invalid password');
    }

    await this.userRepository.delete(id);
  }

  async saveUser(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  async getUserById(id: number): Promise<User | null> {
    return await this.userRepository.findOne({ where: { id } });
  }

  async getUserByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findOne({ where: { email } });
  }
}
