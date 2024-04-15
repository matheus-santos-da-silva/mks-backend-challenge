import { Injectable } from '@nestjs/common';
import { CreateUserRepository } from '../../../../data/protocols/users';
import { UserDTO } from '../../../../domain/DTOS/users/user-dto';
import { UserEntity } from '../../../../domain/models/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GetUserByEmailRepository } from '../../../../data/protocols/users/db-get-user-by-email';

@Injectable()
export class UsersRepository
  implements CreateUserRepository, GetUserByEmailRepository
{
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async getByEmail(email: string): Promise<UserEntity> {
    const user = await this.userRepository.findOne({ where: { email } });
    return user;
  }

  async create(user: UserDTO): Promise<UserEntity> {
    const newUser = await this.userRepository.save(user);
    return newUser;
  }
}
