import { GetUserByEmailRepository } from '../../../data/protocols/users/db-get-user-by-email';
import { UserEntity } from '../../../domain/models/user.entity';

export class InMemoryGetUserByEmailRepository
  implements GetUserByEmailRepository
{
  users: UserEntity[] = [];

  async getByEmail(email: string): Promise<UserEntity | null> {
    const user = this.users.find((user) => user.email === email);
    if (!user) return null;
    return user;
  }
}
