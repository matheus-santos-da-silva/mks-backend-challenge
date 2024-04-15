import { UserDTO } from 'src/domain/DTOS/users/user-dto';

export interface LoginUserResponse {
  token: string;
}

export abstract class LoginUser {
  abstract login(user: UserDTO): Promise<LoginUserResponse>;
}
