import { Module } from '@nestjs/common';
import { CreateUser, LoginUser } from 'src/domain/use-cases/users';
import { CreateUserImplementation } from './create-user-impl';
import { UsersRepositoriesModule } from 'src/infra/database/repositories/users/users-repositories.module';
import { LoginUserImplementation } from './login-user-impl';

@Module({
  imports: [UsersRepositoriesModule],
  providers: [
    {
      provide: CreateUser,
      useClass: CreateUserImplementation,
    },
    {
      provide: LoginUser,
      useClass: LoginUserImplementation,
    },
  ],
  exports: [CreateUser, LoginUser],
})
export class UsersUseCasesModule {}
