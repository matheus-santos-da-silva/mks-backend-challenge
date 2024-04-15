import { Module } from '@nestjs/common';
import {
  CreateMovie,
  DeleteMovie,
  GetAllMovies,
  GetMovieById,
  UpdateMovie,
} from 'src/domain/use-cases/movies';
import { CreateMovieImplementation } from './create-movie-impl';
import { MoviesRepositoriesModule } from 'src/infra/database/repositories/movies/movies-repositories.module';
import { GetAllMoviesImplementation } from './get-all-movies-impl';
import { GetMovieByIdImplementation } from './get-movie-by-id-impl';
import { UpdateMovieImplementation } from './update-movie-impl';
import { DeleteMovieImplementation } from './delete-movie-impl';

@Module({
  imports: [MoviesRepositoriesModule],
  providers: [
    {
      provide: CreateMovie,
      useClass: CreateMovieImplementation,
    },
    {
      provide: GetAllMovies,
      useClass: GetAllMoviesImplementation,
    },
    {
      provide: GetMovieById,
      useClass: GetMovieByIdImplementation,
    },
    {
      provide: UpdateMovie,
      useClass: UpdateMovieImplementation,
    },
    {
      provide: DeleteMovie,
      useClass: DeleteMovieImplementation,
    },
  ],
  exports: [CreateMovie, GetAllMovies, GetMovieById, UpdateMovie, DeleteMovie],
})
export class MoviesUseCasesModule {}
