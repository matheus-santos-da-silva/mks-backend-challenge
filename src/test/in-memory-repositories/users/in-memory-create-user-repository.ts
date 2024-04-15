import { CreateUserRepository } from '../../../data/protocols/users';
import { UserDTO } from '../../../domain/DTOS/users/user-dto';
import { UserEntity } from '../../../domain/models/user.entity';

export class InMemoryCreateUserRepository implements CreateUserRepository {
  users: UserEntity[] = [];

  async create(user: UserDTO): Promise<UserEntity> {
    this.users.push(user);
    return user;
  }
}
