import { TestingModule, Test } from '@nestjs/testing';
import { UserEntityMock } from '../../mocks/users/user.mock';
import { CreateUserImplementation } from '../../../data/use-cases-implementation/users/create-user-impl';
import { CreateUserRepository } from '../../../data/protocols/users/db-create-user';
import { GetUserByEmailRepository } from '../../../data/protocols/users/db-get-user-by-email';
import { ConflictException } from '@nestjs/common';
import { InMemoryCreateUserRepository } from '../../in-memory-repositories/users/in-memory-create-user-repository';
import { InMemoryGetUserByEmailRepository } from '../../in-memory-repositories/users/in-memory-get-user-by-email-repository';

describe('Create-User use-case', () => {
  let useCase: CreateUserImplementation;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateUserImplementation,
        {
          provide: CreateUserRepository,
          useClass: InMemoryCreateUserRepository,
        },
        {
          provide: GetUserByEmailRepository,
          useClass: InMemoryGetUserByEmailRepository,
        },
      ],
    }).compile();

    useCase = module.get<CreateUserImplementation>(CreateUserImplementation);
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('should return a new user', async () => {
    const user = await useCase.create({
      email: UserEntityMock.email,
      password: UserEntityMock.password,
    });
    expect(user.email).toEqual(UserEntityMock.email);
  });

  it('should return conflict error if email is already in use', async () => {
    useCase.create({
      email: UserEntityMock.email,
      password: UserEntityMock.password,
    });

    try {
      await useCase.create({
        email: UserEntityMock.email,
        password: UserEntityMock.password,
      });
    } catch (error) {
      expect(error).toBeInstanceOf(ConflictException);
    }
  });
});
