import { CreateMovieDTO } from 'src/domain/DTOS/movies/create-movie-dto';
import { MovieEntity } from 'src/domain/models/movie.entity';

export abstract class CreateMovie {
  abstract create(movie: CreateMovieDTO): Promise<MovieEntity>;
}
