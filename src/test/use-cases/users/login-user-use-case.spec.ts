import { Test, TestingModule } from '@nestjs/testing';
import { LoginUserImplementation } from '../../../data/use-cases-implementation/users/login-user-impl';
import { GetUserByEmailRepository } from '../../../data/protocols/users/db-get-user-by-email';
import { UserEntityMock } from '../../mocks/users/user.mock';
import * as bcrypt from 'bcrypt';
import { NotFoundException, UnauthorizedException } from '@nestjs/common';

const getUserByEmailRepositoryMock = {
  getByEmail: jest.fn().mockResolvedValue(UserEntityMock),
};

jest.mock('bcrypt', () => ({
  compare: jest.fn(),
}));

describe('Login-User use-case', () => {
  let useCase: LoginUserImplementation;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        LoginUserImplementation,
        {
          provide: GetUserByEmailRepository,
          useValue: getUserByEmailRepositoryMock,
        },
      ],
    }).compile();

    useCase = module.get<LoginUserImplementation>(LoginUserImplementation);
    (bcrypt.compare as jest.Mock).mockClear();
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('should return token in login-user', async () => {
    (bcrypt.compare as jest.Mock).mockResolvedValue(true);
    const result = await useCase.login({
      email: UserEntityMock.email,
      password: UserEntityMock.password,
    });

    expect(result).toMatchObject({ token: expect.any(String) });
  });

  it('should return UnauthorizedException if password is wrong', async () => {
    (bcrypt.compare as jest.Mock).mockResolvedValue(false);
    expect(
      useCase.login({
        email: UserEntityMock.email,
        password: '1234',
      }),
    ).rejects.toThrow(UnauthorizedException);
  });

  it('should return NotFoundException if user not exists', async () => {
    jest
      .spyOn(getUserByEmailRepositoryMock, 'getByEmail')
      .mockResolvedValue(undefined);
    expect(
      useCase.login({
        email: 'non-existent-email',
        password: 'wrong-password',
      }),
    ).rejects.toThrow(NotFoundException);
  });
});
