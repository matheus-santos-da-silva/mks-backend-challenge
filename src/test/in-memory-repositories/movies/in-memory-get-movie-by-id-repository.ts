import { MovieEntity } from 'src/domain/models/movie.entity';
import { GetMovieByIdRepository } from '../../../data/protocols/movies';
import { MovieEntityMock } from '../../mocks/movies/movie.mock';

export class InMemoryGetMovieByIdRepository implements GetMovieByIdRepository {
  movies: MovieEntity[] = [MovieEntityMock];

  async getById(movieId: string): Promise<MovieEntity> {
    const movie = this.movies.find((movie) => movie.id === movieId);
    return movie;
  }
}
