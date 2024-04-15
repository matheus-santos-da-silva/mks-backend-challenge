import { MovieEntity } from '../../../domain/models/movie.entity';

export abstract class CreateMovieRepository {
  abstract create(movie: MovieEntity): Promise<MovieEntity>;
}
