import { MovieEntity } from 'src/domain/models/movie.entity';

export abstract class GetAllMovies {
  abstract getAll(): Promise<MovieEntity[]>;
}
