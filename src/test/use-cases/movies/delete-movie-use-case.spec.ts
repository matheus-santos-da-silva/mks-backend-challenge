import { Test, TestingModule } from '@nestjs/testing';
import { DeleteMovieImplementation } from '../../../data/use-cases-implementation/movies';
import { InMemoryDeleteMovieRepository } from '../../in-memory-repositories/movies/in-memory-delete-movie-repository';
import { DeleteMovieRepository } from '../../../data/protocols/movies';
import { MovieEntityMock } from '../../../test/mocks/movies/movie.mock';

describe('Delete-Movie use-case', () => {
  let useCase: DeleteMovieImplementation;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeleteMovieImplementation,
        {
          provide: DeleteMovieRepository,
          useClass: InMemoryDeleteMovieRepository,
        },
      ],
    }).compile();

    useCase = module.get<DeleteMovieImplementation>(DeleteMovieImplementation);
  });

  it('should be defined', () => {
    expect(useCase).toBeDefined();
  });

  it('should delete the movie that id showed', async () => {
    await useCase.delete(MovieEntityMock.id);
  });
});
