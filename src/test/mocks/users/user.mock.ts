import { UserEntity } from '../../../domain/models/user.entity';

export const UserEntityMock: UserEntity = {
  id: '1',
  email: 'johndoe@example.com',
  password: '123',
  createdAt: String(new Date()),
  updatedAt: String(new Date()),
};
