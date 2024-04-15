import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { compare } from 'bcrypt';
import { GetUserByEmailRepository } from '../../../data/protocols/users/db-get-user-by-email';
import { createUserToken } from '../../utils/create-user-token';
import { UserDTO } from '../../../domain/DTOS/users/user-dto';
import { LoginUser, LoginUserResponse } from '../../../domain/use-cases/users';

@Injectable()
export class LoginUserImplementation implements LoginUser {
  constructor(private readonly repository: GetUserByEmailRepository) {}

  async login({ email, password }: UserDTO): Promise<LoginUserResponse> {
    const user = await this.repository.getByEmail(email);
    if (!user) {
      throw new NotFoundException('User was not found');
    }

    const checkPassword = await compare(password, user.password);
    if (!checkPassword) throw new UnauthorizedException('Wrong password');

    const token = await createUserToken({
      email: user.email,
      id: user.id,
    });

    return {
      token,
    };
  }
}
