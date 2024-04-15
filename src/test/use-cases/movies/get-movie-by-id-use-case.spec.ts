import { Test, TestingModule } from '@nestjs/testing';
import { GetMovieByIdRepository } from '../../../data/protocols/movies';
import { MovieEntityMock } from '../../mocks/movies/movie.mock';
import { GetMovieByIdImplementation } from '../../../data/use-cases-implementation/movies/get-movie-by-id-impl';
import { InMemoryGetMovieByIdRepository } from '../../in-memory-repositories/movies/in-memory-get-movie-by-id-repository';

describe('Get-Movie-By-Id use-case', () => {
  let useCase: GetMovieByIdImplementation;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetMovieByIdImplementation,
        {
          provide: GetMovieByIdRepository,
          useClass: InMemoryGetMovieByIdRepository,
        },
      ],
    }).compile();

    useCase = module.get<GetMovieByIdImplementation>(
      GetMovieByIdImplementation,
    );
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('should return a movie', async () => {
    const movie = await useCase.getById(MovieEntityMock.id);
    expect(movie).toEqual(MovieEntityMock);
  });
});
