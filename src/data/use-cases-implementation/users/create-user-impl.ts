import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserRepository } from '../../../data/protocols/users';
import { GetUserByEmailRepository } from '../../../data/protocols/users/db-get-user-by-email';
import { encryptingPass } from '../../../data/utils/encrypt-pass';
import { UserDTO } from '../../../domain/DTOS/users/user-dto';
import { UserEntity } from '../../../domain/models/user.entity';
import { CreateUser } from '../../../domain/use-cases/users';

@Injectable()
export class CreateUserImplementation implements CreateUser {
  constructor(
    private readonly repository: CreateUserRepository,
    private readonly getUserByEmail: GetUserByEmailRepository,
  ) {}

  async create({ email, password }: UserDTO): Promise<UserEntity> {
    const checkUserEmail = await this.getUserByEmail.getByEmail(email);

    if (checkUserEmail) {
      throw new ConflictException('This email is already in use');
    }

    const hashPassword = await encryptingPass(password);

    const newUser = await this.repository.create({
      email,
      password: hashPassword,
    });

    return newUser;
  }
}
