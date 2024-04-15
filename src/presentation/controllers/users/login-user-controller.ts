import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { LoginUser, LoginUserResponse } from 'src/domain/use-cases/users';
import {
  HttpNotFoundError,
  HttpUnauthorizedError,
} from 'src/presentation/swagger/http-error';
import {
  LoginUserResponseVM,
  LoginUserVM,
} from 'src/presentation/view-models/users/login-user-vm';

@ApiTags('Users')
@Controller('users')
export class LoginUserController {
  constructor(private readonly loginUser: LoginUser) {}

  @ApiOperation({ summary: 'Login User' })
  @ApiResponse({
    status: 200,
    description: 'Success',
    type: LoginUserResponseVM,
  })
  @ApiResponse(HttpNotFoundError)
  @ApiResponse(HttpUnauthorizedError)
  @Post('login')
  @HttpCode(200)
  async execute(@Body() user: LoginUserVM): Promise<LoginUserResponse> {
    const result = await this.loginUser.login(user);
    return result;
  }
}
