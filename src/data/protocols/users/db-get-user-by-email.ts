import { UserEntity } from 'src/domain/models/user.entity';

export abstract class GetUserByEmailRepository {
  abstract getByEmail(email: string): Promise<UserEntity | null>;
}
