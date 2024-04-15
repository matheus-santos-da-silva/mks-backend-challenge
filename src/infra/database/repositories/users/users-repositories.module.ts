import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/domain/models/user.entity';
import { CreateUserRepository } from 'src/data/protocols/users';
import { UsersRepository } from './users-repository';
import { GetUserByEmailRepository } from 'src/data/protocols/users/db-get-user-by-email';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [
    {
      provide: CreateUserRepository,
      useClass: UsersRepository,
    },
    {
      provide: GetUserByEmailRepository,
      useClass: UsersRepository,
    },
  ],
  exports: [CreateUserRepository, GetUserByEmailRepository],
})
export class UsersRepositoriesModule {}
