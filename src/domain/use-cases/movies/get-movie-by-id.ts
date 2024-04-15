import { MovieEntity } from 'src/domain/models/movie.entity';

export abstract class GetMovieById {
  abstract getById(movieId: string): Promise<MovieEntity>;
}
