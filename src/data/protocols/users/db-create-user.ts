import { UserDTO } from 'src/domain/DTOS/users/user-dto';
import { UserEntity } from 'src/domain/models/user.entity';

export abstract class CreateUserRepository {
  abstract create(user: UserDTO): Promise<UserEntity>;
}
