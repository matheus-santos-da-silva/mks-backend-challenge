import { Module } from '@nestjs/common';
import { UsersUseCasesModule } from 'src/data/use-cases-implementation/users/users-use-cases.module';
import { CreateUserController } from './create-user-controller';
import { LoginUserController } from './login-user-controller';

@Module({
  imports: [UsersUseCasesModule],
  controllers: [CreateUserController, LoginUserController],
})
export class UsersControllersModule {}
