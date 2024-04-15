import { DeleteMovieRepository } from '../../../data/protocols/movies';
import { MovieEntity } from '../../../domain/models/movie.entity';
import { MovieEntityMock } from '../../mocks/movies/movie.mock';

export class InMemoryDeleteMovieRepository implements DeleteMovieRepository {
  movies: MovieEntity[] = [MovieEntityMock];

  async delete(movieId: string): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const movie of this.movies) {
      const index = this.movies.findIndex((movie) => movie.id === movieId);
      this.movies.splice(index, 1);
      console.log('deleted with succesffull');
    }
  }
}
