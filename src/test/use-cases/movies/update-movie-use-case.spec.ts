import { Test, TestingModule } from '@nestjs/testing';
import { UpdateMovieRepository } from '../../../data/protocols/movies/db-update-movie';
import { MovieEntityMock } from '../../mocks/movies/movie.mock';
import { UpdateMovieImplementation } from '../../../data/use-cases-implementation/movies/update-movie-impl';
import { InMemoryUpdateMovieRepository } from '../../in-memory-repositories/movies/in-memory-update-movie-repository';

describe('Update-Movie use-case', () => {
  let useCase: UpdateMovieImplementation;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UpdateMovieImplementation,
        {
          provide: UpdateMovieRepository,
          useClass: InMemoryUpdateMovieRepository,
        },
      ],
    }).compile();

    useCase = module.get<UpdateMovieImplementation>(UpdateMovieImplementation);
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('should return a updated movie', async () => {
    const movie = await useCase.update(MovieEntityMock.id, {
      director: 'updated-movie-director',
    });
    expect(movie.director).toEqual('updated-movie-director');
  });
});
