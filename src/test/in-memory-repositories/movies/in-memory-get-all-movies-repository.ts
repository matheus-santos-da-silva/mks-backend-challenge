import { GetAllMoviesRepository } from '../../../data/protocols/movies';
import { MovieEntity } from '../../../domain/models/movie.entity';
import { MovieEntityMock } from '../../mocks/movies/movie.mock';

export class InMemoryGetAllMoviesRepository implements GetAllMoviesRepository {
  movies: MovieEntity[] = [MovieEntityMock, MovieEntityMock, MovieEntityMock];

  async getAll(): Promise<MovieEntity[]> {
    return this.movies;
  }
}
