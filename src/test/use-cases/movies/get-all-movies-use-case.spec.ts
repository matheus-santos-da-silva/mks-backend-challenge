import { Test, TestingModule } from '@nestjs/testing';
import { GetAllMoviesImplementation } from '../../../data/use-cases-implementation/movies';
import { InMemoryGetAllMoviesRepository } from '../../in-memory-repositories/movies/in-memory-get-all-movies-repository';
import { GetAllMoviesRepository } from '../../../data/protocols/movies';

describe('Get-All-Movies use-case', () => {
  let useCase: GetAllMoviesImplementation;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetAllMoviesImplementation,
        {
          provide: GetAllMoviesRepository,
          useClass: InMemoryGetAllMoviesRepository,
        },
      ],
    }).compile();

    useCase = module.get<GetAllMoviesImplementation>(
      GetAllMoviesImplementation,
    );
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('should return array of movies', async () => {
    const movies = await useCase.getAll();
    expect(movies).toHaveLength(3);
  });
});
