import { CreateMovieRepository } from '../../../data/protocols/movies';
import { MovieEntity } from '../../../domain/models/movie.entity';

export class InMemoryCreateMovieRepository implements CreateMovieRepository {
  movies: MovieEntity[] = [];

  async create(movie: MovieEntity): Promise<MovieEntity> {
    this.movies.push(movie);
    return movie;
  }
}
