import { UpdateMovieDTO } from '../../../domain/DTOS/movies/update-movie-dto';
import { MovieEntity } from '../../../domain/models/movie.entity';

export abstract class UpdateMovieRepository {
  abstract update(movieId: string, data: UpdateMovieDTO): Promise<MovieEntity>;
}
