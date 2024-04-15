import { Test, TestingModule } from '@nestjs/testing';
import { CreateMovieImplementation } from '../../../data/use-cases-implementation/movies/create-movie-impl';
import { CreateMovieRepository } from '../../../data/protocols/movies';
import { MovieEntityMock } from '../../mocks/movies/movie.mock';
import { InMemoryCreateMovieRepository } from '../../in-memory-repositories/movies/in-memory-create-movie-repository';

describe('Create-Movie use-case', () => {
  let useCase: CreateMovieImplementation;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateMovieImplementation,
        {
          provide: CreateMovieRepository,
          useClass: InMemoryCreateMovieRepository,
        },
      ],
    }).compile();

    useCase = module.get<CreateMovieImplementation>(CreateMovieImplementation);
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('should return a new movie', async () => {
    const movie = await useCase.create(MovieEntityMock);
    expect(movie).toEqual(MovieEntityMock);
  });
});
