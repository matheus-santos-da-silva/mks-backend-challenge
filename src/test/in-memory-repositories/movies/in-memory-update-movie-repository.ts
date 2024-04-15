import { UpdateMovieRepository } from '../../../data/protocols/movies';
import { UpdateMovieDTO } from '../../../domain/DTOS/movies/update-movie-dto';
import { MovieEntity } from '../../../domain/models/movie.entity';
import { MovieEntityMock } from '../../mocks/movies/movie.mock';

export class InMemoryUpdateMovieRepository implements UpdateMovieRepository {
  movies: MovieEntity[] = [MovieEntityMock];

  async update(movieId: string, data: UpdateMovieDTO): Promise<MovieEntity> {
    for (const movie of this.movies) {
      if (movie.id === movieId) {
        Object.assign(movie, data);
      }
    }

    const movie = this.movies.find((movie) => movie.id === movieId);
    return movie;
  }
}
