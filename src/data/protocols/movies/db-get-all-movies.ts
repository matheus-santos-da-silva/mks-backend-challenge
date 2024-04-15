import { MovieEntity } from '../../../domain/models/movie.entity';

export abstract class GetAllMoviesRepository {
  abstract getAll(): Promise<MovieEntity[]>;
}
