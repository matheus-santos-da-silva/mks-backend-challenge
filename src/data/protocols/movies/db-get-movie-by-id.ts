import { MovieEntity } from '../../../domain/models/movie.entity';

export abstract class GetMovieByIdRepository {
  abstract getById(movieId: string): Promise<MovieEntity>;
}
