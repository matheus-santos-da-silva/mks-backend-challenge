import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from 'src/domain/models/user.entity';

export class UserResponseViewModel {
  @ApiProperty({ example: 'a7f02e9e-a1da-48df-b64d-81789128cb73' })
  public id: string;

  @ApiProperty({ example: 'johndoe@example.com' })
  public email: string;

  constructor(id: string, email: string) {
    this.id = id;
    this.email = email;
  }

  static toViewModel({ id, email }: UserEntity): UserResponseViewModel {
    return new UserResponseViewModel(id, email);
  }
}
