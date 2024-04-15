import { UpdateMovieDTO } from 'src/domain/DTOS/movies/update-movie-dto';
import { MovieEntity } from 'src/domain/models/movie.entity';

export abstract class UpdateMovie {
  abstract update(movieId: string, data: UpdateMovieDTO): Promise<MovieEntity>;
}
